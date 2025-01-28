import { reactive, watch } from 'vue'
import { PremiumStatus } from '@/interface'

export const appstate = reactive({
  navbar: false,
  intteruptButton: false,
  darkPatterns: false,
  personalDataAsked: false,
  imagePopupOpen: false,
  constructionPopupOpen: false,
  profilePopupOpen: false,
  innitialFocus: '',
  premiumStatus: PremiumStatus.Basic,
  comment: "",
})

watch(appstate, (newState) => {
  sessionStorage.setItem('appstate', JSON.stringify(newState));
}, { deep: true }) // deep: true enables deep watching for nested properties

// Recall the state from sessionStorage on application load
const storedState = sessionStorage.getItem('appstate')
if (storedState) {
  // Parse the stored state and update appstate
  Object.assign(appstate, JSON.parse(storedState));
}