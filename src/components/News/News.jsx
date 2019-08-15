import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { data } from "../AllData/NewmainData";
import axios from "axios";
class News extends Component {
  state = {
    data: data,
    NewsData: []
  };

  componentDidMount() {
    axios
      .get("/api/News")
      .then(res => {
        this.setState({
          NewsData: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    let response2 = this.state.data.map((value, index) => {
      return (
        <div className="stacks2" key={index}>
          <div className="Stackimage2">
            <img
              src={require(`../../assets/images/${value.images}.jpg`)}
              alt=""
            />
            <div className="Stack_color" style={{ background: value.color }} />
            <div className="Overflow_div">
              <h4>{value.h1}</h4>
              <div className="line" />
              <p>
                {value.para.map((item, index) => {
                  return (
                    <span className="rewards_points" key={index}>
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
    });
    let response = this.state.NewsData.map((value, index) => {
      return (
        <Card className="m-2" key={index}>
          <Card.Title className="pt-5 pl-5 text-left lead text-info">
            <h2>{value.NewsTitle}</h2>
          </Card.Title>
          <Card.Body>
            <Card.Img variant="top" className="card_image_size" src={value.url}/>
            <Card.Text className="mt-5 mb-5 text-left">
              {value.NewsText}
            </Card.Text>
            <div className="text-left mt-5">
              <Link to={`/News/${value._id}`}>
                <Button variant="primary">Read More</Button>
              </Link>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{value.date}</small>
          </Card.Footer>
        </Card>
      );
    });
    return (
      <section>
        <Navbar />
        <div className="Banner7">
          <div className="Banner_main">
            <h1>News and Events</h1>
          </div>
        </div>
        <div className="contact_datils">
          <div className="contact_divider">
            <div className="contact_data main_para2 ">{response}</div>
            <div className="contact_sidebar">{response2}</div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default News;
