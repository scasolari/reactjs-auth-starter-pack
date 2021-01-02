import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../utils/actions';

class NavigationBar extends Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        );

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        );

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Auth App</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        {this.props.auth ? userLinks : guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.isAuthenticated
    };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
