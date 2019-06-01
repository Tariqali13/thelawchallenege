import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {data} from '../../AllData/Stackdata';
class Stacks extends Component {
    data=data;
    render() {
        let response = this.data.map((value, index) => {
            return (
                <div className='Stacks' key={index}>
                    <div className='Stackimage'>
                        <img src={require(`../../../assets/images/${value.images}.jpg`)} alt=""></img>
                        <div className="Stack_color"  style={{background:value.color}}></div>
                        <div className='Overflow_div'>
                            <h4>{value.h1}</h4>
                            <div className="line"></div>
                            <p> 
                            {value.para.map((item,index) => {
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
            <div className='stackmain'>
                {response}
            </div>
        )
    };
}

export default Stacks;