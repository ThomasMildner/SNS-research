import * as showTask from './showTask.js'
import * as navigation from './bottomNavigation.js'
import * as confetti from './confetti.js'
import router from '../src/router';

const loadingOverlay = document.querySelector('#loadingOverlay');
const apiUrl = 'https://sns-wayfinding-study.informatik.uni-bremen.de/strapi/api/wayfinding-routes'

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
        "navigator": [],
        "ipGeolocation": [],
        "taskOrder": [],
        "t0": {
            "startTime": null, // Record introduction time.
            "endTime": null,
        },
        "t1": {
            "startTime": null,
            "stackOrder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t2": {
            "startTime": null,
            "stackOrder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t3": {
            "startTime": null,
            "stackOrder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t4": {
            "startTime": null,
            "stackOrder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t5": {
            "startTime": null,
            "stackOrder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        },
        "t6": {
            "startTime": null,
            "stackOrder": null,
            "endTime": null,
            "path": [{}],
            "goalFound": false,
        }
    }
}

const hideLoadingOverlay = () => {
    loadingOverlay.style.display = 'none';
}

export const updateWayfindingData = (wayfindingData, id) => {
    console.log("Updating Wayfinding Data:", wayfindingData, 'for id: ', id)
    if (id === undefined) {
        console.log("No Participant ID - What happened?!")
    } else {
        axios.put(apiUrl + '/' + id, {
            'data': {
                'wayfinding_path': wayfindingData
            }
        })
            .then( response => {
                console.log('response.data:', response.data)
            } )
            .catch( error => {
                console.log('error:', error)
            })
    }
}


// Running logging function to check each mouseclick and clicked on elements
Object.keys(window).forEach(key => {
    if (/^on(click)/.test(key)){
        window.addEventListener(key.slice(2), async event => {
            //Only track if task is active
            if (showTask.getTaskActive()===true) {
                currentTime = Date.now()
                currentTask = showTask.getTaskKeyArray()[showTask.getStateIndex()-3]
                if(!wayfindingData.data[currentTask].startTime){
                    updateData(currentTask, currentTime, 'startTime') //Beginning logging of task
                }
                let trackedEl = event.target.closest('.path-node')
                if(trackedEl){
                    console.log('Task ', currentTask, ' is active: ', showTask.getTaskActive())
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
                            updateData(currentTask, currentPath, 'path')        //Updating path with last node.
                            updateData(currentTask, currentTime, 'endTime')
                            updateData(currentTask, true, 'goalFound')
                            currentPath = [];                                           //Emptying path
                            showTask.finishTask()
                            console.log('Successfully completed', currentTask)
                            console.log('Updating data for participant: ', participantID)
                            updateWayfindingData(wayfindingData, participantID)
                            confetti.playConfetti()
                            wayfindingData.data.endStudyTime = Date.now()               //Updating end study time after task
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
                    currentPath = [];                                           //Emptying path
                    console.log('Updating data for participant: ', participantID)
                    updateWayfindingData(wayfindingData, participantID)
                    wayfindingData.data.endStudyTime = Date.now()               //Updating end study time after each goal
                    showTask.finishTask()
                    showTask.updateState(0)                          // Finish Task already pushes the state +1 so no need to do it here again.
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


export const updateData = (key, value, subkey=undefined) => {
    if(subkey === undefined){
        wayfindingData.data[key] = value
    }
    else if (subkey) {
        wayfindingData.data[key][subkey] = value
    }
    else {
        console.log('Key is undefined')
    }
}

export const setParticipantID = (_id) => {
    participantID = _id
    console.log('Confirming, Participant ID: ', participantID)
}


//Initialise Study
export const initialiseStudy = async (participantData, id) => {
    console.log("Initialising study.")
    if(id === undefined) {
        await axios.post(apiUrl, participantData)
            .then( response =>{
                console.log('No participant ID existing. Creating..')
                setParticipantID(response.data.data.id)
                hideLoadingOverlay()
            })
            .catch( error => {
                if (error.response){
                    console.log('error:', error.response)
                }
                else if (error.request){
                    console.log('error:', error.request)
                }
                else if (error.message){
                    console.log('error:', error.message)
                }
                else {
                    console.log('error:', error)
                }
            })
    } else {
        axios.put(apiUrl+ id, participantData)
            .then(response => {
                console.log('response.data:', response.data)
            })
            .catch( error => {
                console.log('error:', error)
            })
    }
}


// Initialising study with meta-data

export const initWayfindingData = async function() {

    // Get participants' location
    let apiKey = '1949f43b166147419b0496aa862aadd6' // <- API key
    let _ipGeolocation = {}
    $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey, function(data) {
        for (let i in data) _ipGeolocation[i] = data[i]
    });
    wayfindingData.data.ipGeolocation = _ipGeolocation;

    // Get participants' navigator data
    let _navigator = {}
    for(let i in window.navigator) _navigator[i] = navigator[i]
    wayfindingData.data.navigator = _navigator                  //logging all navigator data to get browser, device, etc.

    wayfindingData.data.startStudyTime = Date.now()             //logging the start time of the study
    wayfindingData.data.taskOrder = showTask.getTaskKeyArray()  //logging the order of the tasks.
    wayfindingData.data.t0.startTime = Date.now()
    await initialiseStudy(wayfindingData, participantID)
}

