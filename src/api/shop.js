import request from '../utils/request.js'

export function fetchShopList(query) {
	return request({
		url: '/shop/list',
		method: 'get',
		params: query
	})
}

export function fetchShopDetail(query) {
	return request({
		url: '/shop/detail',
		method: 'get',
		params: query
	})
}

export function fetchShopFoodMenu(query) {
	return request({
		url: '/shop/foodmenu',
		method: 'get',
		params: query
	})
}

export function fetchShopEvalute(query) {
	return request({
		url: '/shop/evaluate',
		method: 'get',
		params: query
	})
}