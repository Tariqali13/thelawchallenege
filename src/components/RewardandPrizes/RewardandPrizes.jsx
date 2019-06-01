import React, { Component } from 'react';
import  {Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { data } from '../AllData/RewardsandPrizesData';
import { data2 } from '../AllData/RewardsandPrizesData';

class RewardandPrizes extends Component {
    state = {
        data: data,
        data2:data2
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
                <div className='Banner5'>
                    <div className='Banner_main'>
                        <h1>Rewards and Prizes</h1>
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

                <Footer />

            </section>
        );
    }
}

export default RewardandPrizes;