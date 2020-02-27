import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'
import '../../assets/iconfont/iconfont.js';

class Footer extends Component {
  render () {
    return (
      <section className='footer-container'>
        <NavLink className='guide-item' to='/msite'>
          <i className="iconfont icon-foodsale icon-style"></i>
          <span className='spec-text'>外卖</span>
        </NavLink>
        <NavLink className='guide-item' to='/technology'>
          <i className="iconfont icon-searchfood icon-style"></i>
          <span>搜索</span>
        </NavLink>
        <NavLink className='guide-item' to='/order'>
          <i className="iconfont icon-order icon-style"></i>
          <span>订单</span>
        </NavLink>
        <NavLink className='guide-item' to='/profile'>
          <i className="iconfont icon-usercenter icon-style"></i>
          <span>我的</span>
        </NavLink>
      </section>
    )
  }
}

export default Footer