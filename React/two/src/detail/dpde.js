import React, { Component } from 'react'
import $ from 'jquery'
import '../dpde.scss'
import Shop from './shop'
import Ask from './ask'
import { HashRouter as Router, Link, Route, NavLink } from 'react-router-dom'
export default class Dpde extends Component {
    constructor() {
        super()
        this.state = {
            det: {},
            img: "",
            ges: "",
            id: "",
            show: "block"
        }
    }
    //    shouldComponentUpdate(){
    //     this.setState({
    //         shops: JSON.parse(localStorage.getItem("loop"))
    //     })

    //    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.setState({
            id: id
        })
        let ges = this.props.location.search.slice(1)
        this.setState({
            ges: ges
        })
        // // 获取本地购物车数据
        // this.setState({
        //     shops: JSON.parse(localStorage.getItem("loop"))
        // })
        // {
        //     this.state.shops.map((val, index) => {

        //     })
        // }
        $.ajax({
            url: "http://cangdu.org:8001/shopping/restaurant/" + id,
            type: "get",
            success: res => {
                console.log(res)
                this.setState({
                    det: res
                })
                this.setState({
                    img: res.image_path
                })

            }

        })
    }
    render() {
        return (
            <div className="dpde">
                
                <div className="header" style={{ 'backgroundImage': 'http://cangdu.org:8001/img/' + this.state.img }}>
                    <span> <Link to={"/home/" + this.state.ges}>&lt;</Link> </span>

                    <div className="left">
                        <img src={'http://cangdu.org:8001/img/' + this.state.img} alt="" />
                    </div>
                    <div className="right">
                        <h5>{this.state.det.name}</h5>
                        <p>商家配送/分钟速达/配送费约￥5</p>
                        <p>公告：{this.state.det.promotion_info}</p>
                    </div>
                </div>
                <div className="nav">
                    <div> <NavLink activeClassName="actives" exact to={"/dpde/" + this.state.id + "?" + this.state.ges}> 商品</NavLink></div>
                    <div><NavLink activeClassName="actives" to={"/ask/" + this.state.id + "?" + this.state.ges}> 评价</NavLink></div>
                </div>
                <div className="con">
                    <Route path="/dpde/:id" component={Shop} />
                    <Route path="/ask/:id" component={Ask} />
                </div>

            </div>
        )
    }
}