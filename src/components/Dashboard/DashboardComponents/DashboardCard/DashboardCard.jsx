import React, { Component } from "react";
import axios from "axios";
class DashboardCards extends Component {
  state = {
    mails: [],
    Images: [],
    News: [],
    Reg: []
  };

  componentDidMount() {
    axios
      .get("/send")
      .then(res => {
        this.setState({
          mails: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });

    axios
      .get("/firebaseUploads")
      .then(res => {
        this.setState({
          Images: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });

    axios
      .get("/api/News")
      .then(res => {
        this.setState({
          News: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });

    axios
      .get("/Reg")
      .then(res => {
        this.setState({
          Reg: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="cards">
        <h1 className="dash">Welcome To Dashboard</h1>
        <div className="design3" />

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-counter primary">
                <i className="fa fa-image" />
                <span className="count-numbers">
                  {this.state.Images.length}
                </span>
                <span className="count-name">Images Uploaded</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-counter danger">
                <i className="fas fa-envelope" />
                <span className="count-numbers">{this.state.mails.length}</span>
                <span className="count-name">Mails</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-counter success">
                <i className="far fa-newspaper" />
                <span className="count-numbers">{this.state.News.length}</span>
                <span className="count-name">News</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-counter info">
                <i className="fa fa-users" />
                <span className="count-numbers">{this.state.Reg.length}</span>
                <span className="count-name">Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardCards;
