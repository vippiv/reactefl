import Mock from 'mockjs'

const goods = []
const goodsCount = 50

for (let i = 0; i < goodsCount; i++) {
	goods.push(Mock.mock({
		id: '@increment',
		goodName: '@ctitle(5,8)',
		costPoint: '@integer(20, 900)',
		extraPrice: '@integer(10, 100)',
		good_image_path: Mock.Random.image('200x200'),
	}))
}


export default {
	getGoods: (config) => {
		return goods	
	}
}