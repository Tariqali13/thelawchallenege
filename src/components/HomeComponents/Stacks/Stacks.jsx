import React, { Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../../AllData/Stackdata";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
class Stacks extends Component {
  state = {
    data: data
  };
  render() {
    let response = this.state.data.map((value, index) => {
      return (
        <div className="Stacks" key={index}>
          <div className="Stackimage">
            <LazyLoadImage
              alt="Stack Background"
              effect="blur"
              src={require(`../../../assets/images/${value.images}.jpg`)}
            //   beforeLoad={require("../../assets/images/loader.gif")}
            />

            <div
              className="Stack_color"
              style={{ background: value.color }}
            ></div>
            <div className="Overflow_div">
              <h4>{value.h1}</h4>
              <div className="line"></div>
              <p>
                {value.para.map((item, index) => {
                  return (
                    <span className="rewards_points" key={index}>
                      {item.p1}
                    </span>
                  );
                })}
                {value.p}
                <br></br>
                <Link to={value.to} className="Stack_read">
                  {value.btnvalue}
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    });
    return <div className="stackmain">{response}</div>;
  }
}

export default Stacks;
