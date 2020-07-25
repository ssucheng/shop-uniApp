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

// 获取图片分类
export function getPicsApi(url){
	return fetch({
		url:api.baseUrl + url,
		method:'GET'
	})
}

// 获取二级图片列表
export function getImagesApi(url,parmas){
	return fetch({
		url:api.baseUrl + url  +parmas.id,
		method:'GET'
	})
}