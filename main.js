import Vue from 'vue'
import App from './App'
import {http} from './util/api.js'

Vue.prototype.$http = http
// 全局注册过滤器
Vue.filter('formateDate',(value)=>{
	// 2015-04-16T03:50:28.000Z  以T为分界线切割字符串
	if (!value) return ''
	const index = value.lastIndexOf('T')
	return value.substring(0,index)
})
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
