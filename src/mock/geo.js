import Mock from 'mockjs'


const geo = {
	latitude: 116.397128,
	longitude: 39.916527
}

const geoAddress = {
	// address: Mock.mock('@province' + '@city' + '@county')
	address: Mock.mock(`@province@city@county`)
}


export default {
	getGeoLatLong: (config) => {
		return geo	
	},
	getPoisSite: (config) => {
		return geoAddress	
	}
}