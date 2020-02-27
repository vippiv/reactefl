import request from '../utils/request.js'

export function fetchList(query) {
	return request({
		url: '/food/list',
		method: 'get',
		params: query
	})
}

export function fetchFoodTypes(query) {
	return request({
		url: '/food/types',
		method: 'get',
		params: query
	})
}