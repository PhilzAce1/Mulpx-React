import React, { Component } from "react";
import { Switch,Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import test from "./components/test";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/test" component={test} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
