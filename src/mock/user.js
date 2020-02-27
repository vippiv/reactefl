import Mock from 'mockjs'

const userAddress = []
const userAddressCount = 5

const avatar_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

let userDetail = null

const tradeLog = []
const tradeLogCount = 20

const benefit = []
const benefitCount = 5

const orders = []
const orderCount = 20

userDetail = Mock.mock({
	user_id: '@increment',
	avatar: avatar_uri,
	mobile: /^1[385][1-9]\d{8}/,
	username: '@cname()',
	balance: '@integer(20, 300)',
	gift_amount: '@integer(5, 10)',
	point: '@integer(100, 1000)',
	address: `@province@city@county`
})

for (let i = 0; i < userAddressCount; i++) {
	userAddress.push(Mock.mock({
		id: '@increment',
		author: `@province@city@county`,
		telenum: /^1[385][1-9]\d{8}/,
		standbytelenum: /^1[385][1-9]\d{8}/
	}))
}

for (let i = 0; i < tradeLogCount; i++) {
	tradeLog.push(Mock.mock({
		id: '@increment',
		timestamp: +Mock.Random.date('T'),
		price: '@integer(20, 300)'
	}))
}

for (let i = 0; i < benefitCount; i++) {
	benefit.push(Mock.mock({
		id: '@increment',
		shopName: '@ctitle(5, 10)',
		price: '@integer(10, 30)',
		totalPrice: '@integer(20, 50)'
	}))
}

for (let i = 0; i < orderCount; i++) {
	orders.push(Mock.mock({
		id: '@increment',
		shopImg: Mock.Random.image('50x50'),
		shopName: '@ctitle(5,10)',
		timestamp: +Mock.Random.date('T'),
		foodDesc: '@ctitle(5, 15)',
		price: '@integer(10, 60)',
		'status|1': [0, 1],
		'shopExist|1': [0, 1]
	}))
}

const balance = Mock.mock({
	balance: '@integer(20, 300)',
	tradeLog: tradeLog
})

const points = Mock.mock({
	points: '@integer(100, 900)',
})


export default {
	getUserDetail: (config) => {
		return userDetail	
	},
	getUserAddress: (config) => {
		return userAddress	
	},
	getUserBalance: (config) => {
		return balance
	},
	getUserBenefit: (config) => {
		return benefit
	},
	getUserPoints: (config) => {
		return points
	},
	getUserOrders: (config) => {
		return orders
	}
}