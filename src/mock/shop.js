import Mock from 'mockjs'


const List = []
const count = 100

let shopDetail = null
const shopFood = []
let foods = []
const shopEvalute = []
const shopEvaluteCount = Mock.mock('@integer(10, 20)')

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        name: '@cword(5, 8)',
        image_path: Mock.Random.image('200x200'),
        rating: '@float(3,5,1,1)',
        recent_order_num: '@integer(300, 500)',
        float_minimum_order_amount: '@integer(10, 30)',
        piecewise_agent_fee: '@integer(1, 5)',
        distance: '@float(1, 10, 1, 1)',
        order_lead_time: '@integer(10, 60)'
    }))
}

shopDetail = Mock.mock({
    name: '@ctitle(5, 10)',
    image_path: Mock.Random.image('200x200'),
    float_minimum_order_amount: '@integer(10, 30)', // 起送价
    float_delivery_fee: '@integer(2, 5)', // 配送费
    order_lead_time: '@integer(5, 20)',
    promotion_info: '正常营业',
    activities: [{
    	icon_name: '满20减5',
    	description: '双12期间满20减5'
    }],
    shopImg: [Mock.Random.image('100x100'), Mock.Random.image('100x100'), Mock.Random.image('100x100')],
    shopDesc: '@ctitle(50, 100)',
    shopCate: '@ctitle(5, 10)',
    shopAddress: `@province@city@county`,
    shopTel: /^1[385][1-9]\d{8}/,
    shopBussinessTime: '9:30-20:30',
    shopBill: '该商家支持开发票，请在下单时填好发票抬头',
    shopLicense: [Mock.Random.image('200x200'), Mock.Random.image('200x200'), Mock.Random.image('200x200')]
})

for (let j = 0; j < 20; j++) {
	foods.push({
		_id: "5dfcc8bd7f5a6f2f4827067a",
		tips: "159评价 月售273份",
		item_id: 6039,
		category_id: 9201,
		restaurant_id: 3269,
		activity: {image_text: "夜来香", icon_color: "f07373", image_text_color: "f1884f"},
		image_path: Mock.Random.image('200x200'),
		name: '@ctitle(5, 10)',
		__v: 0,
		specfoods: [{
			specs_name: "默认",
			name: '@title(5, 10)',
			item_id: 6039,
			sku_id: 23654,
			food_id: 23681,
			restaurant_id: 3269,
			_id: "5e0009f2de911551beafa2ca",
			specs: [],
			stock: 1000,
			checkout_mode: 1,
			is_essential: false,
			recent_popularity: 216,
			sold_out: false,
			price: '@integer(10, 50)',
			promotion_stock: -1,
			recent_rating: 3,
			packing_fee: 0,
			pinyin_name: "",
			original_price: 0
		}],
		satisfy_rate: '@integer(70, 99)',
		satisfy_count: 587,
		attributes: [{'icon_name|1': ["招牌", '新', '人气', '好评'], icon_color: "f07373"}],
		is_essential: false,
		server_utc: +Mock.Random.date('T'),
		specifications: [],
		rating_count: '@integer(100, 300)',
		month_sales: '@integer(200, 600)',
		description: '@ctitle(10, 20)',
		attrs: [],
		display_times: [],
		pinyin_name: "",
		is_featured: 0,
		rating: 4.5
    })
}

for (let i = 0; i < 4; i++) {
    shopFood.push(Mock.mock({
    	name: '@ctitle(3, 6)',
    	description: '@ctitle(5, 10)',
    	restaurant_id: '125',
    	id: '5112',
        foods: foods,
        type: 1,
		icon_url: Mock.Random.image('20x20'),
		is_selected: true
    }))
}

for (let i = 0; i < shopEvaluteCount; i++) {
    shopEvalute.push(Mock.mock({
        id: '@increment',
    	username: '@cname()',
    	timestamp: +Mock.Random.date('T'),
    	content: '@cword(20, 60)',
    	foodImg: [Mock.Random.image('100x100'), Mock.Random.image('100x100'), Mock.Random.image('100x100')],
    	rate: '@integer(1, 5)',
        'foodName|1': ['红烧狮子头', '2.8斤酸菜鱼', '地锅鸡', '金针菇烤鱼', '黄焖鸡'],
        avatar: Mock.Random.image('100x100'),
        replay: [
        	{
        		id: '@increment',
        		content: '@cword(20, 60)'
        	}
        ]
    }))
}

export default {
	getShopList: (config) => {
		return List	
	},
	getShopDetail: (config) => {
		return shopDetail
	},
	getShopFoodsMenu: (config) => {
		return shopFood
	},
	getShopEvalute: (config) => {
		return shopEvalute
	}
}