import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { NewsData } from '../AllData/NewmainData';
import { data } from "../AllData/NewmainData";
import axios from "axios";

class NewDetails extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .post("/News/news", { id: this.props.match.params.id })
      .then(res => {
        this.setState({
          data: [res.data]
        });
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.data.map((value, index) => {
          console.log(index);

          return (
            <div>
              <div className="Banner7">
                <div className="Banner_main">
                  <h1>News and Events</h1>
                </div>
              </div>
              <div className="contact_datils">
                <div className="contact_divider">
                  <div className="contact_data main_para2 ">
                    <Card className="m-2" key={index}>
                      <Card.Title className="pt-5 pl-5 text-left lead text-info">
                        <h2>{value.NewsTitle}</h2>
                      </Card.Title>
                      <Card.Body>
                        <Card.Img
                          variant="top"
                          className="h-25"
                          src={value.url}
                        />
                        <Card.Text className="mt-5 mb-5 text-left">
                          {value.NewsText}
                          <br />
                          <div className="mt-2 small">{value.NewsDec}</div>
                        </Card.Text>
                        <div className="text-left mt-5">
                          <Link to="/News">
                            <Button variant="danger">Go Back</Button>
                          </Link>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{value.date}</small>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="contact_sidebar">
                    {data.map((value, index) => {
                      return (
                        <div className="stacks2" key={index}>
                          <div className="Stackimage2">
                            <img
                              src={require(`../../assets/images/${
                                value.images
                              }.jpg`)}
                              alt=""
                            />
                            <div
                              className="Stack_color"
                              style={{ background: value.color }}
                            />
                            <div className="Overflow_div">
                              <h4>{value.h1}</h4>
                              <div className="line" />
                              <p>
                                {value.para.map((item, index) => {
                                  return (
                                    <span
                                      className="rewards_points"
                                      key={index}
                                    >
                                      {item.p1}
                                    </span>
                                  );
                                })}
                                {value.p}
                                <br />
                                <Link to={value.to} className="Stack_read">
                                  {value.btnvalue}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* {response2} */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default NewDetails;
