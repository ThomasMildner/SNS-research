import { createRouter, createWebHistory } from 'vue-router'
import { START_LOCATION } from 'vue-router';
import { appstate } from '@/stores/appstate_store'
import WrongPageView from '@/views/WrongPageView.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import QuestionnaireView from '@/views/QuestionnaireView.vue'
import StartTaskView from '@/views/StartTaskView.vue'
import EntryView from '@/views/task1/EntryView.vue'
import PremiumView from '@/views/task1/PremiumView.vue'
import SignUpView from '@/views/task1/SignUpView.vue'
import SignInView from '@/views/task1/SignInView.vue'
import PaymentView from '@/views/task1/PaymentView.vue'
import HomeView from '@/views/task2/HomeView.vue'
import FriendsView from '@/views/task2/FriendsView.vue'
import InboxView from '@/views/task2/InboxView.vue'
import ProfileView from '@/views/task2/ProfileView.vue'
import EditProfileView from '@/views/task2/EditProfileView.vue'
import EndView from '@/views/EndView.vue'
import useStudyDataStore from '@/stores/studydata_store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'wrong-page',
      component: WrongPageView
    },
    {
      path: '/welcome/:adhd/:prolific',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/questionnaire/:task',
      name: 'questionnaire',
      component: QuestionnaireView
    },
    {
      path: '/start/:task',
      name: 'start-task',
      component: StartTaskView
    },
    {
      path: '/entry',
      name: 'entry',
      component: EntryView,
      meta: {
        taskComponent: true
      }
    },
    {
      path: '/premium',
      name: 'premium',
      component: PremiumView,
      meta: {
        taskComponent: true
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
      meta: {
        taskComponent: true
      }
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView,
      meta: {
        taskComponent: true
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView,
      meta: {
        taskComponent: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        hasNavbar: true,
        taskComponent: true
      }
    },
    {
      path: '/friends',
      name: 'friends',
      component: FriendsView,
      meta: {
        hasNavbar: true,
        taskComponent: true
      }
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: InboxView,
      meta: {
        hasNavbar: true,
        taskComponent: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        hasNavbar: true,
        taskComponent: true
      }
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: EditProfileView,
      meta: {
        hasNavbar: false,
        taskComponent: true
      }
    },
    {
      path: '/end',
      name: 'end',
      component: EndView
    }
  ],
})

router.beforeEach((to, from, next) => {
  // Navbar activation
  appstate.navbar = to.matched.some(record => record.meta.hasNavbar);
  // Interrupt Button activation
  appstate.intteruptButton = to.matched.some(record => record.meta.taskComponent);

  if (useStudyDataStore().studyOver() && to.path != "/end") {
    next("/end");
  } else {
    next();
  }
})

export default router
