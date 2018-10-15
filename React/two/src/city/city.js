import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../cs.css'
import $ from 'jquery'
export default class City extends Component {
    constructor(props) {
        super(props),
            this.state = {
                cs: "",
                list: []
            }
    }
    enter(e) {
        if (e.keyCode == 13) {
            this.btn()
        }

    }
    btn() {
        let val = this.refs.vals.value
        let id = this.props.match.params.id
        console.log(id)
        let _this = this
        $.ajax({
            url: "http://cangdu.org:8001/v1/pois?city_id=" + id + "&keyword=" + val,
            type: "get",
            success: function (res) {
                console.log(res)
                if (val == "") {
                    alert("不能为空")
                } else {
                    if (res.length == 0) {
                        alert("亲，对不住了没有搜到")
                    } else {
                        _this.setState({
                            list: res
                        })
                    }

                }

            }
        })
        this.refs.vals.value = ""
    }
    componentDidMount() {
        let nam = this.props.location.search.slice(1)
        this.setState({ cs: nam })

    }
    render() {
        return (
            <div className="cs">
                <div className="header">
                    <div className="left">
                        <Link to="/"> &lt;</Link>
                    </div>
                    <div className="center"> {this.state.cs}</div>
                    <div className="right">
                        <Link to="/"> 切换城市</Link>
                    </div>
                </div>
                <div className="nav">
                    <input type="text" placeholder="输入学校，商务楼，地址" ref="vals" onKeyUp={this.enter.bind(this)} />
                    <br />
                    <button onClick={this.btn.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.state.list.map((val, index) => {
                        return <li>
                            <Link to={"/home/" + val.geohash}>
                                <p>{val.name}</p>
                                <span>{val.address}</span>
                            </Link>
                        </li>
                    })}

                </ul>
            </div>
        )
    }
}