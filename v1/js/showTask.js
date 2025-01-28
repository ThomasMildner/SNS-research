export const taskInner = document.querySelector('#task-inner');
export const abortButton = document.querySelector('#task-abort');
export const backButton = document.querySelector('#task-back');
export const menuButton = document.querySelector('#menu-menu');
export const continueButton = document.querySelector('#task-continue');

let stateIndex = 0;
let taskActive = false;
let isTaskComplete = false;
let studyFinished = false;
let randomlyOrderedTaskArray = [];
let taskKeyArray = [];
let taskStringArray = [];


export const stateZeroText = `<p>Welcome and many thanks for taking part in this social media study! In this study, you will be asked 
    to complete a total of <span style="color: red;" >6</span> tasks using this interface. Please note, that the aim of this study is not to
    test your ability to complete these tasks but to learn about the system.
    <br><br> If you cannot solve a task, you can abort it and move on to the next.
    <br><br> Please click <span style="color: #0647a4; font-weight: 800;">Continue</span> to proceed.</p>`;

export const stateOneText = `<h2>Information</h2>
     <p>The <span style="color: red;" >6</span> tasks will require you to use this app's interface and find certain elements. 
     None of your actions or selected choices have any consequences.
     <br><br>Please only use the buttons and functions of this application and not your browser to navigate the interface.
     This further includes refreshing this page - meaning your data may be damaged.`;

export const stateTwoText = `<h2>Getting used to the interface</h2>
      <p>You can now use this interface to get accustomed to it. Once you feel confident,
      click <span style="color: #0647a4; font-weight: 800;">Continue</span> to start the study.</p>`;

export const endState = `<p>Thank you very much for participating in this Study. Your data has been stored and all functionalities of this app have been deactivated.
    <br><br>You may now close this window and return to the questionnaire.</p>`;

/*
    TASKS
    the tasks will be randomised using the shuffleTasks function
    Their id will further be initialised when first opening the website.
*/

// Task 1: Find the delete-account option
export const taskOne = {
    't1':
    `<h2>Task §</h2><p>Social media platforms have the option to <span style="color: red;">delete users' accounts</span>. Please find and use this option in this interface.</p>`
}

// Task 2: Find the tracking information outside SNSs settings.
export const taskTwo = {
    't2':
    `<h2>Task §</h2><p>Social media platforms often track your online activity outside their platforms by default. However, there is an option to change this for <span style="color: red;">future off-app activities</span>. Please find and use this option in this interface.</p>`
}

// Task 3: Find the option to download your personal information.
export const taskThree = {
    't3':
    `<h2>Task §</h2><p>When using social media platforms, the services store your personal data including those about your profile and activities. There is an option <span style="color: red;">to download this data</span>. Please find and use it in this interface.</p>`
}

// Task 4: Find the option to stop search engines from finding your settings.
export const taskFour = {
    't4':
    `<h2>Task §</h2><p>Aside from the platforms themselves, search engines can also list your social media profiles. There is a setting to <span style="color: red;">activate/deactivate being listed by search engines</span> so people cannot find you. Please find and use this setting in this interface.</p>`
}

// Task 5: Find the option to make your posts only visible to certain groups and cohorts.
export const taskFive = {
    't5':
    `<h2>Task §</h2><p>Often by default, social media profiles are public. This also applies to your posts. Please find and use the option to <span style="color: red;">select who you would like to see your future posts</span>.</p>`
}

// Task 6: Find the option to select your cookies preferences.
export const taskSix = {
    't6':
    `<h2>Task §</h2><p>Social media platforms often collect cookies from your user-behaviour to tailor certain aspects to you as an individual. Please find and use any of the settings that allow you to <span style="color: red;">choose your own cookie preferences</span>.</p>`
}


export const taskArray = [taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix];
export let stateArray = [stateZeroText, stateOneText, stateTwoText];

