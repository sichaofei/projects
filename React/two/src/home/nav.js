import React, { Component } from 'react'
import $ from 'jquery'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { Link } from 'react-router-dom'
// import {Link , Route} from 'react-router-dom'
export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Navarr: []
        }
    }
    componentDidMount() {

        $.ajax({
            url: "http://cangdu.org:8001/v2/index_entry",
            datatype: "json",
            success: res => {
                console.log(res)
                this.setState({
                    Navarr: res
                })
                // console.log(this.state.Navarr);

            }
        })
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            slidesPerColumn: 2,
            loop: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render() {
        const list = this.state.Navarr.map((item, i) =>
            <div key={i} className="swiper-slide">
                <div className="Navcon">
                    <div className="Navimg">
                        <Link to={'/navDetail/' + item.id + "?" + this.props.hashs+"/"+item.title}>
                            <img alt="" src={"https://fuss10.elemecdn.com" + item.image_url} />
                        </Link>
                    </div>
                    <span>{item.title}</span>
                </div>
            </div>

        )
        return (
            <div>
                <div className="Nav">
                    <div className="swiper-container" ref="aa">
                        <div className="swiper-wrapper">
                            {list}
                        </div>
                    </div>
                </div>
                <div className="border"></div>
            </div>

        )
    }
}