import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../dingdan.scss'
export default class Dd extends Component {
    constructor() {
        super(),
            this.state = {
                a: "",
                arr: []
            }
    }
    componentDidMount() {
        this.setState({
            a: this.props.match.params.id
        })
        // localStorage.setItem("loop", JSON.stringify(this.state.arr))
        // 获取本地存储订单
        let arr = JSON.parse(localStorage.getItem("loop"))
        this.setState({ arr: arr })
        console.log(arr)
    }
    // 清空本地存储订单
    remove() {
        this.state.arr = []
        localStorage.removeItem("loop")
        localStorage.setItem("loop", JSON.stringify(this.state.arr))
        this.setState({})
    }
    // 单个删除是购物车
    del(e){
        this.state.arr.splice(e,1)
        localStorage.setItem("loop", JSON.stringify(this.state.arr))
        this.setState({})
    }
    render() {
        return (
            <div className="ding">
                <div className="head">
                    <div className="left">
                        <Link to={"/home/" + this.state.a}> &lt;</Link>
                    </div>
                    <div className="right">
                        我的订单
                    </div>
                </div>
                <div className="shop">
                    {this.state.arr.map((val, index) => {
                        return <li>
                            <div className="left">
                                <img src={"http://cangdu.org:8001/img/" + val.image_path} alt="" />
                            </div>
                            <div className="right"> {val.name}
                                {val.specfoods.map((item, i) => {
                                    if (i > 0) {
                                        return
                                    }
                                    return <span> 价格{item.price}元</span>
                                })}
                                <button onClick={this.del.bind(this,index)}>X</button>
                            </div>


                        </li>
                    })}
                    {this.state.arr.length == 0 ? <p className="remove">亲，赶紧去看看多买点吧</p> : <p className="remove" onClick={this.remove.bind(this)}>清空购物车</p>}
                </div>
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