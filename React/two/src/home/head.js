import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Head extends Component {
    componentDidMount(){
        console.log(localStorage.getItem("name"))
    }
    render() {
        return (
            <div className="head">
                <div className="headcon">
                    <Link to={"/search/" + this.props.hashs.geohash}> <i className="el-icon-search"></i></Link>
                    <p>{this.props.hashs.address}</p>
                    <span> <Link to="/login">{localStorage.getItem("name") === "" ? "登录|注册" :localStorage.getItem("name")} </Link></span>
                </div>
            </div>
        )
    }
}