const blockFunctionality = () => {
    let container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top      = '0';
    container.style.left     = '0';
    container.style.width    = '100vw';
    container.style.height   = '100vh';
    container.style.overflow = 'visible';
    container.style.zIndex   = '9999';
    document.body.append(container)
}

/**
 * Only if current task is active can the state be changed.
 */
export const updateState = (intDirection) => {
    console.log('updating state..', stateIndex);
    stateIndex += intDirection;

    if(stateIndex >= 0){
        if(stateIndex === 0) {
            backButton.style.visibility = 'hidden';
            abortButton.style.visibility = 'hidden';
            continueButton.style.visibility = 'visible'
        }
        else if(stateIndex === 1 || stateIndex === 2) {
            backButton.style.visibility = 'visible';
            abortButton.style.visibility = 'hidden';
            continueButton.style.visibility = 'visible'
        }
        else if(stateIndex === 9) {
            studyFinished = true;
            taskActive = false;
            //do something when the tasks have been finished.
            abortButton.style.visibility= 'hidden'
            blockFunctionality()
        }
        else if(stateIndex > 2){//} || taskActive) {
            backButton.style.visibility = 'hidden';
            abortButton.style.visibility = 'hidden';
            continueButton.style.visibility = 'hidden';
            taskActive = true;
        }
        else {
            continueButton.style.visibility = 'hidden';
        }
        showCurrentTask();
    }
    else {
        stateIndex = 0;
        backButton.style.visibility = 'hidden';
    }
}

/**
 * Only if the menu has been visited, the task is activated.
 */
menuButton.addEventListener('click', function () {
    if(stateIndex >= 3) {
        abortButton.style.visibility = 'visible';
        continueButton.style.visibility = 'hidden';
    }
    else {
        abortButton.style.visibility = 'hidden';

    }
});

continueButton.addEventListener('click', function () {
    if(stateIndex === 0) {
        backButton.style.visibility = 'visible';
    }
    else if(stateIndex + 1 === 3) {
        taskActive = true;
    }
    updateState(1);
})

backButton.addEventListener('click', function () {
    updateState(-1);
})

/*abortButton.addEventListener('click', function() {
    //taskActive = false
    isTaskComplete = true
})*/

export const showCurrentTask = () => {
    taskInner.innerHTML = stateArray[stateIndex];
}

/**
 * Function to randomise the tasks
 * @param array
 * @returns radnomised array
 */
const shuffleArray = (array) => {
    return array.sort(() => (Math.random() > .5) ? 1 : -1);
}

export const indexedArray = (array) => {
    let a = [];
    let tIndex = 1;
    array.forEach(element => {
        if(element.includes('§')) {
            element = element.replace('§', tIndex);
            a.push(element);
            tIndex += 1;
        }
    })
    return a;
}

export const setRandomArray = () => {
    if (randomlyOrderedTaskArray.length===0){
        randomlyOrderedTaskArray = shuffleArray(taskArray);
    }
}

export const getRandomlyOrderedTasks = () => {
    return randomlyOrderedTaskArray
}

export const setTaskKeyArray = () => {
    randomlyOrderedTaskArray.forEach(element => {
        for(let key in element){
            taskKeyArray.push(key)
        }
    })
}

export const getTaskKeyArray = () => {
    return taskKeyArray
}

export const setTaskStringArray = () => {
    randomlyOrderedTaskArray.forEach(element => {
        let key = Object.keys(element)[0];
        taskStringArray.push(element[key])
    })
}

export const getTaskStringArray = () => {
    return taskStringArray;
}


export const getStateIndex = () => {
    return stateIndex
}

export const getTaskActive = () => {
    return taskActive
}

export const getIsTaskComplete = () => {
    return isTaskComplete
}

export const finishTask = () => {
    isTaskComplete = true
    taskActive = false
    updateState(1)
}

export const toggleTaskActive = () => {
    taskActive = !taskActive
}