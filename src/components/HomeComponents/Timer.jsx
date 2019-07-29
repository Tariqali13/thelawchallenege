import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Timer extends Component {

    state = {
        days: "",
        hours: "",
        minutes: "",
        seconds: "",
        message: "",
        defaultval: "",
    }
  
    componentDidMount() {
        var countDownDate = new Date("July 31, 2019 ").getTime();
        var days; var hours; var minutes; var seconds;
        const test = (days, hours, minutes, seconds) => {
            this.seting(days, hours, minutes, seconds)
        }
        const mess = () => {
            this.message()
        }
        const defval = () => {
            this.defaultval();
        }
        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance > 0) {
                test(days, hours, minutes, seconds);
            }
            if (distance < 0) {
                clearInterval(x);
                mess()
                defval()
            }
        }, 1000);

    }

    seting(days, hours, minutes, seconds) {
        this.setState({ days, hours, minutes, seconds })
    }
    message() {
        this.setState({ message: "Time Out" })
    }
    defaultval() {
        this.setState({
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        })
    }


    render() {
        const { days, hours, minutes, seconds } = this.state
        return (
            <div className="Timer">
                <h1>The LAW CHALLENGE, GHANA</h1>
                <p>We propose to run the project during the legal vacation period, from July to September.</p>
                <p>The maiden edition to be hosted on 31st July 2019 at 4pm</p>
                {this.state.message !== "" ? <p id='mesage' >{this.state.message}</p> : <p id="mesage">{" Starting Soon"}</p>}
                <div className="Countdown">
                    <p id="days">{days}</p>
                    <p>:</p>
                    <p id="hours">{hours}</p>
                    <p>:</p>
                    <p id="mins">{minutes}</p>
                    <p>:</p>
                    <p id="sec">{seconds}</p>
                </div>
                <Link to='/Register'><button>Register Now</button></Link>
            </div>
        );
    }
}

export default Timer;