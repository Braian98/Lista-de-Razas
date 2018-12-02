import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List/List'
import Detail from '@/components/Detail/Detail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/:name/detail',
            name: 'Detail',
            component: Detail
        },
    ],
    mode: 'history'
})