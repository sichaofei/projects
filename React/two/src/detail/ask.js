import React, { Component } from 'react'
import $ from 'jquery'
import "../ask.scss"
export default class Ask extends Component {
    constructor() {
        super(),
            this.state = {
                ser: [],
                fen: {},
                show: "block"
            }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        console.log(id)
        $.ajax({
            url: "http://cangdu.org:8001/ugc/v2/restaurants/" + id + "/ratings?offset=0&limit=10",
            type: "get",
            success: res => {
                console.log(res)
                this.setState({ ser: res })
            }
        })
        $.ajax({
            url: "http://cangdu.org:8001/ugc/v2/restaurants/" + id + "/ratings/scores",
            type: "get",
            success: res => {
                console.log(res)
                this.setState({
                    fen: res
                }, () => {
                    this.setState({
                        show: "none"
                    })
                })
            }
        })
    }
    render() {
        return (
            <div className="ask">
                <div className="loading" style={{ display: this.state.show }}><i className="el-icon-loading"></i></div>
                <div className="heads">
                    <div className="left">
                        <span> {Math.ceil(this.state.fen.overall_score * 10) / 10}</span>
                        <p>综合评价</p>
                        <b>高于周边商家 <span>{Math.ceil(this.state.fen.compare_rating * 100)}%</span> </b>
                    </div>
                    <div className="right">
                        <p>服务态度<span>{Math.ceil(this.state.fen.service_score * 10) / 10}</span></p>
                        <p>菜品评价<span>{Math.ceil(this.state.fen.food_score * 10) / 10}</span></p>
                        <p>送达时间  <span>{this.state.fen.deliver_time}</span>  分钟</p>

                    </div>
                </div>
                <ul>
                    {this.state.ser.map((val, index) => {
                        return <li key={index}>
                            {val.item_ratings.map((item, i) => {
                                return <img key={i} src={"https://fuss10.elemecdn.com/" + item.image_hash} alt="" />
                            })}
                            <p>{val.username} <span>{val.rated_at}</span> </p>
                            <span>{val.time_spent_desc}</span>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}