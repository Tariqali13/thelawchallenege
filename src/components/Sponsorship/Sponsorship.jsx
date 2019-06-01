import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { data } from '../AllData/SponsorshipData';
import { data2 } from '../AllData/SponsorshipData';
class Scholorship extends Component {
    state = {
        data: data,
        data2: data2
    }
    render() {
        let response = this.state.data.map((value, index) => {
            return (
                <div className='about_datils' key={index}>
                    <div className='heading2'>
                        <h3>{value.heading}</h3>
                        <div className='design3'></div>
                    </div>
                    <p>
                        {value.detail}
                        {value.para.map((item, index) => {
                            return <span className='bullet_points2' key={index}>{item.p1}</span>
                        })}
                    </p>
                </div>
            )
        })
        let response2 = this.state.data2.map((value, index) => {
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
                <div className='Banner4'>
                    <div className='Banner_main'>
                        <h1>Sponsorship Opportunities and Stated Benefits</h1>
                    </div>
                </div>
                <div className="contact_datils">
                    <div className='contact_divider'>
                        <div className="contact_data main_para2 ">
                            {response}
                        </div>
                        <div className="contact_sidebar">

                            {response2}
                        </div>
                    </div>
                </div>
                <div className='Banner4'>
                    <div className='Banner_main'>
                        <h1>Conclusion</h1>
                        <p className="disclouser_para">This is a guideline only. You may kindly contact us and we will be happy to meet with you to evolve as well as customize packages specifically for your company.
                            Thank you in anticipation of receiving a favourable response from your office whiles looking forward to a fruitful business relationship with your company/Organisation.
                        </p>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default Scholorship;