import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './DashboardComponents/sidebar/sidebar';
import MainSection from './DashboardComponents/MainSection/MainSection';
class Dashboard extends Component {
    state = {
        Data: [],

    }
    componentWillMount() {

        if (this.props.auth.isAuthenticated === false) {
            this.props.history.replace("/login")
        }
    }
    render() {
        console.log(this.props)
        return (
            <section className="dashboard_section">
                <Sidebar />
                <MainSection />
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        ...state
    })
}
export default connect(mapStateToProps)(Dashboard);