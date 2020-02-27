import React, { Component } from "react";
import moment from 'moment'
import { fetchShopEvalute } from "../../api/shop"
import "./shop_evaluate.scss";

class ShopEvaluate extends Component {
	state = {
		evelutes: [],
		filterData: [],
		activeTag: 'all'
	}
	initData() {
		fetchShopEvalute({
			shopid: this.props.shopId
		}).then(res => {
			const newState = {}
			newState.evelutes = res.data
			newState.filterData = newState.evelutes
			newState.activeTag = 'all'
			this.setState(newState)
			this.handleFilterData('all')
		})
	}
	handleFilterData(tag) {
		this.setState({
			activeTag: tag,
			filterData: this.handleCalc(tag)
		})
	}
	calcEvaluteSize(tag) {
		return this.handleCalc(tag).length
	}
	handleCalc(tag) {
		let ret = []
		ret = this.state.evelutes.filter(item=>{
			if(tag === 'good') {
				return item.rate > 2
			}else if(tag === 'bad') {
				return item.rate <= 2
			}else if(tag === 'img') {
				return item.foodImg.length > 0
			}else{
				return true
			}
		})
		return ret
	}
	componentDidMount() {
		this.initData()
	}
	// 评价星星
	starCount = (rating) => {
		let items = [] 
		for ( var i = 0; i < Math.ceil(rating);i++){
			items.push(<i className='iconfont icon-star' key={i}></i>)
		}
		return items
	}
	// 评语
	starText = (rating) => {
		switch(rating) {
			case 1:
				return '垃圾'
			case 2:
				return '一般'
			case 3:
				return '很好'
			case 4:
				return '非常好'
			case 5:
				return '超赞'
			default:
				return '无'
		}
	}
	render () {
		return (
			<div className='evaluate-container'>
				<div className='filter-container'>
					<button className={this.state.activeTag==='all'?'evalute-btn evalute-active':'evalute-btn'} onClick={this.handleFilterData.bind(this, 'all')}>全部{this.state.evelutes.length}</button>
					<button className={this.state.activeTag==='good'?'evalute-btn evalute-active':'evalute-btn'} onClick={this.handleFilterData.bind(this, 'good')}>好评{this.calcEvaluteSize('good')}</button>
					<button className={this.state.activeTag==='bad'?'evalute-btn evalute-active':'evalute-btn'} onClick={this.handleFilterData.bind(this, 'bad')}>差评{this.calcEvaluteSize('bad')}</button>
					<button className={this.state.activeTag==='img'?'evalute-btn evalute-active':'evalute-btn'} onClick={this.handleFilterData.bind(this, 'img')}>有图{this.calcEvaluteSize('hasimg')}</button>
				</div>
				<ul className='evalute-content'>
					{this.state.filterData.map(item => {
						return (
							<li key={item.id}>
								<div className='avatar'><img src={item.avatar} alt='avatar' /></div>
								<div className='detail'>
									<p className='username clearfix'><span className='left'>{item.username}</span><span className="right">{moment(item.timestamp).format("YYYY-MM-DD")}</span></p>
									<p className='rate'>{this.starCount(item.rate)}{this.starText(item.rate)}</p>
									<div className='txt'>{item.content}</div>
									<div className='foodimg'>
										{
											item.foodImg.map((img, index) => {
												return (
													<img src={img} key={index} alt='food img' />
												)
											})
										}
									</div>
									<div className='foodname'><i className='iconfont icon-thumb'></i><span className='tag'>{item.foodName}</span></div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default ShopEvaluate