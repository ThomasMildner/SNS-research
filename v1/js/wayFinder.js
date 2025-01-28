import * as showTask from './showTask.js'
import * as navigation from './bottomNavigation.js'
import * as confetti from './confetti.js'
import * as strapi from './connectStrapi.js'
//import prefixAllUrls from "../wayfinding-strapi-backend/.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/prefixAllUrls";
import router from '../src/router';

let participantID
let currentPath = []
let currentElementID

let currentElement
let currentTime
let mouseX
let mouseY
let currentTask
let url

export const wayfindingData = {
    "data": {
        "startStudyTime": null, // Set before first tasks screen is shown.
        "endStudyTime": null,
        "navigator": null,
        "taskOrder": [],
        "t0": {
            "startTime": null, // Record introduction time.
            "endTime": null,
        },
        "t1": {
            "startTime": null,
            "stackOder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t2": {
            "startTime": null,
            "stackOder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t3": {
            "startTime": null,
            "stackOder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t4": {
            "startTime": null,
            "stackOder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t5": {
            "startTime": null,
            "stackOder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t6": {
            "startTime": null,
            "stackOder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        }
    }
}



// Running logging function to check each mouseclick and clicked on elements
Object.keys(window).forEach(key => {
    if (/^on(click)/.test(key)){
        window.addEventListener(key.slice(2), event => {
            //Only track if task is active
            console.log('clicking and participant id is:', participantID)
            if (showTask.getTaskActive()===true) {
                currentTime = Date.now()
                currentTask = showTask.getTaskKeyArray()[showTask.getStateIndex()]
                console.location('current task: ', currentTask)
                if(wayfindingData.data[currentTask].startTime!= null){
                    updateData(currentTask, currentTime, 'startTime') //Beginning logging of task
                }
                let trackedEl = event.target.closest('.path-node')
                if(trackedEl){
                    console.log('Task ',  currentTask, ' is active: ', showTask.getTaskActive())
                    currentElementID = event.target.id
                    currentElement = document.getElementById(currentElementID)
                    url = getURL(currentElementID) //document.URL
                    mouseX = event.clientX
                    mouseY = event.clientY
                    currentPath.push({currentTime, currentElementID, mouseX, mouseY, url})
                    console.log('current path: ', currentPath)
                    trackedEl = event.target.closest('.goal-node')
                    if (trackedEl){
                        console.log('Goal clicked', 'current task is', currentTask)
                        console.log('clicked id:', currentElementID)
                        trackedEl = event.target.closest('#'+currentTask)
                        console.log(trackedEl, currentTask)
                        if (trackedEl) {
                            console.log('Goal processed')
                            updateData(currentTask, currentPath, 'path') //Updating path with last node.
                            updateData(currentTask, currentTime, 'endTime')
                            updateData(currentTask, true, 'goalFound')
                            currentPath = []; //Emptying path
                            showTask.finishTask()
                            console.log('Successfully completed', currentTask)
                            //console.log(wayfindingData);
                            console.log('Updating data for participant: ', participantID)
                            strapi.updateWayfindingData(wayfindingData, participantID)
                            confetti.playConfetti()
                            setTimeout(function() {
                                redirectToHome()
                            }, 200);
                        }
                    }
                }
                else if(event.target.id==='task-abort'){
                    console.log('Goal was not found.. ')
                    updateData(currentTask, currentPath, 'path')
                    updateData(currentTask, currentTime, 'endTime')
                    updateData(currentTask, false, 'goalFound')
                    currentPath = []; //Emptying path
                    showTask.finishTask()
                    //console.log(wayfindingData);
                    console.log('Updating data for participant: ', participantID)
                    strapi.updateWayfindingData(wayfindingData, participantID)
                }
            }

        });
    }
})

export const redirectToHome = () => {
    console.log('Going Home')
    router.push('/home')
    navigation.toggleActives()
    navigation.showHeader()
    navigation.toggleContent(navigation.buttons[0])
}

export const getURL= (elementID = String) => {
    let url = document.URL

    switch (elementID) {
        case 'menu-home':
            return '/HomeTaskView'
        case 'menu-friends':
            return '/HomeFriends'
        case 'menu-profile':
            return '/HomeProfile'
        case 'menu-home-header-profile-link':
            return '/HomeProfile'
        case 'menu-notifications':
            return '/HomeNotifications'
        case 'menu-menu':
            return '/HomeMenu'
        default:
            return url
    }
}

export const initWayfindingData = async function() {
    wayfindingData.data.navigator = navigator //logging all navigator data to get browser, device, etc.
    wayfindingData.data.startTime = Date.now(); //Initialising swayfinding data with current time
    wayfindingData.data.startStudyTime = Date.now()
    wayfindingData.data.taskOrder = showTask.getTaskKeyArray()
    //console.log('Study initialised with\ndata: ', wayfindingData)
    await strapi.initialiseStudy(wayfindingData, participantID)
}

export const updateData = (key, value, subkey=undefined) => {
    //console.log('key:', key, 'subkey:', subkey, 'value:', value)
    if(subkey === undefined){
        wayfindingData.data[key] = value
    }
    else if (subkey) {
       wayfindingData.data[key][subkey] = value
    }
    else {
        console.log('Key is undefined')
    }
    //console.log('Updated wayfinding Data: ', wayfindingData)
}

/*export const setStudyID = studyID_ => {
    studyID = studyID_
    console.log("Set study ID: ", studyID)
}*/

export const setParticipantID = (_id) => {
    participantID = _id
    console.log('Confirming, Participant ID: ', participantID)
}

export const getWayfindingData = () => {
    return wayfindingData
}