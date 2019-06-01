import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (

        <section>
            <footer className="mainfooter" id="footer">
                <br />
                <div className="address">
                    <div className="aboutUs">
                        <h4>About Us</h4>
                        <p>The Law Challenge Ghana is an initiative of Touchworld Financial and Investment Consult, a company limited by shares
                            incorporated in Ghana since 2012. Its business object among other things is to provide Accounting and Taxation services;
                            Credit Management and Risk Management services; Fraud Investigation services and training and consultancy services

                        </p>
                    </div>
                    <address className="adressing">
                        <div className="add"><i className="fa fa-user"></i>
                            <p>Moses Ansah Barnor Ankrah (Rev.)<br />(Project Consultant)</p>

                        </div>
                        <div className="add"> <i className="material-icons">phone</i>
                            <p>+233-244624425<br /> +233-244386029</p>
                        </div>
                        <div className="add"> <i className="fa fa-envelope" ></i>
                            <p>mbankrah11 @gmail.com</p>
                        </div>

                    </address>

                    <div className="aboutUs_icons">
                        <h4>Subscribe Us</h4>
                        <div className="social_icons">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    THE LAW CHALLENGE GHANA &copy; 2019-ARIES DEVELOPERS
            </div>
            </footer>

        </section>
    );
}

export default Footer;