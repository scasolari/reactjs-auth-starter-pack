import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../utils/actions';
import NavigationBar from "./_navigationbar";

class Welcome extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1>Welcome</h1>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.isAuthenticated
    };
}
export default connect(mapStateToProps, {logout})(Welcome);
