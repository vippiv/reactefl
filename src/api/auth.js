import request from '../utils/request.js'

export function fetchCaptchaCode(query) {
	return request({
		url: '/captchacode',
		method: 'get',
		params: query
	})
}