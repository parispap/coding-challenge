//ROOT COMPONENT OF THE WEB APPLICATION

//IMPORT GLOBAL STYLES
import "./App.css";

//IMPORT LOGO
import logo from "./assets/images/logo.png";

// IMPORT ROUTING COMPONENTS
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

//IMPORT DEPENDENCY TO CONNECT TO REDUX STORE
import { connect } from "react-redux";

//IMPORT REACT AND COMPONENT
import React, { Component } from "react";

//IMPORT LANDING PAGE COMPONENT
import LandingPage from "./pages/landing_page/components/landing_page";

//IMPORT GAME PAGE COMPONENT
import GamePage from "./pages/game_page/components/game_page";

class App extends Component {
  //DECLARE REDIRECT FUNCTION TO NAVIGATE TO GAME PAGE WHEN USER IS LOGGED IN OR LOGGED OUT
  redirect_function = (path, condition) => {
    if (condition) {
      return <Redirect to={path} />;
    }
  };

  //RENDER PAGES
  render() {
    return (
      <Router>
        <div className="App">
          {/* RENDER LOGO */}
          <div id="logo">
            <img width="200px" height="140px" src={logo} alt="logo" />
          </div>

          {/* RENDER LANDING PAGE */}
          <Route exact path="/">
            <LandingPage />
          </Route>

          {/* RENDER GAME PAGE */}
          <Route exact path="/game_page">
            <GamePage />
          </Route>

          {/* IF USER LOGS IN GO TO ----> GAME PAGE */}
          {this.redirect_function("/game_page", this.props.UserInfo.isLoggedIn)}

          {/* IF USER LOGS OUT GO TO ----> LANDING PAGE */}
          {this.redirect_function("/", !this.props.UserInfo.isLoggedIn)}
        </div>
      </Router>
    );
  }
}

//DECLARE FUNCTION THAT MAP REDUX STATE TO PROPS
const mapStateToProps = (state) => {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn,
  };
};


//Connect App with Redux store and export it
export default connect(mapStateToProps, null)(App);
