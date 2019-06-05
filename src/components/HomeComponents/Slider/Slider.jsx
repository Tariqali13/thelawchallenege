import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import { data } from '../../AllData/SliderData';

class Slider extends Component {
    data = data;
    state = {
        index: 0,
        direction: null,
    };

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }
    render() {
        let response = this.data.map((value, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={require(`../../../assets/images/${value.images}.jpg`)}
                        alt="First slide"
                    />

                </Carousel.Item>
            )
        })
        return (
            <div className="Slider_flex">
                <div className="Sponsoradds">
                    <h3>Our Sponsors</h3>
                    <a href="https://websystechnology.org/" target="_blank"><img className="Sponsors_image" src={require('../../../assets/images/sponsor.jpeg')} /></a>
                    <a href="https://websystechnology.org/" target="_blank"><img className="Sponsors_image" src={require('../../../assets/images/sponsor.jpeg')} /></a>
                    <a href="https://websystechnology.org/" target="_blank"><img className="Sponsors_image" src={require('../../../assets/images/sponsor.jpeg')} /></a>
                </div>
                <div className="slider">
                    <Carousel
                        activeIndex={this.state.index}
                        direction={this.state.direction}
                        onSelect={this.handleSelect}
                    >

                        {response}

                    </Carousel>
                </div>
                <div className="Sponsoradds">
                    <h3>Our Sponsors</h3>

                    <a href="https://websystechnology.org/" target="_blank"><img className="Sponsors_image" src={require('../../../assets/images/sponsor.jpeg')} /></a>
                    <a href="https://websystechnology.org/" target="_blank"><img className="Sponsors_image" src={require('../../../assets/images/sponsor.jpeg')} /></a>
                    <a href="https://websystechnology.org/" target="_blank"><img className="Sponsors_image" src={require('../../../assets/images/sponsor.jpeg')} /></a>
                </div>
            </div>
        )
    };
}

export default Slider;
// render(<ControlledCarousel />);