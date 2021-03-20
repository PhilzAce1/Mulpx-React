import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/Landing';
import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
