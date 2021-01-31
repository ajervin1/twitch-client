import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import ShowPage from './views/ShowPage'
import FavoritePage from './views/FavoritePage'

Vue.use(Router)
Vue.config.productionTip = false

// Router
const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: HomePage
		},
		{
			path: '/clips/:id',
			component: ShowPage
		},
		{
			path: '/favorites',
			component: FavoritePage
		}
	]
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
