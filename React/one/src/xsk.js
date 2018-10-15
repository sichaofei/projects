import React, { Component } from 'react';
import './xsk.css';
export default class xsks extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
            list: [1, 2, 3, 4]
        }
    }
    componentDidMount() {
        this.acs("index", 0)
        console.log(this.props)
    }
    componentWillReceiveProps() {
        console.log(this.props)
    }
    shouldComponentUpdate(newProps, newState) {
        console.log(this.props)
        return true
    }
    componentDidUpdate() {
        console.log(this.props)
    }
    acs(index, type) {
        var div = document.querySelectorAll(".box>div")
        var li = document.querySelectorAll("li")
        var list = Array.from(div)
        var li = Array.from(li)
        for (var a = 0; a < list.length; a++) {
            list[a].className = ""
            li[a].className = ""
        }
        if (type == 0) {
            list[0].className = "active"
            li[0].className = "actives"
        } else {
            list[index].className = "active"
            li[index].className = "actives"
        }
    }
    change(index) {
        this.acs(index, 'all')
    }
    render() {
        return (
            <div className="boc">
                <p>{this.props.name}</p>
                <ul className="header">
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index} onClick={this.change.bind(this, index)} >{item}</li>
                        )
                    })}
                </ul>
                <div className="box">
                    {this.state.list.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })}
                </div>
            </div>
        )
    }

}