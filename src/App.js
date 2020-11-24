import "./App.css";
import logo from "./assets/images/logo.png";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import {refresh_page} from './redux/UserInfo/UserInfo.actions';

//Import Landing Page component
import LandingPage from "./pages/landing_page/components/landing_page";

//import game page component
import GamePage from "./pages/game_page/components/game_page";

class App extends Component {
  redirect_function = (path, condition) => {
    if (condition) {
      return <Redirect to={path} />;
    }
  };

  componentDidMount() {
    // this.props.refresh_page();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <img width="200px" height="140px" src={logo} alt="logo" />
          </div>

          <Route exact path="/">
            <LandingPage />
          </Route>

          {this.redirect_function("/game_page", this.props.UserInfo.isLoggedIn)}
          {this.redirect_function("/", !this.props.UserInfo.isLoggedIn)}
          <Route exact path="/game_page">
            <GamePage />
          </Route>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn,
    Nickname:state.Nickname,
    Balance:state.Balance
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    refresh_page:()=> dispatch(refresh_page())
  }
}

//Connect App with Redux store and export it
export default connect(mapStateToProps, mapDispatchToProps)(App);
