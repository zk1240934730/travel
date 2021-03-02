import url from "./baseUrl.js";
import store from '../store/index';
let flag = false; //检测当前的modal是否被调用
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		//#ifdef MP-WEIXIN
		baseUrl: url.baseUrl,
		//#endif
		loadingText: '努力加载中~',
		loadingTime: 8000,
		originalData: true,
		header: {
			"content-type": "application/json;charset=UTF-8"
		}
	});
	let request_url = ""
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;
		
		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;
		
		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;
		
		config.data.loading && uni.showLoading({mask: true});
		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		config.header["Content-Type"] = "application/json";
		// config.header["Content-Type"] = "application/x-www-form-urlencoded";
		config.header["Accept"] = "application/json";

		const token = uni.getStorageSync('token');
		config.header.token = token;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}
	
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		uni.hideLoading();
		if(res.data.code === 200) {
			return res.data
		}
		return false
	}
}
export default {
	install
}