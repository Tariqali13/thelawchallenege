import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../../Store/Actions/Action';
import { withRouter } from 'react-router-dom';
class DashboardHeader extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {}
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <li onClick={this.onLogout.bind(this)}><Link to="/login"><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Log out</span></Link></li>

        )
        const guestLinks = (
            <li className="nav-item">
                <Link className="nav-link" to="/login">Log Out</Link>
            </li>

        )
        return (
            <div className="dashboard_header">
                <nav className="navbar  navbar-expand-md custom-navbar navbar-light">
                    <div className="dash_head text-primary mr-5"><h1 >The LAW Challenge</h1></div>
                    <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse  ml-5  " id="collapsibleNavbar">


                        <div className="navi mobile_nav_dashboard">
                                <ul >
                                    <li className="active"><Link to="/Dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></Link></li>
                                    <li><Link to="/UserReg"><i className="fa fa-users" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users Registered</span></Link></li>
                                    <li><Link to="DashboardGallery"><i className="fa fa-image" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Gallery</span></Link></li>
                                    <li><Link to="DashboardNews"><i className="far fa-newspaper" aria-hidden="true"></i><span className="hidden-xs hidden-sm">News</span></Link></li>
                                    <li><Link to="/DashboardMails"><i className="fas fa-envelope" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Mails</span></Link></li>
                                    {isAuthenticated ? authLinks : guestLinks}
                                </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
DashboardHeader.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(DashboardHeader));