//Dans main il faudra dire à notre application qu'elle va importer le router

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'


createApp(App).use(router).use(createPinia()).mount('#app') //tout est monté dans l'ID app de index.html