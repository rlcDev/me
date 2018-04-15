import React, { Component } from 'react';
import MyHeader from '../components/MyHeader/MyHeader'
import MyFooter from '../components/MyFooter/MyFooter'
import {routes} from '../components/MyHeader/Route/route'

import { BrowserRouter as Router, Switch } from 'react-router-dom'



class BasePage extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                    <MyHeader />
                    <Switch>
                        {routes()}
                    </Switch>
                    </div>
                </Router>
                <MyFooter />
            </div>
        );
    }

}
export default BasePage; 