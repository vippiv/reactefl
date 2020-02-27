import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { fetchShopList } from "../../api/shop";
import PropTypes from 'prop-types'
import { is, fromJS } from 'immutable';  // 保证数据的不可变
import './shop_list.scss'


class ShopList extends Component {
    static propTypes = {
        geohash: PropTypes.array.isRequired  // 经纬度信息
    }
    state = {
        shopListArr: []  // 商店列表
    }
    getShopList = (props) => {
        fetchShopList().then(res => {
            this.setState({
                shopListArr: res.data
            })
        })
    }
    componentWillMount () {
        if (this.props.geohash.length) {
            this.getShopList(this.props)
        }
    }
    shouldComponentUpdate(nextProps, nextState) {   // 判断是否要更新render, return true 更新  return false不更新
        let refresh = !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
        if (refresh) {
            this.getShopList(nextProps)
        }
        return refresh
    }
    // 评价星星
    starCount = (rating) => {
        var items = []
        for ( var i = 0; i < Math.ceil(rating);i++){
            items.push(<i className='iconfont icon-star' key={i}></i>)
        }
        return items
    }
    render () {
        return (
            <div className='shoplist-container'>
                <ul >
          {
            this.state.shopListArr.map((item, index) => {
              return (
              <Link to={'/shop/' + item.id} className='shop-item' key={'l' + index}>
                  <img src={item.image_path} alt=""/>
                <div className='shop-content'>
                  <div className='shop-content-title'>
                    <div className='title-left'>
                      <span>品牌</span>
                      <span>{item.name}</span>
                    </div>
                    <div className='title-right'>保准票</div>
                  </div>
                  <div className='shop-content-title'>
                    <div className='title-left'>
                      <div className='star-num'><i className='iconfont icon-star'></i></div>
                      <div className='star-rating'>
                        {item.rating}
                      </div>
                      <div className='order-num'>
                        月售{item.recent_order_num}单
                      </div>
                    </div>
                    <div className='title-right order-badge'>
                      <span>蜂鸟专送</span>
                      <span>准时达</span>
                    </div>
                  </div>
                  <div className='shop-content-title'>
                    <div className='fee-left'>
                      <span className='fee-text'>¥{item.float_minimum_order_amount}起送</span>
                      <span className='segmentation'> / </span>
                      <span className='fee-text'>配送费：{item.piecewise_agent_fee}元</span>
                    </div>
                    <div className='fee-right'>
                      <span>{item.distance}KM</span>
                      <span>/</span>
                      <span>{item.order_lead_time}分钟</span>
                    </div>
                  </div>
                </div>
              </Link>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ShopList