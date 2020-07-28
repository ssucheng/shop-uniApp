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

// 获取资讯列表
export function getNewsApi(url){
	return fetch({
		url:api.baseUrl + url,
		method:'GET'
	})
}

// 资讯详情
export function getNesDetailApi(url,parmas){
	return fetch({
		url:api.baseUrl + url+parmas.id,
		method:'GET'
	})
}

// 商品详情轮播图
export function getImageInfoApi(url,parmas){
	return fetch({
		url:api.baseUrl + url+parmas.id,
		method:'GET'
	})
}

// 商品详细参数
export function getInfoApi(url,parmas){
	return fetch({
		url:api.baseUrl + url+parmas.id,
		method:'GET'
	})
}
// 获取详细介绍
export function getDescApi(url,parmas){
	return fetch({
		url:api.baseUrl + url+parmas.id,
		method:'GET'
	})
}