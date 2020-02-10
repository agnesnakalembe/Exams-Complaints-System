import Vue from 'vue';
import Router from 'vue-router';
import Signup from '../views/Signup';
import Home from '../views/Home';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }
    ]
})