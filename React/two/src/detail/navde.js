import React, { Component } from 'react'
import '../navde.scss'
import '../home.scss'
import $ from 'jquery'
import { Link } from 'react-router-dom'
export default class navDetail extends Component {
    constructor() {
        super(),
            this.state = {
                details: [],
                a: "",
                show:"block"
            }
    }
    componentDidMount() {
        console.log(this.props)
        let arr = this.props.location.search.split("/")
        let a = arr[0].slice(1)
        let name = arr[1]
        this.setState({ a: a })
        this.setState({ name: name })
        let id = this.props.match.params.id
        let _this = this
        $.ajax({
            url: "http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762",
            type: "get",
            restaurant_category_id: id,
            success: function (res) {
                _this.setState({
                    details: res
                },()=>{
                    _this.setState({
                        show:"none"
                    })  
                })
            }
        })
    }
    render() {
        return (

            <div className="naDetail">
            <div className="loading" style={{ display: this.state.show }}><i className="el-icon-loading"></i></div>
                <div className="header">
                    <div className="left">
                        <Link to={"/home/" + this.state.a}>  &lt;</Link>
                    </div>
                    <div className="right">
                        {this.state.name}
                    </div>

                </div>
                <div className="find">
                    <div>美食</div>
                    <div>筛选</div>
                </div>
                {this.state.details.map((item, i) => {
                    return (
                        <Link to={"/dpde/" + item.id + "?" + this.state.a}  key={i}>
                            <div className="conor">
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
                        </Link>
                    )
                })}
            </div>
        )
    }
}