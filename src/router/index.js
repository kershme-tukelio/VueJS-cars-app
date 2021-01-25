import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCars from '../views/AppCars.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/cars',
	},
	{
		path: '/cars',
		name: 'Cars',
		component: AppCars
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
