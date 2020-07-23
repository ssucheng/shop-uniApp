import {fetch} from './fetch.js'
import api from './url.js'

// 轮播图方法
export function getLunBoApi (url){
	return fetch({
		url:api.baseUrl + url,
		method:'GET'
	})
}

//推荐商品数据
export function getProductsApi(url){
	return fetch({
		url:api.baseUrl + url,
		method:'GET'
	})
}