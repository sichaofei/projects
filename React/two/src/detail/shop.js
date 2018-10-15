import React, { Component } from 'react'
// import  { AsyncStorage}from 'react-native'
import $ from 'jquery'
import '../shop.scss'
import { Link } from 'react-router-dom'
export default class Shop extends Component {
    constructor(props) {
        super(props),
            this.state = {
                shops: [],
                yuan: 20,
                show: false,
                loop: [],
                arr: [],
                prices: 0,
                peisong: 5,
                show: "block"
            }
    }
    componentDidMount() {
        this.price()
        let id = this.props.match.params.id
        this.setState({ arr: JSON.parse(localStorage.getItem("loop")) })
        $.ajax({
            url: "http://cangdu.org:8001/shopping/v2/menu?restaurant_id=" + id,
            type: "get",
            success: res => {
                console.log(res)
                this.setState({
                    shops: res
                }, () => {
                    this.setState({ show: "none" })
                })
            }
        })
    }
    huan(e) {
        //     console.log(e)
        //     let a = this.state.shops[e].foods.length
        //     let c = a + 1
        //     console.log(c)
    }
    // 获取购物车的价格
    price() {
        let prices = 0
        JSON.parse(localStorage.getItem("loop")).forEach((val, index) => {
            prices += Number(val.specfoods[0].price)
        })
        this.setState({ prices: prices })

    }
    cun(e) {
        let arr = JSON.parse(localStorage.getItem("loop"))
        console.log(e)
        arr.push(e)
        localStorage.setItem("loop", JSON.stringify(arr))
        this.setState({
            arr: arr
        }, () => {
            console.log(this.state.arr)
        })
        this.price()

    }
    render() {
        return (
            <div className="boc">
                <div className="loading" style={{ display: this.state.show }}><i className="el-icon-loading"></i></div>
                <div className="left">
                    <ul>
                        {this.state.shops.map((val, index) => {
                            return <li onClick={this.huan.bind(this, index)} key={index}>{val.name}</li>
                        })}
                    </ul>
                </div>
                <div className="right">
                    {this.state.shops.map((val, index) => {
                        return (

                            <div key={index}>
                                <p className="p" ><span> <a id={val.name}></a>{val.name}</span> {val.description}</p>
                                {val.foods.map((item, i) => {
                                    return <div className="shop" key={i}>
                                        <div className="left"> <Link to={"/fooddetail/" + this.props.location.search.slice(1) + "?" + this.props.match.params.id + "/" + item.image_path + "&name=" + item.name}><img src={'http://cangdu.org:8001/img/' + item.image_path} alt="" /></Link> </div>
                                        <div className="right">
                                            <h5> {item.name}</h5>
                                            <span>{item.description}</span>
                                            <p>{item.tips}好评率{item.satisfy_rate}</p>
                                            {/* <b>{item.activity.image_text}</b> */}
                                            {item.specfoods.map((item, i) => {
                                                if (i > 0) {
                                                    return
                                                }
                                                return <b key={i}>￥{item.price}起</b>
                                            })}
                                            <span></span> <button onClick={this.cun.bind(this, item)}>+</button>
                                            <div className="position" style={{ display: "none" }}>12</div>
                                        </div>

                                    </div>
                                })}
                            </div>

                        )
                    })}
                </div>
                <div className="Shopcar">

                    <div className="Cari">
                        <p>{this.state.arr.length}</p>
                        <i className="el-icon-error"></i>
                    </div>
                    <div className="Carcen">
                        <b>￥{this.state.prices}</b>
                        <span>配送费￥{this.state.peisong}</span>
                    </div>
                    {this.state.prices + 5 < 20 ? <div className="Carbtn">
                        还差￥20起送
                    </div> : <div className="Carbtn1">
                            <Link to={"/shops/" + this.props.location.search.slice(1)}>去结算
                            {this.state.prices + this.state.peisong}</Link>

                        </div>}


                </div>
            </div>
        )
    }
}