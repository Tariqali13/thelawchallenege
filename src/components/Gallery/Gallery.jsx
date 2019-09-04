import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { data2 } from "../AllData/GalleryData";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Gallery extends React.Component {
  state = {
    data2: data2,
    images: [],
    currentPage: 1,
    todosPerPage: 10,
    clasactive: false,
    id: 1
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
  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
      clasactive: true,
      id: event.target.id
    });
  };

  render() {
    const { images, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = images.slice(indexOfFirstTodo, indexOfLastTodo);

    let response = currentTodos.map((value, index) => {
      return (
        <MDBCol md="5" key={index}>
          <LazyLoadImage alt='gallery-image' effect="blur" index={index}
              className="img-fluid"
              src={value.imageName} visibleByDefault={value.imageName === '../../assets/images/loader.gif'}/>
    
        </MDBCol>
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number, index) => {
      return (
        <div className="galeryindex md-4" key={index}>
          <div
            className="galerylistindex btn w-100"
            key={number}
            id={number}
            onClick={this.handleClick}
            style={
              this.state.id == number
                ? { background: "cornflowerblue", color: "white" }
                : { background: "white", color: "black" }
            }
          >
            {number}
          </div>
        </div>
      );
    });
    let response2 = this.state.data2.map((value, index) => {
      return (
        <div className="stacks2" key={index}>
          <div className="Stackimage2">
            <img
              src={require(`../../assets/images/${value.images}.jpg`)}
              alt=""
            ></img>
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
                <div className="design3"></div>
              </div>
              <section className="gallery">
                <MDBContainer>
                  <div className="mdb-lightbox no-margin">
                    <MDBRow>{response}</MDBRow>
                  </div>
                </MDBContainer>
                <MDBContainer>
                  <div className="mdb-lightbox no-margin">
                    <MDBRow>{response}</MDBRow>
                  </div>
                </MDBContainer>
                <div className="row pl-3 ml-1 pr-3">{renderPageNumbers}</div>
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
