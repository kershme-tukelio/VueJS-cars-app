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

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  const token = JSON.parse(localStorage.setItem('token'));
  console.log(token);
  next();
})

export default router

// pablik fanksn kolbek() {
//   konzol.log(dis.imejl);
// }