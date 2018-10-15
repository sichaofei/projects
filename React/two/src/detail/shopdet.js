import React, { Component } from 'react'
import '../shopdet.scss'
import { Link } from 'react-router-dom'
export default class Fd extends Component {
    constructor() {
        super(),
            this.state = {
                id: "",
                img: "",
                name: ""
            }
    }
    componentWillMount() {
        console.log(this.props)
        let arr = this.props.location.search.split("/")
        console.log(arr)
        let id = arr[0].slice(1)
        console.log(id)
        let img = arr[1].split("&")[0]
        console.log(img)
        console.log(arr[1].split("&")[1])
        let name = arr[1].split("&")[1].split("=")[1]
        console.log(name)
        this.setState({
            id: id
        })
        this.setState({
            img: img
        })
        this.setState({
            name: name
        })
    }
    render() {
        return (
            <div className="Det">
                <div className="head">
                    <div className="left">
                        <Link to={"/shop/" + this.state.id + "?" + this.props.match.params.geohash}> &lt;</Link>
                    </div>
                    <div className="right">
                        {this.state.name}
                    </div>
                </div>
                <div className="con">
                    <img src={"http://cangdu.org:8001/img/" + this.state.img}/>
                </div>
                </div>
                )
            }
}