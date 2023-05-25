import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import HelloRobotsComponent from "./components/HelloWorld.vue";
import PlayComponent from "./components/Play.vue";
import DoTaskComponent from "./components/DoTask.vue";
import ExcusedFromTaskComponent from "./components/ExcusedFromTask.vue";

import "./assets/style.css";

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: HelloRobotsComponent},
        { path: '/play', component: PlayComponent},
        { path: '/do-task', component: DoTaskComponent},
        { path: '/excused', component: ExcusedFromTaskComponent},
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')
