
import { defineStore } from 'pinia';
import router from '@/router';
import { initUserChecks, initUserDataEntered, PremiumStatus, type PathNode, type StudyData, type UserChecks, type UserData, type StudyState, emptyUserData, emptyTaskData, type Questionnaire, type TaskData } from '@/interface';
import { v4 as uuidv4 } from 'uuid';
import { getRarestDarkPatternCombination, uploadStudyData } from '@/firebaseInnit';
import { appstate } from './appstate_store';
import { ref, watch, type Ref} from 'vue';
import useUserStore from './user_store';
import { convertData, deepCopy } from '@/functions';

const initStudyData = {
  prolificId: '',
  navigator: convertData<Navigator>(window.navigator),
  screen: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  coords: null,
  adhd: false,
  order: ['task1', 'task2'], // Task Names
  darkPatterns: {
    task1: false,
    task2: false
  },
  pathFinding: {
    task1: deepCopy(emptyTaskData),
    task2: deepCopy(emptyTaskData)
  },
  user: {
    premiumStatus: PremiumStatus.Basic,
    checks: deepCopy(initUserChecks),
    dataEntered: deepCopy(initUserDataEntered)
  },
  questionnaires: {
    task1: {
      deceptiveStrategies: "",
      dpCharacteristics: {},
      nasaTlx: {}
    },
    task2: {
      deceptiveStrategies: "",
      dpCharacteristics: {},
      nasaTlx: {}
    }
  }
} as StudyData;

const initStudyState = {
  previousRoute: router.currentRoute.value.path,
  currentTaskIndex: 0,
  taskStarted: false,
  taskActive: false,
  lockBrowserBack: false
} as StudyState

