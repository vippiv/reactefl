import React, {Component} from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import QueueAnim from 'rc-queue-anim'
import { fetchUserBenefit } from '../../api/user'
import './benefit.scss'

class Balance extends Component {
	state = {
		balance: 0.00,
		benefit: [],
		hasBenefit: false
		///hasBenefit: Math.random() > 0.5 ? true : false // mock一个字段用于判断是否有记录
	}
	// 初始化数据
    initData  = () => {
        let newState = {}
        fetchUserBenefit().then(res => {
        	console.log(res.data)
        	newState.benefit = res.data
        	this.setState(newState)
        })
    }
	goBack = () => {
        this.props.history.goBack()
    }
	changeShowType = (type) => {
		this.setState({
			active: type,
			show: !this.state.show
		})
	}
    componentDidMount() {
    	this.initData()
    }
	render() {
		return (
			<div className="benefit-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title='我的优惠券' goBack={this.goBack}  key='b1'/>
				<section className='prize-container' key='b2'>
					<section className='left-money-container'>
						<div className='switch-type'>
							<div><span onClick={this.changeShowType.bind(this, 'food')} className={this.state.active==='food'?'activity-show':''}>红包</span></div>
							<div><span onClick={this.changeShowType.bind(this, 'rating')} className={this.state.active==='rating'?'activity-show':''}>店铺红包</span></div>
						</div>
					</section>
					<section className='trade-log-container'>
						{ this.state.hasBenefit ? 
							<div className='empty'>
								<p className='empty-log-icon'><i className='iconfont icon-empty-benefit'></i></p>
								<p className='empty-log-tips'>没有红包</p>
							</div>:
							<div className='log-list'>
								<ul>
								{this.state.benefit.map(item => {
									return (
										<li key={'tradeLog'+item.id}>
											<div className='left'><span className='rmbsymbol'>¥</span>{item.price}</div> 
											<div className='middle'>
												<p className='shopname'>{item.shopName}</p>
												<p className='use-tips'>·限外卖订单使用</p>
												<p className='use-tips'>·限2020-02-22至2020-02-28使用</p>
												<p className='use-tips'>·满{item.totalPrice}元可用</p>
											</div>
											<div className='right'><span className='userit'>进店使用</span></div>
										</li>
									)
								})}
								</ul>
							</div>
						}
					</section>
				</section>
				<Footer key='s2'/>
			</div>
		)
	}
}

export default Balance