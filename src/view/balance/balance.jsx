import React, {Component} from 'react'
import moment from 'moment'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import QueueAnim from 'rc-queue-anim'
import { fetchUserBalance } from '../../api/user'
import './balance.scss'

class Balance extends Component {
	state = {
		title: '我的',
		balance: 0.00,
		tradeLog: [],
		hasLog: Math.random() > 0.5 ? true : false // mock一个字段用于判断是否有记录
	}
	// 初始化数据
    initData  = () => {
        let newState = {}
        if (this.props.location.state && this.props.location.state.title) {
            newState.title = this.props.location.state.title
        } else {
            newState.title = '我的'
        }
        fetchUserBalance().then(res => {
        	newState.balance = res.data.balance
        	newState.tradeLog = res.data.tradeLog
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
			<div className="balance-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title={this.state.title} goBack={this.goBack}  key='b1'/>
				<section className='prize-container' key='b2'>
					<section className='left-money-container'>
						<div className='left-money'>
							<h4 className='title'>当前余额</h4>
							<p className='money'>{this.state.balance}<span>元</span></p>
							<button className={this.state.balance > 0 ? "extract extract-activity": "extract"}>提现</button>
						</div>
					</section>
					<section className='trade-log-container'>
						<h4 className='title'>交易明细</h4>
						{ this.state.hasLog ? 
							<div className='empty'>
								<p className='empty-log-icon'><i className='iconfont icon-empty-log'></i></p>
								<p className='empty-log-tips'>暂无详细记录</p>
							</div>:
							<div className='log-list'>
								<ul>
								{this.state.tradeLog.map(item => {
									return (
										<li key={'tradeLog'+item.id}><span className='left'>{moment(item.timestamp).format('YYYY-MM-DD')}</span> <span className='right'>消费：{item.price}元</span></li>
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