import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './setAuthToken';
import Home from './components/Home';
import About from './components/About/About';
import CompetitionDetails from './components/CompetitionDetails/CompetitionDetails';
import Dashboard from './components/Dashboard/Dashboard';
import RewardandPrizes from './components/RewardandPrizes/RewardandPrizes';
import News from './components/News/News';
import NewDetails from './components/News/NewDetails';
import Gallery from './components/Gallery/Gallery';
import Sponsorship from './components/Sponsorship/Sponsorship';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './components/Login/Login';
// import Registeruser from './components/Registeruser/Register';
import Register from './components/Register/Register';
import UserReg from './components/Dashboard/DashboardComponents/UserReg/UserReg';
import DashboardMails from './components/Dashboard/DashboardComponents/DashboardMails/DashboardMails';
import DashboardGallery from './components/Dashboard/DashboardComponents/DashboardGallery/DashboardGallery';
import DashboardNews from './components/Dashboard/DashboardComponents/DashboardNews/DashboardNews';
import { setCurrentUser, logoutUser } from './components/Store/Actions/Action';
import { connect } from "react-redux"
import './App.css';
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/Home' exact component={Home}></Route>
            <Route path='/About' exact component={About}></Route>
            <Route path='/News' exact component={News}></Route>
            <Route path='/Gallery' exact component={Gallery}></Route>
            <Route path='/ContactUs' exact component={ContactUs}></Route>
            <Route path='/Register' exact component={Register}></Route >
            <Route path='/Login' exact component={Login}></Route >

            {/* <Route path='/Registeruser' exact component={Registeruser}></Route >   */}

            <Route path="/News/:id" exact component={NewDetails} />
            <Route path='/Sponsorship' exact component={Sponsorship}></Route >
            <Route path='/RewardandPrizes' exact component={RewardandPrizes}></Route >
            <Route path='/CompetitionDetails' exact component={CompetitionDetails}></Route>

            <Route path='/Dashboard' exact component={Dashboard}></Route >
            <Route path='/UserReg' exact component={UserReg}></Route >
            <Route path='/DashboardMails' exact component={DashboardMails}></Route >
            <Route path='/DashboardGallery' exact component={DashboardGallery}></Route >
            <Route path='/DashboardNews' exact component={DashboardNews}></Route >

          </Switch>
        </Router>
      </Provider >
    )
  }
}
// const mapStateToProps = (state) => {
//   return ({
//     ...state,
//   })
// }
export default App;