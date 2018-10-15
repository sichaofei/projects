import React, { Component } from 'react'
import Head from './head'
import Nav from './nav'
// import Homecon from './Honecon'
import Foot from './foot'
import '../home.scss'
import $ from 'jquery'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    constructor() {
        super(),
            this.state = {
                hash: {},
                Conarr: [],
                ha: "",
                show: "block"
            }
    }
    componentWillMount() {

    }
    // 获取城市通过props传给head、
    componentDidMount() {

        console.log(this.props.match.params.geohash)
        this.setState({
            ha: this.props.match.params.geohash
        })
        $.ajax({
            url: "http://cangdu.org:8001/v2/pois/" + this.props.match.params.geohash,
            dataType: "json",
            success: res => {
                this.setState({ hash: res })
                console.log(this.state.hash)
            }
        })

        $.ajax({
            url: "http://cangdu.org:8001/shopping/restaurants?latitude=" + this.state.hash.latitude + "&longitude=" + this.state.hash.longitude,
            dataType: "json",
            type: "get",
            async: true,
            success: res => {
                console.log(res);
                this.setState({
                    Conarr: res
                }, () => {
                    this.setState({
                        show: "none"
                    })
                })
                // console.log(this.state.Conarr);
            }
        })
    }

    render() {
        return (
            <div>
                <div className="loading" style={{ display: this.state.show }}><i className="el-icon-loading"></i></div>
                <Head hashs={this.state.hash} />
                <Nav hashs={this.state.ha} />
                {this.state.Conarr.map((item, i) => {
                    <p className="conp"><i className="el-icon-goods"></i>附近商家</p>
                    return <Link to={"/dpde/" + item.id + "?" + this.props.match.params.geohash} key={i}>
                        <div className="Homecon" key={i}>

                            <div className="conor" key={i}>
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
                <Foot hashs={this.state.ha} />
            </div>
        )
    }
}