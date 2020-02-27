import Mock from 'mockjs'
import foodAPI from './food.js'
import userAPI from './user.js'
import authAPI from './auth.js'
import geoAPI from './geo.js'
import shopAPI from './shop.js'
import mallAPI from './mall.js'

// 外卖菜单
Mock.mock(/\/food\/list/, 'get', foodAPI.getList)
Mock.mock(/\/food\/types/, 'get', foodAPI.getFoodTypes)

// 用户信息
Mock.mock(/\/user\/detail/, 'get', userAPI.getUserDetail)
Mock.mock(/\/user\/address/, 'get', userAPI.getUserAddress)
Mock.mock(/\/user\/balance/, 'get', userAPI.getUserBalance)
Mock.mock(/\/user\/benefit/, 'get', userAPI.getUserBenefit)
Mock.mock(/\/user\/points/, 'get', userAPI.getUserPoints)
Mock.mock(/\/user\/orders/, 'get', userAPI.getUserOrders)

// 权限相关
Mock.mock(/\/captchacode/, 'get', authAPI.getCaptchaCode)

// 地理位置
Mock.mock(/\/latandlong/, 'get', geoAPI.getGeoLatLong)
Mock.mock(/\/poissite/, 'get', geoAPI.getPoisSite)


// 店铺相关
Mock.mock(/\/shop\/list/, 'get', shopAPI.getShopList)
Mock.mock(/\/shop\/detail/, 'get', shopAPI.getShopDetail)
Mock.mock(/\/shop\/foodmenu/, 'get', shopAPI.getShopFoodsMenu)
Mock.mock(/\/shop\/evaluate/, 'get', shopAPI.getShopEvalute)

// 积分商城相关
Mock.mock(/\/mall\/goods/, 'get', mallAPI.getGoods)


export default Mock