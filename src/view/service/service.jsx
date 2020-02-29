import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import QueueAnim from 'rc-queue-anim'
import './service.scss'

class Service extends Component {
	goBack = () => {
        this.props.history.goBack()
    }
	render() {
		return (
			<div className="balance-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title="服务中心" goBack={this.goBack}  key='s3'/>
				<div className='service-container'>
					<div className='top-container'>
						<div className='avatar'><i className='icontfont icon-service'></i></div>
						<div className='slogan'><span className='sloganbg'>您好，客服小e很高兴为您服务！</span></div>
					</div>
					<ul className='question-list'>
						<li className='title'>常见问题</li>
						<li className='q-item'><Link to='/serviceDetail/1' className="clearfix">订单超时了怎么办?<span className='arrow'>></span></Link></li>
						<li className='q-item'><Link to='/serviceDetail/2' className="clearfix">订单一直没有骑士接单怎么办?<span className='arrow'>></span></Link></li>
						<li className='q-item'><Link to='/serviceDetail/3' className="clearfix">商家拒绝退单怎么办?<span className='arrow'>></span></Link></li>
						<li className='q-item'><Link to='/serviceDetail/4' className="clearfix">怎么修改评价?<span className='arrow'>></span></Link></li>
						<li className='q-item'><Link to='/serviceDetail/5' className="clearfix">我是新用户吗?<span className='arrow'>></span></Link></li>
						<li className='q-item'><Link to='/serviceDetail/6' className="clearfix">我的红包为什么用不了了?<span className='arrow'>></span></Link></li>
						<li className='q-item'><Link to='/serviceDetail/7' className="clearfix">错送漏送怎么办?<span className='arrow'>></span></Link></li>
					</ul>
				</div>
				<Footer key='s3'/>
			</div>
		)
	}
}

export default Service