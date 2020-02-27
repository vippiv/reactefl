import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {imgUrl} from "../../config/envconfig";
import { is, fromJS  } from 'immutable';  // 保证数据的不可变
import { fetchShopDetail } from "../../api/shop"
import "./shop_detail.scss";

class ShopDetail extends Component {
    state = {
        shopId: '',
        shopDetailData: '',
        shopImg: [],
        shopLicense: []
    }

    // 初始化数据
    initData = id => {
        let newState = {}
        newState.shopId = this.props.match.params.id
        fetchShopDetail().then(res => {
            newState.shopDetailData = res.data
            newState.shopImg = res.data.shopImg
            newState.shopLicense = res.data.shopLicense
            this.setState(newState)
        })
    }

    componentDidMount () {
        let id = this.props.match.params.id;
        this.initData(id);
    }
    shouldComponentUpdate(nextProps, nextState){
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }
    componentWillUnmount () {
        clearTimeout(this.timer)
    }
    render() {
        return (
            <div className="shop-detail-container">
                <header className="shop-detail-header">
                    <img
                        src={imgUrl + this.state.shopDetailData.image_path}
                        alt=""
                        className="header-cover-img"
                    />
                    <div className="description-header">
                        <Link to={'/shop/' + this.state.shopId} className="description-top">
                            <div className="description-left">
                                <img
                                src={imgUrl + this.state.shopDetailData.image_path}
                                alt=""
                                />
                            </div>
                            <div className="description-right">
                                <h4 className="description-title">
                                {this.state.shopDetailData.name}
                                </h4>
                                <p className="description-text">
                                商家配送 / {this.state.shopDetailData.order_lead_time}
                                分钟送达/配送费¥
                                {this.state.shopDetailData.float_delivery_fee}
                                </p>
                                <p className="description-promotion">
                                公告: {this.state.shopDetailData.promotion_info}
                                </p>
                            </div>
                            <i className="iconfont icon-arrow-right" />
                        </Link>
                        {this.state.shopDetailData && this.state.shopDetailData.activities.length ? (
                            <footer className="description-footer">
                                <p className='ellipsis'>
                                    <span className="tip-icon">
                                        {this.state.shopDetailData.activities[0].icon_name}
                                    </span>
                                    <span>
                                        {this.state.shopDetailData.activities[0].description}
                                        (APP专享)
                                    </span>
                                </p>
                                <p className='footer-activities'>{this.state.shopDetailData.activities.length}个活动</p>
                                <p className='icon-arrow-right'></p>
                            </footer>
                            ) : ("")}
                        </div>
                </header>
                <div className='shop-desc-container'>
                    <h2 className='title'>商家信息</h2>
                    <div className='shop-img'>
                        {
                            this.state.shopImg.map((item, index)=>{
                                return (
                                    <img src={item} key={index} alt='shop img' />
                                )
                            })
                        }
                    </div>
                    <div className='shop-desc'>{this.state.shopDetailData.shopDesc}</div>
                </div>
                <div className='shop-desc-container'>
                    <ul className="shop-desc-list">
                        <li><span className='left'>商家名称</span><span className='right'>{this.state.shopDetailData.name}</span></li>
                        <li><span className='left'>商家品类</span><span className='right'>{this.state.shopDetailData.shopCate}</span></li>
                        <li><span className='left'>商家地址</span><span className='right'>{this.state.shopDetailData.shopAddress}</span></li>
                        <li><span className='left'>商家电话</span><span className='right'>{this.state.shopDetailData.shopTel}</span></li>
                        <li><span className='left'>营业时间</span><span className='right'>{this.state.shopDetailData.shopBussinessTime}</span></li>
                    </ul>
                </div>
                <div className='shop-desc-container'>
                    <h2 className='title'>商家服务</h2>
                    <p className='shop-service-tips'>{this.state.shopDetailData.shopBill}</p>
                </div>
                <div className='shop-desc-container'>
                    <h2 className='title'>营业资质</h2>
                    <p className='shop-service-tips'>{this.state.shopLicense.map((item, index)=>{
                        return (
                            <img src={item} key={index} alt='license' />
                        )
                    })}</p>
                </div>
                <button className='accusation-btn'>举报商家</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        geohash: state.geohash
    }
}


export default connect(mapStateToProps)(ShopDetail)
