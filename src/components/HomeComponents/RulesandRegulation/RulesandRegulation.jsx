import React, { Component } from "react";
import { data } from '../../AllData/Rulesdata';

class Rules extends Component {
  data = data;
  state = {
    isHidden: true,
    id: 0,
  };
  handleClick = e => {
    this.setState({
      isHidden: !this.state.isHidden,
      id: e.target.id,
    });
  };

  render() {
    var minStyles = {

      hstyle: {
        height: "20em",
      },
      hhstyle: {
        height: "0em",
      },
    }
    var maxStyles = {

      hstyle: {
        height: "16em",
      },
      hhstyle: {
        height: "0em",
      }

    };

    var style = function () {
      if (window.innerWidth < 800) {
        return minStyles;
      } else {
        return maxStyles;
      }
    }
    let response = this.data.map((item, index) => {
      return (
        <div className="all_rules" key={index}>
          <div className="rules">
            <p
              className="bullet_heading"
              onClick={this.handleClick}
              style={
                (this.state.id == index)
                  ? { background: "rgba(9, 23, 102, 1)" }
                  : { background: "lightgrey" }
              }
              id={index}
            >
              {item.heading}
            </p>
            <div
              className="all_span"
              style={
                (this.state.id == index)
                  ? style().hstyle
                  : style().hhstyle
              }
            >

              {item.para.map((value, index) => {
                return <span className="bullet_heading_desc" key={index}>{value.p1}</span>
              })}

            </div>
          </div>
        </div>
      );
    });

    return (
     
          <div className="Rule_section">
            <div className="heading">
              <div className="design2" />
              <h3>Format of Competition</h3>
              <div className="design2" />
            </div>
            {response}
          </div>

    );
  }
}

export default Rules;
