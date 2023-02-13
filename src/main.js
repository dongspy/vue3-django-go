import { createApp } from 'vue'
// import VueRouter from "vue-router"
import { createRouter, createWebHashHistory } from 'vue-router'
import Vuex from 'vuex';



import App from './App.vue'
import './assets/main.css'
import store from './store/store';

import router from './router' // <---

const app = createApp(App)

app.config.globalProperties.$store = store;
// app.config.globalProperties.$router = router;
app.config.globalProperties.$Vuex = Vuex;



// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
