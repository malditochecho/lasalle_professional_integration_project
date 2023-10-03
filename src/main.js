import { createApp } from 'vue' // vue
import { createPinia } from 'pinia' // pinia

import './style.css' // tailwindcss

import App from './App.vue' // vue
import router from './router' // vue-router

const app = createApp(App) // vue

app.use(createPinia()) // pinia
app.use(router) // vue-router

app.mount('#app') // vue
