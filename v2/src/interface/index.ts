import type { RouteLocationNormalizedLoaded } from "vue-router";

export enum PremiumStatus {
  Basic = "Basic",
  Monthly = "Monthly",
  Annually = "Annually"
}

export enum Gender {
  Woman = "Woman",
  Man = "Man",
  NonBinary = "Non-binary",
  Other = "Other",
  ChooseNotToSay = "Choose not to say"
}

export interface UserData {
  profilePicture: string,
  firstName: string,
  lastName: string,
  description: string,
  gender: string,
  birthday: string,
  phone: string,
  city: string,
  jobTitle: string
  [key: string]: string;
}

export const emptyUserData = {
  profilePicture: "",
  firstName: "",
  lastName: "",
  description: "",
  gender: "",
  birthday: "",
  phone: "",
  city: "",
  jobTitle: ""
} as UserData

export interface UserDataEntered {
  profilePicture: boolean,
  firstName: boolean,
  lastName: boolean,
  description: boolean,
  gender: boolean,
  birthday: boolean,
  phone: boolean,
  city: boolean,
  jobTitle: boolean
  [key: string]: boolean;
}

export const initUserDataEntered = {
  profilePicture: false,
  firstName: false,
  lastName: false,
  description: false,
  gender: false,
  birthday: false,
  phone: false,
  city: false,
  jobTitle: false
} as UserDataEntered

export interface UserChecks {
  updatesChecked: boolean,
  contactsChecked: boolean,
  personalDataChecked: boolean
}

export const initUserChecks = {
  updatesChecked: false,
  contactsChecked: false,
  personalDataChecked: false
}

export interface User {
  email: string,
  premiumStatus: PremiumStatus,
  checks: UserChecks,
  data: UserData
};

export const emptyUser: User = {
  email: '',
  premiumStatus: PremiumStatus.Basic,
  checks: initUserChecks,
  data: emptyUserData
};


export interface TaskData {
  startTime: number | null;
  endTime: number | null;
  path: PathNode[];
  finished: boolean;
  aborted: boolean;
  resetted: boolean;
};

export const emptyTaskData: TaskData = {
  startTime: null,
  endTime: null,
  path: [],
  finished: false,
  aborted: false,
  resetted: false
};

export interface PathNode {
  currentTime: number;
  currentElementId: string;
  clientX: number;
  clientY: number;
  isInteractable: boolean;
  isDarkPattern: boolean;
  currentRoute: string;
  nextRoute: string;
};

export interface StudyData {
  prolificId: string;
  navigator: Navigator;
  screen: {
    width: number,
    height: number
  },
  coords: GeolocationCoordinates | null;
  adhd: boolean;
  order: string[]; // Task Names
  darkPatterns: {[taskName: string]: boolean};
  pathFinding: {[taskName: string]: TaskData};
  user: {
    premiumStatus: string
    checks: UserChecks,
    dataEntered: UserDataEntered
  };
  questionnaires: {
    [taskName: string]: {
      deceptiveStrategies: string,
      dpCharacteristics: Questionnaire,
      nasaTlx: Questionnaire,
    };
  };
}

export interface Questionnaire {
  [category: string]: number
};

export interface StudyState {
  previousRoute: string,
  lockBrowserBack: boolean,
  currentTaskIndex: number,
  taskActive: boolean,
  taskStarted: boolean,
  taskEnded: boolean,
  studyFinished: boolean
}