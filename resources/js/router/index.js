import {createRouter, createWebHistory} from 'vue-router';
import password from '../components/password.vue';
import order from '../components/order.vue';
import notFound from '../components/notFound.vue';

const routes = [
    {
        path: '/',
        component: password
    },
    {
        path: '/order',
        component: order
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
