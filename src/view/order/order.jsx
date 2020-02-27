import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import QueueAnim from 'rc-queue-anim'
import { fetchUserOrders } from '../../api/user'
import './order.scss'

class Order extends Component {
	state = {
		orders: []
	}
	goBack = () => {
        this.props.history.goBack()
    }
    initData() {
    	fetchUserOrders().then(res => {
    		console.log(res.data)
    		const newState = {}
    		newState.orders = res.data
    		this.setState(newState)
    	})
    }
    componentDidMount() {
    	this.initData()
    }
	render() {
		return (
			<div className="order-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title="我的订单" goBack={this.goBack}  key='s3'/>
				<h2 className='order-name'>我的订单</h2>
				<ul className='order-list'>
					{this.state.orders.map(item => {
						return (
							<li key={'orders-'+item.id}>
								<div className='order-shop-img'>
									<img src={item.shopImg} alt='商店' />
								</div>
								<div className='order-detail'>
									<div className='shop-name clearfix'>
										<Link to='' className='name'>{item.shopName}<span className='to-shop'>></span></Link>
										<span className='order-status'>{item.status?'已送达':'已取消'}</span>
									</div>
									<p className='order-time'>{moment(item.timestamp).format('YYYY-MM-DD h:m:s')}</p>
									<p className='food-desc clearfix'>
										<span className='desc'>{item.foodDesc}</span>
										<span className='price'>¥{item.price}</span>
									</p>
									{
										item.shopExist ? <p className='food-more'><button>再来一单</button></p>:""
									}
								</div>
								
							</li>
						)
					})}
				</ul>
				<Footer key='s3'/>
			</div>
		)
	}
}

export default Order