// vue
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// pinia
import { createPinia } from 'pinia'
app.use(createPinia()) // pinia

// vue-router
import router from './router'
app.use(router) // vue-router

// tailwindcss
import './style.css'

// firebase
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}
initializeApp(firebaseConfig)

// vue
app.mount('#app')
