import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)

Vue.use(VueResource)

/* eslint-disable no-new */

require('./bootstrap')

var router = new VueRouter({
    history: true,
    root: 'dashboard'
})


router.map({
    '/': {
        component: require('./components/Home.vue')
    },
})

router.alias({

    // alias can contain dynamic segments
    // the dynamic segment names must match
    // '/posts/:hashid': '/posts/:hashid/edit',
})

router.start(App, 'body')
