import React from 'react';
import { Link } from 'react-router-dom'

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
                            <p className="mails">
                                <p>mbankrah11@gmail.com</p>
                                <p>glawchallenge19@gmail.com</p>
                            </p>
                        </div>

                    </address>
                    <div className="aboutUs_icons">
                        <h4>Upcomming News</h4>

                    </div>

                    <div className="aboutUs_icons">
                        <h4>Subscribe Us</h4>
                        <div className="social_icons">
                            <a target="_black" href="https://www.facebook.com/thelawchallenge"><i className="fab fa-facebook-f"></i></a>
                            <a target="_black" href="https://www.instagram.com/thelawchallengeghana/"><i className="fab fa-instagram"></i></a>
                            <a target="_black" href="https://www.linkedin.com/showcase/thelawchallengeghana"><i className="fab fa-linkedin-in"></i></a>
                            <a target="_black" href="https://twitter.com/thelawchallenge"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    THE LAW CHALLENGE GHANA &copy; 2019
            </div>
            </footer>

        </section>
    );
}

export default Footer;