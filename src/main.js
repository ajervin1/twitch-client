import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import ShowPage from './views/ShowPage'
Vue.use(Router)
Vue.config.productionTip = false
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
		}
	]
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
