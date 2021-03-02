import Vue from 'vue'
import App from './App'
import store from './store/index'
import uView from "uview-ui"
import httpInterceptor from './util/http.interceptor.js'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store;

const app = new Vue({
    ...App,
	store
})
Vue.use(uView);
Vue.use(httpInterceptor, app);

app.$mount()
