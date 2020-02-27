import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header/header'
import AlertTip from '../../component/alert_tip/alert_tip'
import PropTypes from 'prop-types'
import Animate from 'rc-animate'
import './login.scss'
import { fetchCaptchaCode } from '../../api/auth'

class Login extends Component {
	static propTypes = {
		userInfo: PropTypes.object.isRequired,
		saveUserInfo: PropTypes.func.isRequired
	}
	state = {
		mobileCode: '',
		userAccount: '',
		hasAlert: false,
		alertText: '',
		password: '',
		codeNumber: '',
		captchaCodeImg: '',
		showPwd: true,
		loginWay: false
	}
	handleInput = (type, e) => {
		let value = e.target.value
		let newState = {}
		newState[type] = value
		switch(type) {}
		this.setState(newState)
	}
	// 改变密码可见
	changePasswordType = () => {
		this.setState({
			showPwd: !this.state.showPwd
		})
	}
	// 获取验证码
	getCaptchaCode = () => {
		fetchCaptchaCode().then(res => {
			this.setState({
				captchaCodeImg: res.data
			})
		})
	}
	componentDidMount () {
        this.getCaptchaCode()
    }
	goBack = () => {
		this.this.props.history.goback()
	}
	render() {
		return (
			<Animate transitionName="fade">
				<div className="login-container">
        <Header title="密码登录" goBack={this.goBack}  />
        {this.state.loginWay?<form className="login-form">
          <section className="input-container phone-number">
            <input type="text" placeholder="账户密码随便输入" name="phone" maxLength="11" value={this.state.mobileCode} />
            <button>获取验证码</button>
            {/* <button>已发送</button> */}
          </section>
        </form>:
      <form className="login-form">
        <section className="input-container">
          <input type="text" placeholder="账号" value={this.state.userAccount} onChange={this.handleInput.bind(this, 'userAccount')} />
        </section>
        <section className='input-container'>
          {this.state.showPwd?<input type="text" placeholder='密码' value={this.state.password} onChange={this.handleInput.bind(this, 'password')}/>:
              <input type="password" placeholder='密码' value={this.state.password} onChange={this.handleInput.bind(this, 'password')}/>}
          <div className={`button-switch ${this.state.showPwd?'change-to-text':''}`}>
            <div className={`circle-button ${this.state.showPwd?'trans_to_right':''}`} onClick={this.changePasswordType.bind(this)}></div>
            <span>abc</span>
            <span>...</span>
          </div>
        </section>
        <section className='input-container captcha-code-container'>
          <input type="text" placeholder='验证码' maxLength='4' value={this.state.codeNumber} onChange={this.handleInput.bind(this, 'codeNumber')} />
          <div className='img-change-img'>
            <img src={this.state.captchaCodeImg} onClick={this.getCaptchaCode.bind(this)} alt="img is wrong"/>
          </div>
        </section>
      </form>}
      <p className='login-tips'>
        温馨提示: 未注册过的账号, 登录时自动注册
      </p>
      <p className='login-tips'>
        注册过的用户可凭证账号密码登录
      </p>
      <div className='login-button' onClick={this.mobileLogin}>登录</div>
      <Link to='/forget' className='to-forget'>重置密码?</Link>
      {this.state.hasAlert&&<AlertTip logout={()=> {return false}} closeTip={this.closeTip} alertText={this.state.alertText}/>}
    </div>
			</Animate>
		)
	}
}

export default Login