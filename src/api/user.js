import request from '../utils/request.js'

export function fetchUserDetail(query) {
	return request({
		url: '/user/detail',
		method: 'get',
		params: query
	})
}
export function fetchUserAddress(query) {
	return request({
		url: '/user/address',
		method: 'get',
		params: query
	})
}
export function fetchUserBalance(query) {
	return request({
		url: '/user/balance',
		method: 'get',
		params: query
	})
}
export function fetchUserBenefit(query) {
	return request({
		url: '/user/benefit',
		method: 'get',
		params: query
	})
}
export function fetchUserPoints(query) {
	return request({
		url: '/user/points',
		method: 'get',
		params: query
	})
}
export function fetchUserOrders(query) {
	return request({
		url: '/user/orders',
		method: 'get',
		params: query
	})
}