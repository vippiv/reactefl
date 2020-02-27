import Mock from 'mockjs'


const CaptchaCode = Mock.Random.dataImage('50x20', Mock.mock({'regexp': /\w{4}/}).regexp)


export default {
	getCaptchaCode: (config) => {
		return CaptchaCode	
	}
}