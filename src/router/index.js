import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import { FooterBar } from '@/components/layout'
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue') // lazy load

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      content: Home,
      footer: FooterBar
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      content: About
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
