import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, get } from "firebase/database";
import type { StudyData } from './interface';

const firebaseConfig = {
  apiKey: "AIzaSyCuB6c_YRaF2zLVlO4zNImDv_rIiGPqipU",
  authDomain: "sns-study-dbff0.firebaseapp.com",
  databaseURL: "https://sns-study-dbff0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sns-study-dbff0",
  storageBucket: "sns-study-dbff0.firebasestorage.app",
  messagingSenderId: "193647151877",
  appId: "1:193647151877:web:30848f73305a39f7e7c56c"
};



const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const uploadStudyData = (uid: string, data: StudyData) => {
  set(ref(db, 'data/' + uid), data);
};

export const getRarestDarkPatternCombination = async (myUid: string, adhd: boolean):Promise<{ [taskName: string]: boolean; }> => {
  const darkPatternsCombinationCount = await getDarkPatternsCombinationCount(myUid, adhd);
  const smallest = [...darkPatternsCombinationCount].reduce((a, b) => b[1] < a[1] ? b : a)[0];
  return JSON.parse(smallest) as {adhd: boolean, [taskName: string]: boolean};
}

const getDarkPatternsCombinationCount = async (myUid: string, adhd: boolean): Promise<Map<string, number>> => {
  const darkPatternsCombinationCount = new Map<string, number>();
  // Temporary solution, can be replaced with a cartesian product
  darkPatternsCombinationCount.set('{"task1":true,"task2":true}', 0);
  darkPatternsCombinationCount.set('{"task1":true,"task2":false}', 0);
  darkPatternsCombinationCount.set('{"task1":false,"task2":true}', 0);
  darkPatternsCombinationCount.set('{"task1":false,"task2":false}', 0);

  const studyDataArray = await getGroupStudyData(myUid, adhd);
  const darkPatternsKeys = studyDataArray.map(studyData => JSON.stringify(studyData.darkPatterns));
  darkPatternsKeys.forEach(key => {
    darkPatternsCombinationCount.set(key, (darkPatternsCombinationCount.get(key) || 0) + 1);
  });

  return darkPatternsCombinationCount;
}

const getGroupStudyData = async (myUid: string, adhd: boolean): Promise<StudyData[]> => {
  const studyDataArray: StudyData[] = [];

  try {
    const dataSnapshot = await get(ref(db, 'data'));

    if (dataSnapshot.exists()) {
      const studyDataMap = dataSnapshot.val();

      Object.keys(studyDataMap).forEach((uid) => {
        const studyData = studyDataMap[uid] as StudyData;
        // Gets every study group data except your own
        if(uid != myUid && studyData.adhd == adhd) {
          studyDataArray.push(studyDataMap[uid]);
        }
      });
    }
  } catch (error: any) {
    console.error('Error fetching study data:', error.message);
  }

  return studyDataArray;
};