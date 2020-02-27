import React, {Component} from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import QueueAnim from 'rc-queue-anim'
import './member.scss'

class Member extends Component {
	goBack = () => {
        this.props.history.goBack()
    }
	render() {
		return (
			<div className="balance-container">
				<QueueAnim type='bottom'></QueueAnim>
				<Header title="饿疯了会员卡" goBack={this.goBack}  key='s3'/>
				<Footer key='s3'/>
			</div>
		)
	}
}

export default Member