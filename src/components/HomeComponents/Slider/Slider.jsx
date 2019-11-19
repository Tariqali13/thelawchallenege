import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { data } from "../../AllData/SliderData";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import LazyLoad from "react-lazyload";
class Slider extends Component {
  data = data;
  state = {
    index: 0,
    direction: null
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };
  render() {
    let response = this.data.map((value, index) => {
      return (
        <Carousel.Item key={index}>
          <LazyLoad
             
            placeholder={
              <img  className="d-block w-100" src={require("../../../assets/images/largerload.gif")} />
            }
          >
            <img
              className="d-block w-100"
              src={require(`../../../assets/images/${value.images}.jpg`)}
            />
          </LazyLoad>
        </Carousel.Item>
      );
    });
    return (
      <div className="Slider_flex">
        <div className="Sponsoradds">
          <h3>Our Sponsors</h3>
          <a href="https://websystechnology.com" target="_blank">
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor1.jpeg")}
            />
          </a>
          <a href="#">
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor2.jpg")}
            />
          </a>
          <a href="#" >
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor3.jpeg")}
            />
          </a>
           <a href="#">
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor4.jpg")}
            />
          </a>
          <a href="#">
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor5.jpg")}
            />
          </a>
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

          <a href="#" >
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor6.jpg")}
            />
          </a>
          <a href="#" >
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor7.jpg")}
            />
          </a>
          <a href="#">
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor8.png")}
            />
          </a>
           <a href="#">
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor10.jpg")}
            />
          </a>
           <a href="#" >
            <img
              className="Sponsors_image"
              src={require("../../../assets/images/sponsor11.jpg")}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Slider;
// render(<ControlledCarousel />);
