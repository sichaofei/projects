import React, { Component } from 'react'
import '../login.scss'
import $ from 'jquery'
import { Link } from 'react-router-dom'
export default class Login extends Component {
    constructor(props, context) {
        super(props),
            this.state = {
                imgs: {},
                nar: {},
                c: "39.90469,116.407173"
            }
    }
    componentDidMount() {
        let _this = this
        // 本地经纬度
        $.ajax({
            url: "http://cangdu.org:8001/v1/cities?type=guess",
            type: "get",
            dataType: "json",
            success: function (res) {
                console.log(res)
                _this.setState({
                    nar: res
                }, () => {
                    let a = _this.state.nar.latitude
                    let b = _this.state.nar.longitude

                })
            }
        })
        // 验证码图片
        $.ajax({
            url: "http://cangdu.org:8001/v1/captchas",
            type: "post",
            dataType: "json",
            success: function (res) {
                console.log(res, '12')
                _this.setState({
                    imgs: res.code
                })
            }
        })
    }
    login() {
        let _this = this
        let zh = this.refs.zh.value.toString()
        console.log(zh)
        let mm = this.refs.mm.value.toString()
        let yzm = this.refs.yzm.value.toString()
        console.log(mm, yzm)
        $.ajax({
            url: "http://cangdu.org:8001/v2/login",
            type: "post",
            dataType: "json",
            username: zh,
            password: mm,
            captcha_code: yzm,
            success: function (res) {
                localStorage.setItem("name", zh)
                console.log(res)
                _this.props.history.push('/home/' + _this.state.c)
            }
        })
    }
    gets() {
        let _this = this
        $.ajax({
            url: "http://cangdu.org:8001/v1/captchas",
            type: "post",
            dataType: "json",
            success: function (res) {
                console.log(res)

                _this.setState({
                    imgs: res.code
                })
            }
        })
    }
    render() {
        return (
            <div className="login">
                <div className="heade">
                    <div className="left">
                        <Link to="/">  &lt;</Link>
                    </div>
                    <div className="right">
                        密码登录
                    </div>
                </div>
                <div className="nav">
                    <input type="text" placeholder="账号" ref="zh" />

                    <input type="password" placeholder="密码" ref="mm" />
                    <div className="yan">
                        <input type="text" placeholder="验证码" ref="yzm" />
                        <p onClick={this.gets.bind(this)}> <span> <img src={this.state.imgs} alt="" /></span> <span> 看不清换一张</span> </p>
                    </div>
                    <p>温馨提示：未注册过得账号登录时将自动注册 <br />注册过的账号可凭密码登录</p>
                    <div className="btn">
                        <p><button onClick={this.login.bind(this)}>登录</button></p>
                    </div>

                </div>
            </div>
        )
    }
}