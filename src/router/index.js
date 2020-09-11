import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import { InfoBar } from '@/components/layout'
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      content: Home,
      hero: InfoBar
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      content: About
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
