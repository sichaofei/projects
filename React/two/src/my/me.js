import React, { Component } from 'react'
import Foot from '../home/foot'
import '../me.scss'
import { Link, NavLink } from 'react-router-dom'
export default class My extends Component {
    constructor() {
        super(),
            this.state = {
                a: ""
            }
    }
    componentDidMount() {
        console.log(this.props)
        this.setState({
            a: this.props.match.params.id
        })
    }
    render() {
        return (
            <div className="My">
                <p className="p1">
                    <Link to={"/home/" + this.state.a}>
                        <i className="el-icon-arrow-left"></i>
                    </Link>
                    <span>我的</span>
                </p>
                <div className="Myyh">
                    <div className="Yhlf">
                        <i className="el-icon-question"></i>
                    </div>
                    <div className="Yhrh">
                        <h3>{localStorage.getItem("name") == "" ? "登录|注册" :localStorage.getItem("name")}</h3>
                        <p>
                            <i className="el-icon-mobile-phone"></i>
                            暂无绑定的手机号
                        </p>
                       <Link to="/login"><i className="el-icon-arrow-right jtrh"></i></Link>  
                    </div>
                </div>
                <div className="money">
                    <div>
                        <p><b className="b1">0.00</b>元</p>
                        <span>我的余额</span>
                    </div>
                    <div>
                        <p><b className="b2">0</b>个</p>
                        <span>我的优惠</span>
                    </div>
                    <div>
                        <p><b className="b3">0</b>分</p>
                        <span>我的积分</span>
                    </div>
                </div>
                <div className="Mycon">
                    <div>
                        <i className="el-icon-tickets i1"></i>
                        <p>
                            我的订单
                            <i className="el-icon-arrow-right"></i>
                        </p>
                    </div>
                    <div>
                        <i className="el-icon-goods i2"></i>
                        <p>
                            积分商城
                            <i className="el-icon-arrow-right"></i>
                        </p>
                    </div>
                    <div className="Bot">
                        <i className="el-icon-service i3"></i>
                        <p>
                            饿了么会员卡
                            <i className="el-icon-arrow-right"></i>
                        </p>
                    </div>
                    <div>
                        <i className="el-icon-menu i4"></i>
                        <p>
                            服务中心
                            <i className="el-icon-arrow-right"></i>
                        </p>
                    </div>
                    <div>
                        <i className="el-icon-sold-out i5"></i>
                        <p>
                            下载饿了么APP
                            <i className="el-icon-arrow-right"></i>
                        </p>
                    </div>
                </div>
                <div className="Cor"></div>
                <div className="foot">
                    <div>
                        <NavLink activeClassName="blue" exact={true} to={"/home/" + this.state.a}>
                            <i className="el-icon-goods"></i>
                            <span>外卖</span>
                        </NavLink>

                    </div>
                    <div>
                        <NavLink activeClassName="blue" to={"/search/" + this.state.a}>
                            <i className="el-icon-view"></i>
                            <span>搜索</span>
                        </NavLink>

                    </div>
                    <div>
                        <NavLink activeClassName="blue" to={"/shops/" + this.state.a}>
                            <i className="el-icon-tickets"></i>
                            <span>订单</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink activeClassName="blue" to={"/my/" + this.state.a}>
                            <i className="el-icon-mobile-phone"></i>
                            <span>我的</span>
                        </NavLink>
                    </div>

                </div>
            </div>
        )
    }
}