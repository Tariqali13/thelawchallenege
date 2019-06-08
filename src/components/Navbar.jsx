import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {

    render() {
        // console.log(logo)
        return (
            <header className="container-fluid header main_nav">
                <nav className="navbar navbar-expand-md navbar-dark bg-faded custon_nav">
                <div className="custom_brand">
                    <Link className="navbar-brand " to="/">
                        <img className="img" src={require('../assets/images/logo.png')} alt="logo here" width="120px"
                            height="120px" />
                    </Link>
                    </div>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon custom-toggler"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-items custom_navitem ">
                                <Link to='/' className="nav-link custom_navbar custom_active">HOME</Link>
                            </li>
                            <li className="nav-items custom_navitem ">
                                <Link to='/About' className="nav-link  custom_navbar  " >ABOUT</Link>
                            </li>
                            <li className="nav-items custom_navitem">
                                <Link to="/News"className="nav-link custom_navbar">NEWS</Link>
                            </li>
                            <li className="nav-items custom_navitem">
                                <Link  to="/Gallery"className="nav-link custom_navbar" href="index.html">GALLERY</Link>
                            </li>
                            <li className="nav-items  custom_navitem">
                                <Link to="/ContactUs"  className="nav-link  custom_navbar">CONTACT US</Link>
                            </li>
                            <li className="nav-items  custom_navitem">
                                <Link to="/Register"className="nav-link  custom_navbar smal_nav_menu">REGISTRATION</Link>
                            </li>
                            <li className="nav-items  custom_navitem">
                                <Link to="/Login" className="nav-link  custom_navbar smal_nav_menu">ADMIN LOGIN</Link>
                            </li>
                            {/* <li className="nav-items  custom_navitem">
                                <Link to="/Registeruser" className="nav-link  custom_navbar">Register</Link>
                            </li> */}

                        </ul>
                    </div>

                </nav>
            </header>
        );
    }
}

export default Navbar;