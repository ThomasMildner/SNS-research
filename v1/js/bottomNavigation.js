import router from '../src/router';

import imgHomeActive from '../img/nav-button-home-active.png'
import imgHome from '../img/nav-button-home.png'
import imgFriendsActive from '../img/nav-button-friends-active.png'
import imgFriends from '../img/nav-button-friends.png'
import imgProfileActive from '../img/nav-button-profile-active.png'
import imgProfile from '../img/nav-button-profile.png'
import imgNotificationsActive from '../img/nav-button-notifications-active.png'
import imgNotifications from '../img/nav-button-notifications.png'

export const contentWrapper = document.querySelector('#main-content');
export const header = document.querySelector('#header');

export const navHome = document.querySelector('#menu-home');
export const navFriends = document.querySelector('#menu-friends');
export const navProfile = document.querySelector('#menu-profile');
export const navNotifications = document.querySelector('#menu-notifications');
export const menuContainer = document.querySelector('#menu');
export const menuButton = document.querySelector('#menu-menu');

export const homeContent = document.querySelector('#home');
export const friendsContent = document.querySelector('#friends');
export const profileContent = document.querySelector('#profile');
export const notificationContent = document.querySelector('#notifications');


export const buttons = [
    {element: navHome, activeSrc: imgHomeActive, inactiveSrc: imgHome, isActive: true, content: homeContent},
    {element: navFriends, activeSrc: imgFriendsActive, inactiveSrc: imgFriends, isActive: false, content: friendsContent},
    {element: navProfile, activeSrc: imgProfileActive, inactiveSrc: imgProfile, isActive: false, content: profileContent},
    {element: navNotifications, activeSrc: imgNotificationsActive, inactiveSrc: imgNotifications, isActive: false, content: notificationContent},
]


export const toggleActives = () => {
    buttons.forEach(button => {
        button.isActive = false
        button.element.src = button.inactiveSrc
    })
};

export const toggleContent = (button) => {
    menuContainer.style.display = 'none'
    buttons.forEach(button => {
        button.content.style.display = 'none'
    })
    button.content.style.display = 'inline-block'
}


export const showHeader = (toggle = true) => {
    if(!toggle){
        header.style.display = "none";
        contentWrapper.style.gridTemplateRows = '1fr';
    }
    else {
        header.style.display = "flex";
        contentWrapper.style.gridTemplateRows = '1fr 6fr';
    }
}


buttons.forEach(button => {
    button.element.addEventListener('click', function() {
        if(button.isActive === false) {
            toggleActives()
            showHeader()
            button.isActive = true
            button.element.src = button.activeSrc
            toggleContent(button)
            router.push('home')
        }
    })
})

menuButton.addEventListener('click', function() {
    buttons.forEach(button => {
        button.element.src = button.inactiveSrc
        button.content.style.display = 'none'
        button.isActive = false;
    })
    showHeader(false)
    toggleActives()
    menuButton.classList.add('active')
    menuContainer.style.display = 'block'
    router.push('home')
})

export const getProfileImg = () => {
    return imgProfile
}

navProfile.addEventListener('click', function() {
    toggleActives()
    showHeader()
    buttons[2].isActive = true
    buttons[2].element.src = buttons[2].activeSrc
    toggleContent(buttons[2])
    router.push('home')
})