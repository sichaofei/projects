import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default class Foot extends Component {
    constructor() {
        super(),
            this.state = {
                a: ""
            }
    }
    componentWillReceiveProps() {
        console.log(this.props)
        let a = this.props.hashs
        this.setState({
            a: a
        })
    }
    render() {
        return (
            <div className="foot">
                <div>
                    <NavLink activeClassName="blue" exact={true} to={"/home/" + this.state.a}>
                        <i className="el-icon-goods"></i>
                        <span>外卖</span>
                    </NavLink>

                </div>
                <div>
                    <NavLink activeClassName="blue"  to={"/search/" + this.state.a}>
                        <i className="el-icon-view"></i>
                        <span>搜索</span>
                    </NavLink>

                </div>
                <div>
                    <NavLink activeClassName="blue"  to={"/shops/" + this.state.a}>
                        <i className="el-icon-tickets"></i>
                        <span>订单</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName="blue"  to={"/my/" + this.state.a}>
                        <i className="el-icon-mobile-phone"></i>
                        <span>我的</span>
                    </NavLink>
                </div>

            </div>
        )
    }
}