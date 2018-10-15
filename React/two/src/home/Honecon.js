// import React, { Component } from 'react'
// import $ from 'jquery'
// import { Link } from 'react-router-dom'
// export default class Homecon extends Component {
//     constructor() {
//         super()
//         this.state = {
//             Conarr: [],
//             hash: {},
//             a: "",
//             b: "",
//             d: []
//         }
//     }
//     // componentDidUpdate() {
//     //     let a = this.props.hashs.latitude
//     //     let b = this.props.hashs.longitude
//     //     this.setState({ a: a })
//     //     this.setState({ b: b })
//     //     console.log(a)
//     //     console.log(b)
//     // }
//     // cun(e) {
//     //     this.setState({

//     //     })
//     //     this.state.d.push(e)
//     //     console.log(this.state.d)
//     // }
//     componentWillReceiveProps() {
//         console.log(this.props.hashs)
//         let a = this.props.hashs.latitude
//         let b = this.props.hashs.longitude
//         this.setState({ a: a })
//         this.setState({ b: b })
//     }
//     componentDidMount() {
//         console.log(this.props)
//         $.ajax({
//             url: "http://cangdu.org:8001/shopping/restaurants?latitude=" + this.state.a + "&longitude=" + this.state.b,
//             datatype: "json",
//             success: res => {
//                 console.log(res);
//                 this.setState({
//                     Conarr: res
//                 })
//                 // console.log(this.state.Conarr);
//             }
//         })
//     }
//     render() {
//         return (
//             <div className="Homecon">

//                 <p className="conp"><i className="el-icon-goods"></i>附近商家</p>
//                 {this.state.details.map((item, i) => {
//                     return (
//                         <Link to={"/Dpde/" + item.id}>
//                             <div className="conor" key={i}>
//                                 <div className="Conimg">
//                                     <img data-v-2cf4efc6 src={'/img/' + item.image_path} />
//                                 </div>
//                                 <div className="conzi">
//                                     <div className="zilf">
//                                         <p className="lfp1">
//                                             <span className="span1">品牌</span>&nbsp;&nbsp;
//                                     <b>{item.name}</b>
//                                         </p>
//                                         <p className="lfp2">
//                                             <span className="span2">评价分{item.rating}</span>&nbsp;&nbsp;
//                                     <span className="span3">月售{item.recent_order_num}单</span>
//                                         </p>
//                                         <span className="span4">
//                                             ￥{item.float_minimum_order_amount}起送 /&nbsp;&nbsp;
//                                     配送费约￥{item.float_delivery_fee}
//                                         </span>
//                                     </div>
//                                     <div className="zirh">
//                                         <span className="span1">保 准 票</span>
//                                         <p>
//                                             <span className="span2">蜂鸟专送</span>
//                                             <span className="span3">准时达</span>
//                                         </p>
//                                         <p className="rhp">
//                                             <span className="span4">{item.distance}</span>
//                                             <span className="span5">{item.order_lead_time}</span>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     )
//                 })}
//             </div>
//         )
//     }
// }
