import {fetch} from './fetch.js'
import api from './url.js'

// 轮播图方法
export function getLunBo (url){
	return fetch({
		url:api.baseUrl + url,
		method:'GET'
	})
}