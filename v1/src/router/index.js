import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components-menu-frames/homeFrame.vue')
    },
    // MISC
    {
        path: '/ExtendedPrivacySettings:title',
        name: 'Extended Privacy Settings',
        component: () => import('../components-menu-frames/misc/extendedPrivacySettings.vue'),
        props: true
    },
    {
        path: '/RecyclingBin',
        name: 'Recycling Bin',
        component: () => import('../components-menu-frames/misc/recyclingBin.vue')
    },
    {
        path: '/Archive',
        name: 'Archive',
        component: () => import('../components-menu-frames/misc/archive.vue')
    },
    {
        path: '/ExtendedArchiveAndBin:title',
        name: 'Archive and Recycling Bin',
        component: () => import('../components-menu-frames/misc/archiveAndBin.vue'),
        props: true
    },
    {
        path: '/MissingFeature',
        name: 'Missing Feature',
        component: () => import('../components-menu-frames/misc/deadEnd.vue')
    },
    {
        path: '/:catchAll(.*)*',
        name: 'Page Not Found',
        component: () => import('../components-standards/404.vue')
    },
    {
        path: '/OffAppActivity',
        name: 'Off App Activity',
        component: () => import('../components-menu-frames/misc/offAppActivity.vue')
    },
    {
        path: '/ManageFutureActivity',
        name: 'Manage Future Activity',
        component: () => import('../components-menu-frames/misc/manageFutureActivity.vue')
    },
    {
        path: '/DownloadInformation',
        name: 'Download information',
        component: () => import('../components-menu-frames/misc/downloadInformation.vue')
    },

    {
        path: '/PrivacyPolicy',
        name: 'Privacy Policy',
        component: () => import('../components-menu-frames/misc/privacyPolicy.vue')
    },
    {
        path: '/CookiePolicy',
        name: 'Cookie Policy',
        component: () => import('../components-menu-frames/misc/cookiePolicy.vue')
    },
    {
        path: '/TermsOfService',
        name: 'Terms Of Service',
        component: () => import('../components-menu-frames/misc/termsOfService.vue')
    },
    {
        path: '/DataPolicy',
        name: 'Data Policy',
        component: () => import('../components-menu-frames/misc/dataPolicy.vue')
    },

    // Delete Account
    {
        path: '/DeleteAccount',
        name: 'Delete Account',
        component: () => import('../components-menu-frames/deleteAccount/deleteAccount.vue')
    },
    {
        path: '/BeforeDeleteAccount',
        name: 'Before You Delete Account',
        component: () => import('../components-menu-frames/deleteAccount/beforeDeleteAccount.vue')
    },
    {
        path: '/ContinueDeleteAccount',
        name: 'Continue Delete Account',
        component: () => import('../components-menu-frames/deleteAccount/continueAccountDeletion.vue')
    },

    // Profile Settings
    {
        path: '/Profile',
        name: 'Profile Frame',
        component: () => import('../profileApp.vue')
    },
    {
        path: '/ProfileSettings',
        name: 'Profile Settings',
        component: () => import('../components-menu-frames/profile-settings-frames/profileSettingsFrame.vue')
    },
    {
        path: '/FollowSettings',
        name: 'Follow Settings',
        component: () => import('../components-menu-frames/profile-settings-frames/followSettings.vue')
    },
    {
        path: '/ActivityLog',
        name: 'Activity Log',
        component: () => import('../components-menu-frames/profile-settings-frames/activityLog.vue')
    },
    {
        path: '/ProfileAndTagging',
        name: 'Profile and Tagging',
        component: () => import('../components-menu-frames/profile-settings-frames/profileAndTaggingSettings.vue')
    },

    // Privacy Centre
    {
        path: '/PrivacyCentre',
        name: 'Privacy Centre',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreFrame.vue')
    },
    {
        path: '/PrivacyCentreMenu',
        name: 'Privacy Centre Menu',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreMenu.vue')
    },
    {
        path: '/PrivacyCentreSafety',
        name: 'Privacy Centre Safety',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreSafety.vue')
    },
    {
        path: '/PrivacyCentreSecurity',
        name: 'Privacy Centre Security',
        component: () => import('../components-menu-frames/privacy-centre/reviewSecurity.vue')
    },
    {
        path: '/PrivacyCentreSharing',
        name: 'Privacy Centre Sharing',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreSharing.vue')
    },
    {
        path: '/PrivacyCentreAds',
        name: 'Privacy Centre Ads',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreAds.vue')
    },
    {
        path: '/PrivacyCentreActivity',
        name: 'Privacy Centre Activity',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreActivity.vue')
    },
    {
        path: '/PrivacyCentreUse',
        name: 'Privacy Centre Use',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreUse.vue')
    },
    {
        path: '/PrivacyCentreCollection',
        name: 'Privacy Centre Collection',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreCollection.vue')
    },
    {
        path: '/PrivacyCentreTeens',
        name: 'Privacy Centre Teens',
        component: () => import('../components-menu-frames/privacy-centre/privacyCentreTeens.vue')
    },
    {
        path: '/ReviewSecurity',
        name: 'Review Security',
        component: () => import('../components-menu-frames/privacy-centre/reviewSecurity.vue')
    },
    {
        path: '/InformationCollected',
        name: 'Information Collected',
        component: () => import('../components-menu-frames/privacy-centre/informationCollected.vue')
    },
    {
        path: '/DeleteInformation',
        name: 'Delete Information',
        component: () => import('../components-menu-frames/privacy-centre/deleteInformation.vue')
    },
    {
        path: '/ListeningToConversations',
        name: 'Listening To Conversations',
        component: () => import('../components-menu-frames/privacy-centre/listeningToConversations.vue')
    },

    {
        path: '/SellingInfoToAdvertisers',
        name: 'Selling Information To Advertisers',
        component: () => import('../components-menu-frames/privacy-centre/sellingInfoToAdvertisers.vue')
    },

    // Settings and Privacy
    {
        path: '/SettingsAndPrivacy',
        name: 'Settings And Privacy',
        component: () => import('../components-menu-frames/settings-and-privacy/settingsAndPrivacy.vue')
    },
    {
        path: '/PasswordSecurity',
        name: 'Password And Security',
        component: () => import('../components-menu-frames/settings-and-privacy/account/passwordSecurity.vue')
    },
    {
        path: '/PersonalAccountInfo',
        name: 'Personal Account Information',
        component: () => import('../components-menu-frames/settings-and-privacy/account/personalAccountInfo.vue')
    },
    {
        path: '/accountControl',
        name: 'Account Control',
        component: () => import('../components-menu-frames/settings-and-privacy/account/accounutControl.vue')
    },
    {
        path: '/TwoFactorAuth',
        name: 'Two-factor authentication',
        component: () => import('../components-menu-frames/settings-and-privacy/account/twoFactorAuth.vue')
    },
    {
        path: '/ActiveStatus',
        name: 'Active Status',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/activeStatus.vue')
    },
    {
        path: '/Blocking',
        name: 'Blocking',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/blocking.vue')
    },
    {
        path: '/HowPeopleFindYou',
        name: 'How People Can Find You',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/howPeopleFindYou.vue')
    },
    {
        path: '/SearchEngineResults',
        name: 'Search Engine Results',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/searchEngineResults.vue')
    },
    {
        path: '/Posts',
        name: 'Posts',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/posts.vue')
    },
    {
        path: '/Reels',
        name: 'Reels',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/reels.vue')
    },
    {
        path: '/Stories',
        name: 'Stories',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/stories.vue')
    },
    {
        path: '/StoriesSharingOptions',
        name: 'Stories Sharing Options',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/storiesSharingOptions.vue')
    },
    {
        path: '/StoryArchive',
        name: 'Story Archive',
        component: () => import('../components-menu-frames/settings-and-privacy/audience-and-visibility/storyArchive.vue')
    },
    {
        path: '/Cookies',
        name: 'Cookies',
        component: () => import('../components-menu-frames/settings-and-privacy/permissions/cookies.vue')
    },
    {
        path: '/UploadContacts',
        name: 'Upload Contacts',
        component: () => import('../components-menu-frames/settings-and-privacy/permissions/uploadContacts.vue')
    },
    {
        path: '/Media',
        name: 'Media',
        component: () => import('../components-menu-frames/settings-and-privacy/preferences/media.vue')
    },
    {
        path: '/NewsFeed',
        name: 'News Feed',
        component: () => import('../components-menu-frames/settings-and-privacy/preferences/newsFeed.vue')
    },
    {
        path: '/Notifications',
        name: 'Notifications',
        component: () => import('../components-menu-frames/settings-and-privacy/preferences/notifications.vue')
    },
    {
        path: '/ReactionPreferences',
        name: 'Reaction Preferences',
        component: () => import('../components-menu-frames/settings-and-privacy/preferences/reactionPreferences.vue')
    },
    {
        path: '/Shortcuts',
        name: 'Shortcuts',
        component: () => import('../components-menu-frames/settings-and-privacy/preferences/shortcuts.vue')
    },

    // Security Checkup
    {
        path: '/SecurityCheckup',
        name: 'Security Checkup',
        component: () => import('../components-menu-frames/security-checkup/security-checkup.vue')
    },
    {
        path: '/BeforeTwoFactorAuth',
        name: 'Before Two-Factor Authentication',
        component: () => import('../components-menu-frames/security-checkup/beforeTwoFactorAuth.vue')
    },
    {
        path: '/LocationSettings',
        name: 'Location Settings',
        component: () => import('../components-menu-frames/privacy-centre/locationSettings.vue')
    },
    {
        path: '/LoginAlerts',
        name: 'Login Alerts',
        component: () => import('../components-menu-frames/privacy-centre/loginAlerts.vue')
    },
    {
        path: '/AdPreferences',
        name: 'Ad Preferences',
        component: () => import('../components-menu-frames/ad-preferences/adPreferences.vue'),
    },
    {
        path: '/SocialInteractions',
        name: 'Social Interactions',
        component: () => import('../components-menu-frames/ad-preferences/socialInteractions.vue'),
    },
    {
        path: '/PersonalisedAds',
        name: 'Personalised Ads',
        component: () => import('../components-menu-frames/ad-preferences/personalisedAds.vue'),
    },
    {
        path: '/CategoriesToReach',
        name: 'Categories Used To Reach You',
        component: () => import('../components-menu-frames/ad-preferences/categoriesToReach.vue'),
    },
    {
        path: '/AdsOffApp',
        name: 'Ads Shown Off App',
        component: () => import('../components-menu-frames/ad-preferences/adsOffApp.vue'),
    },

    // Access information
    {
        path: '/AccessInformation',
        name: 'Access Your information',
        component: () => import('../components-menu-frames/access-information/accessInformation.vue'),
    },
    {
        path: '/AccessActivityAcrossApp',
        name: 'Access Activity Across This App',
        component: () => import('../components-menu-frames/access-information/accessActivityAcrossApp.vue'),
    },
    {
        path: '/AccessPersonalInformation',
        name: 'Access Personal Information',
        component: () => import('../components-menu-frames/access-information/accessPersonalInformation.vue'),
    },
    {
        path: '/AccessConnections',
        name: 'Access Connections',
        component: () => import('../components-menu-frames/access-information/accessConnections.vue'),
    },
    {
        path: '/AccessLoggedInformation',
        name: 'Access Logged Information',
        component: () => import('../components-menu-frames/access-information/accessLoggedInformation.vue'),
    },
    {
        path: '/AccessSecurityLogin',
        name: 'Access Security and Login Information',
        component: () => import('../components-menu-frames/access-information/accessSecurityLogin.vue'),
    },
    {
        path: '/AccessAppsAndWebsites',
        name: 'Access Apps And Websites Off This App',
        component: () => import('../components-menu-frames/access-information/accessAppsAndWebsites.vue'),
    },
    {
        path: '/AccessPreferences',
        name: 'Access Preferences',
        component: () => import('../components-menu-frames/access-information/accessPreferences.vue'),
    },
    {
        path: '/AccessAdsInformation',
        name: 'Access Ads Information',
        component: () => import('../components-menu-frames/access-information/accessAdsInformation.vue'),
    },

    // Privacy Checkup
    {
        path: '/PrivacyCheckup',
        name: 'Privacy Checkup',
        component: () => import('../components-menu-frames/privacy-checkup-frames/privacyCheckupFrame.vue'),
    },

    /* Sharing */
    {
        path: '/CheckupWhoSeesShared',
        name: 'Checkup - Who Sees What You Shared',
        component: () => import('../components-menu-frames/privacy-checkup-frames/sharing/checkupWhoSeesShared.vue'),
    },
    {
        path: '/CheckupProfileInfo',
        name: 'Checkup - Profile Information',
        component: () => import('../components-menu-frames/privacy-checkup-frames/sharing/checkupProfileInformation.vue'),
    },
    {
        path: '/CheckupPostAndStories',
        name: 'Checkup - Post And Stories',
        component: () => import('../components-menu-frames/privacy-checkup-frames/sharing/checkupPostsAndStories.vue'),
    },
    {
        path: '/CheckupBlocking',
        name: 'Checkup - Blocking',
        component: () => import('../components-menu-frames/privacy-checkup-frames/sharing/checkupBlocking.vue'),
    },
    {
        path: '/CheckUpSharingEnd',
        name: 'Checkup - Sharing End',
        component: () => import('../components-menu-frames/privacy-checkup-frames/sharing/checkupSharingEnd.vue'),
    },

    /* Ad Preferences */
    {
        path: '/CheckupAdPreferences',
        name: 'Checkup - Ad Preferences',
        component: () => import('../components-menu-frames/privacy-checkup-frames/ad-preferences/checkupAdPreferences.vue'),
    },
    {
        path: '/CheckupAboutAds',
        name: 'Checkup - About Ads',
        component: () => import('../components-menu-frames/privacy-checkup-frames/ad-preferences/checkupAboutAds.vue'),
    },
    {
        path: '/CheckupAdsProfileInformation',
        name: 'Checkup - Ads - Profile Information',
        component: () => import('../components-menu-frames/privacy-checkup-frames/ad-preferences/checkupAdsProfileInformation.vue'),
    },
    {
        path: '/CheckupSocialInteractions',
        name: 'Checkup - Social Interactions',
        component: () => import('../components-menu-frames/privacy-checkup-frames/ad-preferences/checkupSocialInteractions.vue'),
    },
    {
        path: '/CheckupAdsEnd',
        name: 'Checkup - Ad Preferences End',
        component: () => import('../components-menu-frames/privacy-checkup-frames/ad-preferences/checkupAdsEnd.vue'),
    },
    {
        path: '/AdsInterestCategories',
        name: 'Ads Interest Categories',
        component: () => import('../components-menu-frames/ad-preferences/adsInterestCategories.vue'),
    },

    /* Data settings */
    {
        path: '/CheckupDataSettings',
        name: 'Checkup - Data Settings',
        component: () => import('../components-menu-frames/privacy-checkup-frames/data/checkupDataSettings.vue'),
    },
    {
        path: '/CheckupAppsAndWebsites',
        name: 'Checkup - Apps and Websites',
        component: () => import('../components-menu-frames/privacy-checkup-frames/data/checkupAppsAndWebsites.vue'),
    },
    {
        path: '/CheckupLocation',
        name: 'Checkup - Location',
        component: () => import('../components-menu-frames/privacy-checkup-frames/data/checkupLocation.vue'),
    },
    {
        path: '/CheckupDataEnd',
        name: 'Checkup - Data End',
        component: () => import('../components-menu-frames/privacy-checkup-frames/data/checkupDataEnd.vue'),
    },

    /* Security */
    {
        path: '/CheckupHowToSecure',
        name: 'Checkup - How To Secure',
        component: () => import('../components-menu-frames/privacy-checkup-frames/secure/checkupHowToSecure.vue'),
    },
    {
        path: '/CheckTurnOnAlerts',
        name: 'Checkup - Turn On Alerts',
        component: () => import('../components-menu-frames/privacy-checkup-frames/secure/checkupTurnOnAlerts.vue'),
    },
    {
        path: '/CheckChangePassword',
        name: 'Checkup - Change Password',
        component: () => import('../components-menu-frames/privacy-checkup-frames/secure/checkupChangePassword.vue'),
    },
    {
        path: '/CheckupMoreSecurity',
        name: 'Checkup - Add More Security',
        component: () => import('../components-menu-frames/privacy-checkup-frames/secure/checkupMoreSecurity.vue'),
    },
    {
        path: '/CheckupSecurityEnd',
        name: 'Checkup - Security End',
        component: () => import('../components-menu-frames/privacy-checkup-frames/secure/checkupSecurityEnd.vue'),
    },

    /* Finding */
    {
        path: '/CheckupHowPeopleFindYou',
        name: 'Checkup - How People Find You',
        component: () => import('../components-menu-frames/privacy-checkup-frames/getting-found/checkupHowPeopleFindYou.vue'),
    },
    {
        path: '/CheckupFriendRequests',
        name: 'Checkup - Friend Requests',
        component: () => import('../components-menu-frames/privacy-checkup-frames/getting-found/checkupFriendRequests.vue'),
    },
    {
        path: '/CheckupPhoneAndMail',
        name: 'Checkup - Phone And Mail',
        component: () => import('../components-menu-frames/privacy-checkup-frames/getting-found/checkupPhoneAndMail.vue'),
    },
    {
        path: '/CheckupSearchEngines',
        name: 'Checkup - Search Engines',
        component: () => import('../components-menu-frames/privacy-checkup-frames/getting-found/checkupSearchEngines.vue'),
    },
    {
        path: '/CheckupFindingEnding',
        name: 'Checkup - Getting Found End',
        component: () => import('../components-menu-frames/privacy-checkup-frames/getting-found/checkupFindingEnd.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router