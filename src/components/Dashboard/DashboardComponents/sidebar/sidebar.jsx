import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../Store/Actions/Action';
import { withRouter } from 'react-router-dom';
class Sidebar extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {}
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <li  onClick={this.onLogout.bind(this)}><Link to="/login"><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Log out</span></Link></li>
           
        )
        const guestLinks = (
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Log Out</Link>
                </li>
              
        )
        return (
            <div className="sidemain">
                <div className="container-fluid display-table">
                    <div className="row display-table-row">
                        <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                            <div className="logo">
                                <img src={require('../../../../assets/images/logo.png')} alt="merkery_logo" className="visible-xs visible-sm circle-logo" />
                            </div>
                            <div className="navi">
                                <nav className="navbar navbar-expand-md">
                                    <ul>
                                        <li className="active"><Link to="/Dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></Link></li>
                                        <li><Link to="/UserReg"><i className="fa fa-users" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users Registered</span></Link></li>
                                        <li><Link to="DashboardGallery"><i className="fa fa-image" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Gallery</span></Link></li>
                                        <li><Link to="DashboardNews"><i className="far fa-newspaper" aria-hidden="true"></i><span className="hidden-xs hidden-sm">News</span></Link></li>
                                        <li><Link to="/DashboardMails"><i className="fas fa-envelope" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Mails</span></Link></li>
                                        {isAuthenticated ? authLinks : guestLinks}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}
Sidebar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Sidebar));