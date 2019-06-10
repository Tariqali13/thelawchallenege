import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { data } from '../AllData/AboutData';
import { data2 } from '../AllData/AboutData';


class About extends Component {
    state = {
        data: data,
        data2: data2,
    }

    render() {
        let response = this.state.data.map((value, index) => {
            return (
                <div className='about_datils' key={index}>
                    <div className='heading2'>
                        <h3>{value.heading}</h3>
                        <div className='design3'></div>
                    </div>
                    <div className='info'>
                    <p>
                        {value.detail}
                        {value.para.map((item, index) => {
                            return <span className='bullet_points2' key={index}>{item.p1}</span>
                        })}
                    </p>
                    </div>
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
                <div className='Banner3'>
                    <div className='Banner_main'>
                        <h1>About Us</h1>
                    </div>
                </div>
                <div >
                    <div className='about_divider'>
                        <div className="about_data main_para2">
                            {response}
                        </div>
                        <div className="About_sidebar">
                            {response2}
                        </div>
                    </div>
                    <div className='Banner3'>
                    <div className='Banner_main'>
                        <h1>Non-Disclosure</h1>
                        <p className="disclouser_para">All information contained in this proposal is confidential and recipient is not 	entitled to use, reproduce or share it with any other third party without the consent of the initiator unless to evaluate it internally for decision making. </p>
                    </div>
                </div>
                </div>
                <Footer/>
            </section>
        );
    }
}

export default About;