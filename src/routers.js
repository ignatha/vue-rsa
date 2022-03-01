import VueRouter from 'vue-router'

import Home from './components/Home'
import Generate from './components/Generate'
import Encrypt from './components/Encrypt'
import Decrypt from './components/Decrypt'
import Login from './components/Login'
import Register from './components/Register'


const routes =  [
{
	path: '/',
	name:'home',
	component: Home
},
{
	path: '/generate',
	name:'generate',
	component: Generate
},
{
	path: '/encrypt',
	name:'encrypt',
	component: Encrypt
},
{
	path: '/decrypt',
	name:'decrypt',
	component: Decrypt
},
{
	path: '/login',
	name:'login',
	component: Login
},
{
	path: '/register',
	name:'register',
	component: Register
}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;