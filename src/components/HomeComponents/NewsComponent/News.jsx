import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
// import { carouselitem } from '../../AllData/NewsHomeData';


class News extends Component {

    state = {
        index: 0,
        direction: null,
        carouselitem: []
    };
    componentDidMount() {
        axios.get("/News")
            .then(res => {
                this.setState({
                    carouselitem: res.data
                })
            })
            .catch(e => { console.log(e) })
    }


    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }


    render() {
        let response = this.state.carouselitem.map((value, index) => {
            return (
                <Carousel.Item key={index}>
                    <Card>
                        <Card.Img variant="top" src={value.url} />
                        <Card.Body>
                            <Card.Title>{value.NewsTitle}</Card.Title>
                            <Card.Text>
                                {value.NewsText}
                            </Card.Text>
                            <Link to="/News"><Button variant="primary">Read More</Button></Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{value.date}</small>
                        </Card.Footer>
                    </Card>
                    {/* {value.CardDeck.map((items, i) => {
                            return (
                            )
                        })} */}

                </Carousel.Item>
            )
        })

        return (
            <section className="News_section">
                <div className="heading">
                    <div className="design2" />
                    <h3>Latest News</h3>
                    <div className="design2" />
                </div>
                <Carousel
                    activeIndex={this.index}
                    direction={this.direction}
                    onSelect={this.handleSelect}
                >
                    {response}
                </Carousel>
            </section>
        );
    }
}
export default News;