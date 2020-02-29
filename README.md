## react-efl

![](https://img.shields.io/badge/react-16.5.2-blue.svg)
![](https://img.shields.io/badge/react--redux-5.0.7-green.svg)![](https://img.shields.io/badge/react--router--dom-4.3.1-f1ddb4.svg)
![](https://img.shields.io/badge/axios-0.18.0-ff69b4.svg)
![](https://img.shields.io/badge/swiper-4.4.1-yellow.svg)
![](https://img.shields.io/badge/webpack-4.19.1-003366.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)
# 前言
react学习一直断断续续的，最近趁着超长假期做个项目，数据渲染方面用mock实现</br>
该项目力求完整的实现外卖平台的功能, 目前开发了用户中心、商品展示、购物车、商家详情等,目前算是相对完整的了,细节优化后面有空再处理
# 技术栈
react4 + react-redux + react-router + es6 + axios + sass + webpack
# 说明
> 觉得对你有帮助,请点右上角的`Star`支持一下</br>

# 项目运行
`node >= 6.0`
```
  git clone https://github.com/vippiv/reactefl.git
  cd reactefl
  npm install 或用 cnpm
  npm run start
```
# 演示
> 拉下来install后即可查看


# 截图
<img src="https://img2018.cnblogs.com/blog/728807/202002/728807-20200229114047095-1658110844.gif" width="325" height="620"/> &#160;&#160;<img src="https://img2018.cnblogs.com/blog/728807/202002/728807-20200229114058158-649478288.gif" width="325" height="620"/>
<img src="https://img2018.cnblogs.com/blog/728807/202002/728807-20200229114107028-709943006.gif" width="325" height="620"/> &#160;&#160;<img src="https://img2018.cnblogs.com/blog/728807/202002/728807-20200229114114528-526893386.gif" width="325" height="620"/>

# 项目结构
```javascript
├── build          ----------------------网页配置
│   ├── favicon.ico  
│   └── manifest.json 
├── config            ------------------webpack配置
│   ├── env.js       
│   ├── jest          
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── getHttpsConfig.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package-lock.json
├── package.json    --------------------项目package.json
├── public          --------------------出口
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts        ---------------------运行的脚本
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src           ----------------------源码目录
│   ├── api       ----------------------API目录
│   │   ├── auth.js
│   │   ├── food.js
│   │   ├── geo.js
│   │   ├── mall.js
│   │   ├── shop.js
│   │   ├── user.js
│   │   └── server.js
│   ├── assets   -----------------------资源目录
│   │   └── iconfont -------------------iconfont目录
│   ├── components   -------------------公共组件
│   │   ├── alert_tip  -----------------提示组件
│   │   ├── footer   -------------------导航栏组件
│   │   ├── header  --------------------header组件
│   │   ├── loader  --------------------加载组件
│   │   └── shop_list ------------------商店列表组件
│   ├── config    ----------------------项目一些配置
│   │   ├── envconfig.js  --------------配置信息
│   │   └── rem.js  --------------------自适应
│   ├── index.js    --------------------入口
│   ├── view       ---------------------页面目录
│   │   ├── balance    -----------------用户余额
│   │   ├── benefit    -----------------用户优惠券
│   │   ├── mall    --------------------积分商城
│   │   ├── member    ------------------会员卡
│   │   ├── food    --------------------食物页面
│   │   ├── order    -------------------订单 页面
│   │   ├── points    ------------------用户积分
│   │   ├── info   ---------------------个人信息页面
│   │   ├── login  ---------------------登录页面
│   │   ├── msite  ---------------------商店页面
│   │   ├── profile --------------------主页页面
│   │   ├── set_user -------------------用户信息设置页面
│   │   ├── shop   ---------------------商店详情页面
│   │   ├── shop_detail   --------------商店详情页面
│   │   ├── shop_evaluate   ------------商店评价页面
│   │   ├── service   ------------------服务中心
│   │   ├── service_detail   -----------服务中心条款
│   │   └── technology  ----------------技术栈页面
│   ├── router   -----------------------路由
│   │   └── index.js
│   ├── serviceWorker.js  --------------热加载
│   ├── store   ------------------------react-redux状态管理目录
│   │   ├── store.js
│   │   └── user
│   ├── style   ------------------------通用样式目录
│   │   ├── base.scss
│   │   ├── font.scss
│   │   ├── mixin.scss
│   │   └── swiper.min.css
│   └── utils  ------------------------公用方法
│       ├── asyncComponent.jsx  -------异步加载组件
│       └── commons.js  ---------------公用方法
├── README.md      ----------------------README

```
