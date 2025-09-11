//Création d'une instance de router et config des routes

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/tp/NotFoundView.vue')

        },
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/tp/Databinding',
            name: 'Databinding',
            component: () => import('../views/tp/Databinding.vue')
        },
        {
            path: '/tp/EventBinding',
            name: 'EventBinding',
            component: () => import('../views/tp/EventBinding.vue')
        },
        {
            path: '/tp/V-onInput',
            name: 'V-onInput',
            component: () => import('../views/tp/V-onInput.vue')
        },
        {
            path: '/tp/watch',
            name: 'watch',
            component: () => import('../views/tp/watch.vue')
        }
    ]
})
export default router;