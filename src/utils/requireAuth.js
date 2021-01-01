import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(ComponentToBeRendered) {

    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.props.history.push('/login');
            }
        }

        render() {
            return (
                <ComponentToBeRendered {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.isAuthenticated
        };
    }

    return withRouter(connect(mapStateToProps)(Authenticate));
}
