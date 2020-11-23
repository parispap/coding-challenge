import "./App.css";
import logo from "./assets/images/logo.jpg";
import { Route, BrowserRouter as Router } from "react-router-dom";

//Import Landing Page component
import LandingPage from "./pages/landing_page/components/landing_page";

//import game page component
import GamePage from "./pages/game_page/game_page";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <img width="300px" height="240px" src={logo} alt="logo" />
        </div>

        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/game_page">
          <GamePage/>
        </Route>
      </div>
    </Router>
  );
}

//Connect App with Redux store and export it
export default App;
