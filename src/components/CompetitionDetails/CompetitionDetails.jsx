import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { data } from '../AllData/CompetitionDetailData';
import { data2 } from '../AllData/CompetitionDetailData';
import { data3 } from '../AllData/CompetitionDetailData';

class CompetitionDetails extends Component {
  data = data;
  data2 = data2;
  data3 = data3;
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
        height: "auto",
        transition: "all .5s"
      },
      hhstyle: {
        height: "0em",
        transition: "all .5s"
      },
    }
    var maxStyles = {

      hstyle: {
        height: "auto",
        transition: "all .5s"
      },
      hhstyle: {
        height: "0em",
        transition: "all .5s"
      }

    };

    var style = function () {
      if (window.innerWidth < 800) {
        return minStyles;
      } else {
        return maxStyles;
      }
    }
    let response = this.data.map((value, index) => {
      return (
        <div className='comp_datils' key={index}>
          <div className='heading'>
            <div className='design2'></div>
            <h3>{value.heading}</h3>
            <div className='design2'></div>
          </div>
          <p>{value.detail}</p>
        </div>
      )
    })
    let response2 = this.data2.map((item, index) => {
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

    let response3 = this.data3.map((value, index) => {
      return (
        <div className='comp_datils' key={index}>
          <div className='heading'>
            <div className='design2'></div>
            <h3>{value.heading}</h3>
            <div className='design2'></div>
          </div>
          {value.para.map((value, index) => {
            return <span className='bullet_points' key={index}>{value.span}</span>

          })}
        </div>
      )
    })
    return (
      <section>
        <Navbar />
        <div className='main_section_comp_details'>
          <div className='Banner2'>
            <div className='Banner_main'>
              <h1>The Law Challenge Ghana-2019</h1>
            </div>
          </div>
          <div className='main_para'>
            {response}
          </div>
          <div className="rules_main">
            {response3}
          </div>
          <div className='about_comp'>
            {response2}
          </div>
          <div className='Competition_button'>
            <Link to='#' className="reg_btn"><button>Register Now</button></Link>
          </div>
        </div>
        <Footer />
      </section>
    )
  };
}

export default CompetitionDetails;