import React, { Component } from 'react';
import { data } from '../../AllData/WhoweareData';
class WhoWeAre extends Component {
    state={
        data : data,

    }
    render() {
        let response = this.state.data.map((value, index) => {
            return (
                <span className='bullet_points' key={index}>{value.span}</span>
            )
        })
        return (

            <div className='Comp_intro'>
                <div className='heading'>
                    <div className='design'></div>
                    <h3>Who We Are</h3>
                    <div className='design'></div>
                </div>
                <div className='info'>
                    <p>The Law Challenge is an educational quiz platform initiative aimed at strengthening the connections within, and between the legal, business 	community and society.<br></br>The Law Challenge is also aimed at: -
                            {response}
                    </p>
                    <p>Winners of the Challenge, with the support from the project organizers, will provide legal aid services to support pro bono clinics for deprived charities.</p>
                </div>
            </div>

        )
    }
}

export default WhoWeAre;