const useStudyDataStore = defineStore('studyData', () => {
  // Uid
  const uid: string = sessionStorage.getItem('uid') ?? uuidv4();
  sessionStorage.setItem('uid', uid);

  // Study Data
  const storedStudyData = sessionStorage.getItem('studyData');
  const studyDataRef: Ref<StudyData> = ref(storedStudyData ? JSON.parse(storedStudyData) : deepCopy(initStudyData));
  const studyData = (): StudyData => { return studyDataRef.value };

  // Study State
  const storedStudyState = sessionStorage.getItem('studyState');
  const studyStateRef = ref(storedStudyState ? JSON.parse(storedStudyState) : deepCopy(initStudyState));
  const studyState = (): StudyState => {return studyStateRef.value}

  // Task
  const currentTask = (): string => { return studyData().order[studyState().currentTaskIndex] };

  // Is the group ADHD?
  const isAdhd = () => { return studyData().adhd; }
  
  // Is the study over?
  const studyOver = () => { return studyState().currentTaskIndex >= studyData().order.length; }

  // Prolific ID
  const setProlificId = (prolificId: string) => studyData().prolificId = prolificId;

  // Geolocation
  const setCoords = (coords: GeolocationCoordinates) => studyData().coords = coords;

  // Study Group
  const setupStudyGroup = async (adhd: boolean) => { 
    studyData().adhd = adhd;
    studyData().darkPatterns = await getRarestDarkPatternCombination(uid, adhd);
  }

  // Start Task
  const startCurrentTask = () => {
    studyState().taskActive = true;
    studyState().taskStarted = true;
    studyData().pathFinding[currentTask()].startTime = Date.now();
    appstate.darkPatterns = studyData().darkPatterns[currentTask()];
  };

  // Finish Task
  const finishCurrentTask = () => studyData().pathFinding[currentTask()].finished = true;


  // Path Nodes ////////////////////////////////////////////////////////////////////////////////////////////////

  const addPathNodeListeners = () => {
    window.addEventListener('click', handlePathNodeClicked);
    window.addEventListener('popstate', handleGoBack);
    window.addEventListener('beforeunload', handleReload);
  }

  const removePathNodeListeners = () => {
    window.removeEventListener('click', handlePathNodeClicked);
    window.removeEventListener('popstate', handleGoBack);
    window.removeEventListener('beforeunload', handleReload);
  }

  const handlePathNodeClicked = (event: any) => {
    if(!studyState().taskActive) return;

    const currentTime = Date.now();
    const nextRoute = router.currentRoute.value.path;
    
    // To prevent that the first click on the start task page is tracked
    if(studyState().taskStarted) {
      studyState().previousRoute = nextRoute;
      studyState().taskStarted = false;
      return;
    }

    const newPathNode = {
      currentTime: currentTime,
      currentElementId: event.target.id,
      clientX: event.clientX,
      clientY: event.clientY,
      isInteractable: event.target.closest('.interact-node') != null,
      isDarkPattern: event.target.closest('.dark-pattern') != null,
      currentRoute: studyState().previousRoute,
      nextRoute: nextRoute
    } as PathNode;

    studyData().pathFinding[currentTask()].path.push(newPathNode);
    studyState().previousRoute = nextRoute;

    if(studyData().pathFinding[currentTask()].finished) {
      studyState().taskActive = false;
      studyData().pathFinding[currentTask()].endTime = currentTime;
      router.push("/questionnaire/" + currentTask());
    }
  };

  const goToNextTask = () => {
    studyState().currentTaskIndex++;
    if(!studyOver()) {
      router.push('/start/' + currentTask());
    } else {
      studyState().studyFinished = true;
      router.push('/end');
    }
  }
  
  const handleGoBack = (event: PopStateEvent) => {
    if(studyState().lockBrowserBack) {
      studyState().lockBrowserBack = false;
      return;
    }

    const previousRoute = event.state.forward;
    const taskRoutes = router.getRoutes().filter(route => route.meta.taskComponent);

    if(taskRoutes.some(route => route.path === previousRoute)) {
      const newPathNode = {
        currentTime: Date.now(),
        currentElementId:  "browser-back",
        clientX: -1,
        clientY: -1,
        isInteractable: true,
        isDarkPattern: false,
        currentRoute: previousRoute,
        nextRoute: previousRoute
      } as PathNode;
      studyData().pathFinding[currentTask()].path.push(newPathNode);
    }

    studyState().lockBrowserBack = true;
    window.alert("Please use the buttons in the study to navigate.");
    router.go(1);
  };

  const handleReload = (event: any) => {
    if(!router.currentRoute.value.meta.taskComponent) return

    const newPathNode = {
      currentTime: Date.now(),
      currentElementId:  "browser-reload",
      clientX: -1,
      clientY: -1,
      isInteractable: true,
      isDarkPattern: false,
      currentRoute: studyState().previousRoute,
      nextRoute: studyState().previousRoute
    } as PathNode

    studyData().pathFinding[currentTask()].path.push(newPathNode);
  };


  // Interrupt //////////////////////////////////////////////////////////////////////////////////////////////////

  const handleResetTask = () => {
    studyState().taskActive = false;
    router.push('/start/' + currentTask());

    if (currentTask() == 'task2') {
      appstate.personalDataAsked = false;
      useUserStore().setPersonalDataChecked(false);
      useUserStore().setUserData({...emptyUserData})
    }

    studyData().pathFinding[currentTask()] = deepCopy(emptyTaskData);
    studyData().pathFinding[currentTask()].resetted = true;
  }
  
  const handleSkipTask = () => {
    studyState().taskActive = false;
    studyData().pathFinding[currentTask()].aborted = true;
    goToNextTask();
  }

  const handleAbortStudy = () => {
    const endTime = Date.now();
    
    while(studyState().currentTaskIndex < studyData().order.length) {
      studyData().pathFinding[currentTask()].aborted = true;
      studyData().pathFinding[currentTask()].endTime = endTime;
      studyState().currentTaskIndex++;
    }
    
    studyState().taskActive = false;

    router.push('/end');
  };


  // Updates ////////////////////////////////////////////////////////////////////////////////////////////////////

  const updatePremiumStatus = (premiumStatus: PremiumStatus) => studyData().user.premiumStatus = premiumStatus;

  const updateChecks = (checks: UserChecks) => studyData().user.checks = checks;

  const updateDataEntered = (userData: UserData) => {
    Object.keys(userData).forEach(function(key, _) {
      studyData().user.dataEntered[key] = userData[key].trim() !== '';
    });
  }


  // Questionnaires /////////////////////////////////////////////////////////////////////////////////////////////

  const updateDeceptiveStrategies = (deceptiveStrategies: string) => studyData().questionnaires[currentTask()].deceptiveStrategies = deceptiveStrategies;

  const updateDpCharacteristics = (dpCharacteristics: Questionnaire) => studyData().questionnaires[currentTask()].dpCharacteristics = dpCharacteristics;

  const updateNasaTlx = (nasaTlx: Questionnaire) => studyData().questionnaires[currentTask()].nasaTlx = nasaTlx;
  
  // Watchers ///////////////////////////////////////////////////////////////////////////////////////////////////

  watch(studyDataRef, (newStudyData) => {
    uploadStudyData(uid, newStudyData);
    sessionStorage.setItem('studyData', JSON.stringify(newStudyData));
  }, { deep: true })

  watch(studyStateRef, (newStudyState) => {
    sessionStorage.setItem('studyState', JSON.stringify(newStudyState));
  }, { deep: true }) 

  return { currentTask, setProlificId, isAdhd, setCoords, setupStudyGroup,
           addPathNodeListeners, removePathNodeListeners, 
           startCurrentTask, finishCurrentTask, goToNextTask, 
           handleResetTask, handleSkipTask, handleAbortStudy,
           updatePremiumStatus, updateChecks, updateDataEntered, 
           updateDpCharacteristics, updateNasaTlx, updateDeceptiveStrategies, 
           studyOver}
});

export default useStudyDataStore;