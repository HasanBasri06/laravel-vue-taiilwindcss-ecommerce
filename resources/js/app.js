console.log(window.screen.width);
import {createApp} from 'vue';
import { createRouter,createWebHistory} from 'vue-router'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
       {
        path:'/', component:App
       },
   ]
  })

const app = createApp({})

app.use(router)

app.mount("#app")