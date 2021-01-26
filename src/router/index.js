import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCars from '../views/AppCars.vue'
import AddCar from '../views/AddCar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/cars'
  },
  {
    path: '/cars',
    name: 'Cars',
    component: AppCars
  },
  {
    path: '/add',
    name: 'add',
    component: AddCar
  }
]

const router = new VueRouter({
  routes
})

export default router
