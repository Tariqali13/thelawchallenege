import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
class Navbar extends Component {
state={}
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
                            <li className="nav-items custom_navitem " >
                                <NavLink to='/Home' className="nav-link custom_navbar" activeClassName="active">HOME</NavLink>
                            </li>
                            <li className="nav-items custom_navitem ">
                                <NavLink to='/About' className="nav-link  custom_navbar " activeClassName="active" >ABOUT</NavLink>
                            </li>
                            <li className="nav-items custom_navitem">
                                <NavLink to="/News" className="nav-link custom_navbar" activeClassName="active">NEWS</NavLink>
                            </li>
                            <li className="nav-items custom_navitem">
                                <NavLink to="/Gallery" className="nav-link custom_navbar" activeClassName="active">GALLERY</NavLink>
                            </li>
                            <li className="nav-items  custom_navitem">
                                <NavLink to="/ContactUs" className="nav-link  custom_navbar" activeClassName="active">CONTACT US</NavLink>
                            </li>
                            <li className="nav-items  custom_navitem">
                                <NavLink to="/Register" className="nav-link  custom_navbar smal_nav_menu" activeClassName="active">REGISTRATION</NavLink>
                            </li>
                            <li className="nav-items  custom_navitem">
                                <NavLink to="/Login" className="nav-link  custom_navbar smal_nav_menu" activeClassName="active">ADMIN LOGIN</NavLink>
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