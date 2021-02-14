import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '../components/GoodsList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: GoodsList }
]

const router = new VueRouter({
  routes
})

export default router
