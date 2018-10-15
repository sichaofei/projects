import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import Nav from './city/nav'
import City from './city/city'
import Login from './login/login'
import Home from './home/home'
import Foot from './home/foot'
import Search from './search/search'
import navDetail from './detail/navde'
import Dpde from './detail/dpde'
import $ from 'jquery'
import Dd from './my/dingdan'
import Me from './my/me'
import Fd from './detail/shopdet'
class App extends Component {
    render() {
        return (
            <div className="box">
                <Router>
                    <div>
                        <Route exact path="/" component={Nav} />
                        <Route path="/city/:id" component={City} />
                        <Route path="/login" component={Login} />
                        <Route path="/home/:geohash" component={Home} />
                        <Route path="/navDetail/:id" component={navDetail} />
                        <Route path="/search/:id" component={Search} />
                        <Route path="/dpde/:id" component={Dpde} />
                        <Route path="/shop/:id" component={Dpde} />
                        <Route path="/ask/:id" component={Dpde} />
                        <Route path="/shops/:id" component={Dd} />
                        <Route path="/my/:id" component={Me} />
                        <Route path="/fooddetail/:geohash" component={Fd} />
                        {/* <Route path="/search" component={Foot} /> */}
                    </div>

                </Router>

            </div>
        )
    }
}

export default App;
