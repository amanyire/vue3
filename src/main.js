import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import theWorld from './components/TheWelcome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: home},
        {path: '/about', component: about},
        {path: '/theworld', component: theWorld}
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')
