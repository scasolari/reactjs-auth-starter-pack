import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import requireAuth from './utils/requireAuth'
import Login from "./pages/_login";
import Welcome from "./pages/_welcome";
import Logout from "./pages/_logout";

export default class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/logout' component={requireAuth(Logout)} />
                        <Route path='/welcome' component={requireAuth(Welcome)} />
                        <Route render={() => (<Redirect to="/welcome" />)} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
