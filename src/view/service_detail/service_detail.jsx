import React, {Component} from 'react'
import Header from '../../component/header/header'
import QueueAnim from 'rc-queue-anim'
import './service_detail.scss'


class Detail extends Component {
	state = {
		serviceId: 1
	}
	goBack = () => {
        this.props.history.goBack()
    }
	componentDidMount() {
		console.log(this.props.match.params.id)
		this.setState({
			serviceId: this.props.match.params.id
		})
	}
	render () {
		return (
			<div className="service-detail-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title="服务中心" goBack={this.goBack}  key='s8'/>
				<div className='detail-container'>
					{(()=>{
						console.log(this.state.serviceId)
						switch(this.state.serviceId) {
							case '1':
								return (
									<div className='content'>
										<h2>订单超时了怎么办？</h2>
<p>非常抱歉给您带来了不便，订单出现超时，请您优先联系商家或骑士催促配送，如需反馈配送问题，您可以点击【我的客服】-选择订单-点击【订单投诉】进行反馈?</p>
									</div>
								)
							case '2':
								return (
									<div className='content'>
										<h2>订单一直没有骑士接单怎么办?</h2>
<p>如长时间没有骑士接单，建议您按照以下情况处理：</p>

<p>1.商家自配送订单：由商家为您自行配送，不会有骑士接单，建议您联系商家催单；</p>

<p>2.蜂鸟配送订单：订单下单后会尽快分配骑士配送，如果您的订单长时间未分配骑士，建议您及时联系商家进行配送。</p>

<p>3.如果您已无法等待，建议您先更换其他方式用餐，小e感谢您的谅解与支持，祝您用餐愉快！</p>
									</div>
								)
							case '3':
								return (
									<div className='content'>
										<h2>商家拒绝退单怎么办?</h2>
<p>如商家拒绝您的退单申请，您可以按照以下情况处理;</p>

<p>1.如问题已解决，您不需要做任何操作，订单会自动完成；</p>

<p>2.如问题未解决仍需退单，请您在商家拒绝退单后24小时内点击申请客服介入按钮提交客服处理哦。</p>
									</div>
								)
							case '4':
								return (
									<div className='content'>
										<h2>怎么修改评价?</h2>
<p>评价后的7天内有效订单，可以修改一次商户评价，骑手评价无法修改；修改路径为订单-点击想查询的订单-点击我的评价-修改评价。</p>
									</div>
								)
							case '5':
								return (
									<div className='content'>
										<h2>我是新用户吗?</h2>
<p>经小e核查，您的手机号码非首次使用饿了么APP下单，不满足新用户条件，建议您使用商家其他优惠活动下单。具体的新用户优惠使用条件您可点击下方问题查看。</p>
									</div>
								)
							case '6':
								return (
									<div className='content'>
										<h2>我的红包为什么用不了了?</h2>
<p>如果获得的红包不可用，您可以在下单时点击“无可用红包”按钮，查看到具体红包不可用的原因，如图所示： 同时，您也可以点击以下按钮查看您要使用的红包的限制条件，可根据条件调整订单进行使用哦~ 我的红包</p>

<p>注：如您是新用户红包无法使用，请点击下方推荐问题进行查看哦~  </p>
									</div>
								)
							case '7':
								return (
									<div className='content'>
										<h2>错送漏送怎么办?</h2>
<p>非常抱歉给您带来不便，如出现商家少送或错送的情况，您可以按照以下方式进行操作：</p>

<p>1.如已影响正常食用，您可以联系商家或骑士重新配送；</p>

<p>2.如不影响正常食用，您可以直接在订单上申请部分退款，将错送或漏送的商品进行退款（订单需确认收货后可申请部分退款）。</p>

<p>3.如果无法部分退款或商家拒绝了退款，您可以联系商家沟通线下退款或补送。</p>
									</div>
								)
							default:
								return (
									<div>暂无内容</div>
								)
						}
					})()}
				</div>
			</div>
		)
	}
}



export default Detail