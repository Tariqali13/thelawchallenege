import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactUsForm from './ContactUsForm';
import { data } from '../AllData/ContactData';

class ContactUs extends Component {
    state = {
        data: data
    }
    render() {
        let response = this.state.data.map((value, index) => {
            return (
                <div className='stacks2' key={index}>
                    <div className='Stackimage2'>
                        <img src={require(`../../assets/images/${value.images}.jpg`)} alt=""></img>
                        <div className="Stack_color" style={{ background: value.color }}></div>
                        <div className='Overflow_div'>
                            <h4>{value.h1}</h4>
                            <div className="line"></div>
                            <p>
                                {value.para.map((item, index) => {
                                    return <span className='rewards_points' key={index}>{item.p1}</span>
                                })}
                                {value.p}<br></br><Link to={value.to} className='Stack_read'>{value.btnvalue}</Link>
                            </p>

                        </div>
                    </div>
                </div>
            )
        })
        return (
            <section>
                <Navbar />



                <div className="contact_datils">
                    <div className='contact_divider'>
                        <div className="contact_data ">
                            <div className='heading2'>
                                <h3>Contact US</h3>
                                <div className='design3'></div>
                            </div>
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15883.91197156854!2d-0.1970813!3d5.5702712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x38936ef85293e59!2sSwiss+Spirit+Hotel+%26+Suites+Alisa+Accra!5e0!3m2!1sen!2s!4v1557829074784!5m2!1sen!2s" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className='heading2'>
                                <h5>Get In Touch with the organizers of The Law Challenge</h5>
                                <p>(PRIMETIME GHANA) for all your inquiries</p>
                                <div className='design4'></div>
                            </div>
                           
                            <ContactUsForm />
                        </div>
                        <div className="contact_sidebar">
                        
                            {response}
                        </div>
                    </div>
                </div>






                <Footer />

            </section>
        );
    }
}

export default ContactUs;