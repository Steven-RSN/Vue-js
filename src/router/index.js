//Création d'une instance de router et config des routes

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
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
        },
        {
            path: '/tp/styleDynamic',
            name: 'styleDynamic',
            component: () => import('../views/tp/styleDynamic.vue')
        },
        {
            path: '/tp/inputDynamic',
            name: 'inputDynamic',
            component: () => import('../views/tp/inputDynamic.vue')
        },
        {
            path: '/tp/v-if',
            name: 'v-if',
            component: () => import('../views/tp/v-if.vue')
        },
        {
            path: '/tp/api',
            name: 'v-if',
            component: () => import('../views/tp/api.vue')
        },
        {
            path: '/tp/FriendsList',
            name: 'FriendsList',
            component: () => import('../views/tp/FriendsList.vue')
        },
        {
            path: '/tp/eventEmit',
            name: 'eventEmit',
            component: () => import('../views/tp/eventEmit.vue')
        },
        {
            path: '/components/ParentComponent',
            name: 'ParentComponent',
            component: () => import('../components/ParentComponent.vue')
        },
        {
            path: '/tp/miniEval',
            name: 'miniEval',
            component: () => import('../views/tp/miniEval.vue')
        },
        {
            path: '/components/BarChart',
            name: 'BarChart',
            component: () => import('../components/BarChart.vue')
        },
        {
            path: '/components/radarChart',
            name: 'radarChart',
            component: () => import('../components/radarChart.vue')
        },
        {
            path: '/components/pinias',
            name: 'pinias',
            component: () => import('../components/pinias.vue')
        },
    ]
})
export default router;