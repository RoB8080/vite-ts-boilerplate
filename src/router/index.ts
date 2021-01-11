import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/home.vue'
import Docs from '/src/views/docs.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/docs',
            component: Docs,
        },
    ],
})

export default router
