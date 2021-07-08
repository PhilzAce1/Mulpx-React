/**===============External dependencies================= */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/**===============Components================= */
import LandingPage from 'pages/Landing';
import SigninPage from 'pages/Signin';
import SignupPage from 'pages/Signup';

/*============= For testing/viewing  new page/components =============*/
import MultiPayment from 'Components/MultiPayment';

/**=================Style==================== */
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/signin" component={SigninPage} />
					<Route path="/signup" component={SignupPage} />

					{/* For testing new page/components */}
					<Route path="/muiltipayment" component={MultiPayment} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
