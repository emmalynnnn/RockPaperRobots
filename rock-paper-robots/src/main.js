import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import HelloWorldComponent from "./components/HelloWorld.vue";

import "./assets/style.css";

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: HelloWorldComponent},
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')
