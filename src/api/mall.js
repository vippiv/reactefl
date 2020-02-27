import request from '../utils/request.js'

export function fetchGoods(query) {
	return request({
		url: '/mall/goods',
		method: 'get',
		params: query
	})
}