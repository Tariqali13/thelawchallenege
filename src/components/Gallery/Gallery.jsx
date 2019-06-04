import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { data2 } from "../AllData/GalleryData";
import axios from "axios";

class Gallery extends React.Component {
  state = {
    data2: data2,
    images: []
  };
  componentDidMount() {
    axios
      .get("/firebaseUploads")
      .then(res => {
        this.setState({
          images: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    let response = this.state.images.map((value, index) => {
      return (
        <MDBCol md="5" key={index}>
          <figure>
            <img
              index={index}
              src={value.imageName}
              alt="Gallery"
              className="img-fluid"
              onClick={() =>
                this.setState({ photoIndex: { index }, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    });
    let response2 = this.state.data2.map((value, index) => {
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
    return (
      <div>
        <Navbar />
        <div className="Banner6">
          <div className="Banner_main">
            <h1>OUR MEMORIES</h1>
          </div>
        </div>
        <div className="contact_datils">
          <div className="contact_divider">
            <div className="contact_data main_para2 ">
              <div className="heading3">
                <h5>
                  We believe in keeping memories because they remind us of what
                  happened in the Past and motivate us to do better or keep it
                  up.
                </h5>
                <p style={{ textAlign: "center", width: "100%" }}>
                  Have a look at some of the winning and joyful moments not
                  forgetting the sad ones too.
                </p>
                <div className="design3" />
              </div>
              <section className="gallery">
                <MDBContainer>
                  <div className="mdb-lightbox no-margin">
                    <MDBRow>{response}</MDBRow>
                  </div>
                </MDBContainer>
              </section>
            </div>
            <div className="contact_sidebar">{response2}</div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Gallery;
