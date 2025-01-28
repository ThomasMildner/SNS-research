import { createApp } from 'vue'
import MenuApp from './menuApp.vue'
import ProfileApp from './profileApp.vue'
import router from './router'
import './assets/menu-app.css'

import * as showTask from '../js/showTask.js';
import * as strapi from '../js/updateAndConnectStrapi.js';

const app = createApp(MenuApp)
app.use(router)
app.mount('#menu-app')

const vueProfileApp = createApp(ProfileApp)
vueProfileApp.use(router)
vueProfileApp.mount('#profile-app')


// Do a lot of stuff to initialise the website
window.onload = async function() {
    showTask.showCurrentTask();
    showTask.continueButton.style.visibility = 'visible';
    showTask.setRandomArray()
    showTask.setTaskKeyArray()
    showTask.setTaskStringArray()
    console.log('Random task order is:\n', showTask.getTaskKeyArray())
    showTask.stateArray.push(...showTask.indexedArray(showTask.getTaskStringArray()));
    showTask.stateArray.push(...[showTask.endState]);

    // Initialising Wayfinding Data Elements once the study is started
    await strapi.initWayfindingData()

    //Setting study start time for introduction
    console.log('start time', Date.now())
}

// Alert users before reloading the page
window.addEventListener('beforeunload', (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = '';
});
