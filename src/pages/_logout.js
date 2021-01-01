import React, { Component } from 'react';
import { logout } from '../utils/actions';
import { connect } from "react-redux";

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
        this.props.history.push('/');
    }
    render() {
        return <div/>
    }
}
function mapStateToProps(state) {
    return {
        auth: state.isAuthenticated
    };
}
export default connect(mapStateToProps, {logout})(Logout);
