import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import QueueAnim from 'rc-queue-anim'
import { fetchGoods } from '../../api/mall'
import { fetchUserPoints } from '../../api/user'
import './points.scss'

class Points extends Component {
	state = {
		title: '我的积分',
		points: 100,
		goods: [],
		hasGoods: Math.random() > 0.5 ? true : false // mock一个字段用于判断是否有记录
	}
	// 初始化数据
    initData  = () => {
        let newState = {}
        if (this.props.location.state && this.props.location.state.title) {
            newState.title = this.props.location.state.title
        } else {
            newState.title = '我的积分'
        }
        // TODO 改造成Promise方法
        fetchUserPoints().then(res => {
        	
        })
        fetchGoods().then(res => {
        	let goods = res.data.slice(0, 7)
        	newState.goods = goods
        	this.setState(newState)
        })
    }
	goBack = () => {
        this.props.history.goBack()
    }
    componentDidMount() {
    	this.initData()
    }
	render() {
		return (
			<div className="points-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title={this.state.title} goBack={this.goBack}  key='b1'/>
				<section className='prize-container' key='b2'>
					<section className='left-money-container'>
						<div className='left-money'>
							<h4 className='title'>我的积分</h4>
							<p className='money'>{this.state.points}<span>分</span></p>
						</div>
					</section>
					<section className='trade-log-container'>
						<h4 className='title'>兑换商品</h4>
						{ this.state.hasGoods ? 
							<div className='empty'>
								<p className='empty-log-icon'><i className='iconfont icon-empty-benefit'></i></p>
								<p className='empty-log-tips'>暂无可兑换商品</p>
							</div>:
							<div className='goods-list'>
								<ul>
								{this.state.goods.map(item => {
									return (
										<li key={'good-'+item.id}>
											<div className='goods-detail'>
												<p className='goods-title'>{item.goodName}</p>
												<p className='goods-prize'><span className='orange'>{item.costPoint}</span>积分<span className='limit-benefit'>限时优惠</span></p>
												<img src={item.good_image_path} alt='good img' />
											</div> 
										</li>
									)
								})}
								</ul>
							</div>
						}
					</section>
					<Link to='/mall' className='more-goods'>查看更多 ></Link>
				</section>
				<Footer key='s2'/>
			</div>
		)
	}
}

export default Points