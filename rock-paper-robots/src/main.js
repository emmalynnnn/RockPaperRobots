import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import HelloRobotsComponent from "./components/HelloWorld.vue";
import PlayComponent from "./components/Play.vue";

import "./assets/style.css";

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: HelloRobotsComponent},
        { path: '/play', component: PlayComponent},
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')
