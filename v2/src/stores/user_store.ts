import { defineStore } from 'pinia';
import { type Ref, ref, watch } from 'vue';
import { emptyUser, PremiumStatus, type User, type UserData }  from '@/interface';
import { appstate } from './appstate_store';
import useStudyDataStore from './studydata_store';
import { deepCopy } from '@/functions';


const useUserStore = defineStore('user', () => {
  const storedUser = sessionStorage.getItem("user");
  const userRef: Ref<User> = ref(storedUser ? JSON.parse(storedUser) : deepCopy(emptyUser));
  const user = (): User => {return userRef.value}

  const getEmail = () => {
    return user().email;
  }

  const setEmail = (email: string) => {
    user().email = email;
  }

  const resetUser = () => {
    userRef.value = deepCopy(emptyUser);
  }

  const setUpdatesChecked = (updatesChecked: boolean) => { 
    user().checks.updatesChecked = updatesChecked;
    useStudyDataStore().updateChecks(user().checks);
  }
  
  const setContactsChecked = (contactsChecked: boolean) => { 
    user().checks.contactsChecked = contactsChecked;
    useStudyDataStore().updateChecks(user().checks);
  }
 
  const setPersonalDataChecked = (personalDataChecked: boolean) => { 
    user().checks.personalDataChecked = personalDataChecked;
    useStudyDataStore().updateChecks(user().checks);
  }

  const setPremiumStatus = (newPremiumStatus: PremiumStatus) => { 
    user().premiumStatus = newPremiumStatus;
    useStudyDataStore().updatePremiumStatus(user().premiumStatus);
  }

  const setUserData = (newData: UserData) => { 
    user().data = newData;
    useStudyDataStore().updateDataEntered(user().data);
  }

  const setProfilePicture = (pictureKey: string) => { 
    user().data.profilePicture = pictureKey;
    useStudyDataStore().updateDataEntered(user().data);
  }

  const getUpdatesChecked = () => { return user().checks.updatesChecked; }
  const getContactsChecked = () => { return  user().checks.contactsChecked; }
  const getPersonalDataChecked = () => { return user().checks.personalDataChecked; }
  const getPremiumStatus = () => {return user().premiumStatus; }
  const getProfilePicture = () => { return user().data.profilePicture; }
  const getUserData = () => { return user().data; }

  const isProfileValid = () : boolean => {
    const userData = user().data;
    let isValid =  userData.firstName != '' && userData.lastName != '' && userData.birthday != '';
    // More required data in Dark Patterns Version
    if(appstate.darkPatterns) {
        isValid = isValid && userData.gender != '' && userData.phone != ''
    }
    return isValid
  }

  watch(userRef, (newUser) => {
    sessionStorage.setItem('user', JSON.stringify(newUser));
  }, { deep: true }) 

  return { getEmail, setEmail, resetUser, setUpdatesChecked, getUpdatesChecked, setContactsChecked, getContactsChecked,
     setPersonalDataChecked, getPersonalDataChecked, setPremiumStatus, getPremiumStatus, setUserData, getUserData, 
     setProfilePicture, getProfilePicture, isProfileValid
    }
})

export default useUserStore