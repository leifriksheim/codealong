import React from "react";
import "./styles/base.css";
import "./styles/variables.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BottomBar from "./components/BottomBar";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">About</Route>
          <Route path="/users">Users</Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <BottomBar>
        <Button variant="transparent">
          <i className="bi bi-house-door"></i>
        </Button>
        <Button variant="transparent">
          <i className="bi bi-house-door"></i>
        </Button>
        <Button variant="transparent">
          <i className="bi bi-house-door"></i>
        </Button>
        <Button variant="transparent">
          <i className="bi bi-house-door"></i>
        </Button>
      </BottomBar>
    </div>
  );
}

export default App;
