import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'

const login = asyncComponent(() => import('../view/login/login'))
const profile = asyncComponent(() => import('../view/profile/profile'))
const balance = asyncComponent(() => import('../view/balance/balance'))
const benefit = asyncComponent(() => import('../view/benefit/benefit'))
const points = asyncComponent(() => import('../view/points/points'))
const order = asyncComponent(() => import('../view/order/order'))
const mall = asyncComponent(() => import('../view/mall/mall'))
const memberCard = asyncComponent(() => import('../view/member/member'))
const service = asyncComponent(() => import('../view/service/service'))
const serviceDetail = asyncComponent(() => import('../view/service_detail/service_detail'))
const info = asyncComponent(() => import('../view/info/info'))
const msite = asyncComponent(() => import('../view/msite/msite'))
const setUser = asyncComponent(() => import('../view/set_user/set_user'))
const shop = asyncComponent(() => import('../view/shop/shop'))
const shopDetail = asyncComponent(() => import('../view/shop_detail/shop_detail'))
const food = asyncComponent(() => import('../view/food/food'))
const technology = asyncComponent(() => import('../view/technology/technology'))

export default class RouteConfig extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/profile" exact component= {profile}/>
					<Route path='/balance' component={balance} />
					<Route path='/benefit' component={benefit} />
					<Route path='/points' component={points} />
					<Route path='/order' component={order} />
					<Route path='/mall' component={mall} />
					<Route path='/membercard' component={memberCard} />
					<Route path='/service' component={service} />
					<Route path='/serviceDetail/:id' component={serviceDetail} />
					<Route path='/login' component={login} />
					<Route path="/info"  component= {info}/>
					<Route path="/msite" component= {msite}/>
					<Route path="/setuser"  component= {setUser}/>
					<Route path="/shop/:id"  component= {shop}/>
					<Route path="/shopDetail/:id"  component= {shopDetail}/>
          			<Route path="/food/:geohash/:id/:title"  component= {food}/>
          			<Route path="/technology"  component= {technology}/>
					<Redirect exact from='/' to='/profile' />
					<Route component= {profile} />
				</Switch>
			</HashRouter>
		)
	}
}