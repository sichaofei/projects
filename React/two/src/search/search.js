import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../search.scss'
import $ from 'jquery'
export default class Search extends Component {
    constructor() {
        super(),
            this.state = {
                a: "",
                arr: [],
                tt: []
            }
    }
    componentDidMount() {
        // 页面刷新清空本地
        // localStorage.setItem("shop", JSON.stringify(this.state.tt))
        let tt = JSON.parse(localStorage.getItem("shop"))
        console.log(tt)
        this.state.tt = tt
        console.log(this.props)
        // let a = this.props.location.search.slice(1)
        let a = this.props.match.params.id
        this.setState({
            a: a
        })
    }
    // 历史记录替换inp传接口
    zhuan(e) {
        console.log(e.target.innerHTML)
        this.refs.inp.value = e.target.innerHTML
        $.ajax({
            url: "http://cangdu.org:8001/v4/restaurants?geohash=" + this.state.a + "&keyword=" +
                this.refs.inp.value,
            type: "get",
            async: true,
            success: res => {
                console.log(res)
                if (res == [] && res.length !== 0) {
                    this.setState({
                        arr: res
                    })
                } else {
                    alert("没找到数据")
                }

            }
        })
    }
    // 回车
    enter(e) {
        if (e.keyCode == 13) {
            this.search()
        }
    }
    // 点击搜索餐馆
    search() {
        let ts = JSON.parse(localStorage.getItem("shop"))
        // this.state.tt = ts
        if (this.refs.inp.value !== "") {
            ts.push(this.refs.inp.value)
        }
        localStorage.setItem("shop", JSON.stringify(ts))

        this.setState({ tt: ts })
        $.ajax({
            url: "http://cangdu.org:8001/v4/restaurants?geohash=" + this.state.a + "&keyword=" +
                this.refs.inp.value,
            type: "get",
            async: true,
            success: res => {
                if (this.refs.inp.value == "") {
                    alert("不能为空")
                } else {
                    console.log(res)
                    if (res == [] && res.length !== 0) {
                        this.setState({
                            arr: res
                        })
                    } else {
                        alert("没找到数据")
                        this.refs.inp.value = ""
                    }
                }


            }
        })

    }
    // 单个删除历史记录
    del(e) {
        this.setState({})
        this.state.tt.splice(e, 1)
        localStorage.setItem("shop", JSON.stringify(this.state.tt))

    }
    // 删除历史记录
    remove() {
        this.state.tt = []
        localStorage.removeItem("shop")
        localStorage.setItem("shop", JSON.stringify(this.state.tt))
        this.setState({})
    }
    render() {
        return (
            <div className="search">
                <div className="header">
                    <div className="left">
                        <Link to={"/home/" + this.state.a}>&lt;</Link>
                    </div>
                    <div className="right">
                        搜索
                    </div>
                </div>
                <div className="nav">
                    <p><input ref="inp" type="text" placeholder="请输入商家名称" onKeyUp={this.enter.bind(this)} /><button onClick={this.search.bind(this)}>提交</button></p>
                    <br />
                    <p></p>
                    {this.state.tt.map((val, index) => {
                        return <li ref="li" ><span onClick={this.zhuan.bind(this)}>{val}</span>  <button onClick={this.del.bind(this, index)}>X</button> </li>

                    })}
                    {this.state.tt.length == 0 ? <p className="hsty">暂无历史记录</p> : <p className="hsty" onClick={this.remove.bind(this)}>清空历史记录</p>}
                </div>

                {this.state.arr.map((item, i) => {
                    return <Link to={"/dpde/" + item.id + "?" + this.state.a} >
                        <div className="Homecon" key={i} >
                            <p className="conp"><i className="el-icon-goods"></i>附近商家</p>
                            <div className="conor" >
                                <div className="Conimg">
                                    <img data-v-2cf4efc6 src={'http://cangdu.org:8001/img/' + item.image_path} />
                                </div>
                                <div className="conzi">
                                    <div className="zilf">
                                        <p className="lfp1">
                                            <span className="span1">品牌</span>&nbsp;&nbsp;
                         <b>{item.name}</b>
                                        </p>
                                        <p className="lfp2">
                                            <span className="span2">评价分{item.rating}</span>&nbsp;&nbsp;
                         <span className="span3">月售{item.recent_order_num}单</span>
                                        </p>
                                        <span className="span4">
                                            ￥{item.float_minimum_order_amount}起送 /&nbsp;&nbsp;
                         配送费约￥{item.float_delivery_fee}
                                        </span>
                                    </div>
                                    <div className="zirh">
                                        <span className="span1">保 准 票</span>
                                        <p>
                                            <span className="span2">蜂鸟专送</span>
                                            <span className="span3">准时达</span>
                                        </p>
                                        <p className="rhp">
                                            <span className="span4">{item.distance}</span>
                                            <span className="span5">{item.order_lead_time}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                })}

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