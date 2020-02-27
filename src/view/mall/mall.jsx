import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import QueueAnim from 'rc-queue-anim'
import { fetchGoods } from '../../api/mall'
import './mall.scss'

class Mall extends Component {
	goBack = () => {
        this.props.history.goBack()
    }
    state = {
    	goods: []
    }
    componentDidMount() {
    	fetchGoods().then(res => {
    		const newState = {}
    		newState.goods = res.data
    		this.setState(newState)
    	})
    }
	render() {
		return (
			<div className="balance-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title="积分商城" goBack={this.goBack}  key='s3'/>
				<div className='mall-container'>
					<div className='points-info'>
						<div className='points-info-sub'>
							<i className='iconfont icon-gift-box'></i>
							<span className='point-num'>58</span>积分
						</div>
						<div className='points-info-sub'>
							<i className='iconfont icon-gift-box'></i>
							<Link to=''>兑换记录</Link>
						</div>
					</div>
					<div className='goods-container'>
						<ul>
							{this.state.goods.map(item => {
								return (
									<li key={'good-'+item.id}>
										<div className='goods-detail'>
											<p className='goods-title'>品名： {item.goodName}</p>
											<p className='goods-prize'><span className='orange'>{item.costPoint}</span>积分 <span className='extra-price'>+{item.extraPrice}元</span> <span className='limit-benefit'>限时优惠</span></p>
											<img src={item.good_image_path} alt='good img' />
										</div> 
									</li>
								)
							})}
						</ul>
					</div>
				</div>
				<Footer key='s3'/>
			</div>
		)
	}
}

export default Mall