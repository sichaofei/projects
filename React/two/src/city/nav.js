import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
export default class Nav extends Component {
    constructor(props) {
        super(props),
            this.state = {
                hot: [],
                guess: {},
                group: [],
                groups: []
            }
    }

    componentWillMount() {
       
        let _this = this
        $.ajax({
            url: "http://cangdu.org:8001/v1/cities?type=hot",
            type: "get",
            dataType: "json",
            success: function (res) {

                _this.setState({ hot: res })
            }
        })
        $.ajax({
            url: "http://cangdu.org:8001/v1/cities?type=guess",
            type: "get",
            dataType: "json",
            success: function (res) {
                console.log(res)
                _this.setState({ guess: res })
            }
        })
        $.ajax({
            url: "http://cangdu.org:8001/v1/cities?type=group",
            type: "get",
            dataType: "json",
            success: function (res) {
                    console.log(res)
                let arr = []
                let arr1 = Object.keys(res).sort()
                for (var i in arr1) {
                    arr.push(res[arr1[i]])
                }
                _this.setState({
                    group: arr
                }, () => {
                    _this.setState({
                        groups: arr1
                    })
                })
            }
        })
    }
    render() {
        return (
            <div className="navs">
                <div className="header">
                    <div className="left">elem</div>
                    <div className="right"> <Link to="/login">登录/注册</Link></div>
                </div>
                <div className="city">
                    <div className="header">
                        <p>当前定位城市: <span>定位不准时请在城市列表中选择</span></p>
                        <p><Link to={"/city/" + this.state.guess.id}> {this.state.guess.name}</Link></p>
                    </div>
                    <div className="hotcity">
                        <p>热门城市</p>
                        {this.state.hot.map((val, index) => {
                            return <div key={index}><Link to={"/city/" + val.id + "?" + val.name}> {val.name}</Link></div>
                        })}
                    </div>
                    <div className="group">
                        {
                            this.state.groups.map((item, key) => {
                                return (
                                    <div className="groups" key={key}>
                                        <p>{item}</p>
                                        {
                                            this.state.group[key].map((val, index) => {
                                                return (

                                                    <div key={index}><Link to={"/city/" + val.id + "?" + val.name} all={this.state.groups}>{val.name}</Link>  </div>

                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}