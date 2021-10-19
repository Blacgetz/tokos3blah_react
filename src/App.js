import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";

import { Router, Route, Switch } from "react-router-dom";

import Navbar  from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verification from "./pages/auth/Verification";
import Admin from "./pages/Admin";
import Userprofile from "./pages/Userprofile";
import Home from "./pages/Home";
import Product from "./pages/Product.jsx"
import Cart from "./pages/Cart.jsx"
import ForgotPassword from "./pages/auth/ForgotPassword";
import ChangePassword from "./pages/auth/ChangePassword";

export const history = createBrowserHistory();
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router history={history}>
					<Navbar />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/admin" component={Admin} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/authentication/:token" component={Verification} />
						<Route path="/user" component={Userprofile} />
						<Route path="/product" component={Product} />
						<Route path="/cart" component={Cart} />
						<Route path="/ForgotPassword" component={ForgotPassword} />
						<Route path="/change-password/:token" component={ChangePassword} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
