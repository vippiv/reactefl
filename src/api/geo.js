import request from '../utils/request.js'

export function fetchLatAndLong(query) {
	return request({
		url: '/latandlong',
		method: 'get',
		params: query
	})
}

export function fetchPoisSite(query) {
	return request({
		url: '/poissite',
		method: 'get',
		params: query
	})
}