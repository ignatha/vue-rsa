import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home'
import Generate from './components/Generate'
import Encrypt from './components/Encrypt'
import Decrypt from './components/Decrypt'



const routes = [
	{
		path:'/',
		name:'home',
		component:Home
	},
	{
		path:'/generate',
		name:'generate',
		component:Generate
	},
	{
		path:'/encrypt',
		name:'encrypt',
		component:Encrypt
	},
	{
		path:'/decrypt',
		name:'decrypt',
		component:Decrypt
	},
]

const router = createRouter({
	history:createWebHistory(),
	routes,
})

export default router;