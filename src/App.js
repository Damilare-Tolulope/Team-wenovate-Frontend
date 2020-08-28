import React, { Component } from "react";
import "./App.css";
import Connect from "./components/wenovate/Connect";
import img1 from "./components/wenovate/images/img1.png";
import Main from "./components/wenovate/Main";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			customers: [
				{
					name: "Adejoko Ade",
					message: "I need fifty supply of eggs",
					status: "Sale",
					// img: img1,
				},
				{
					name: "Adejoko Olu",
					message: "I need fifty supply of eggs",
					status: "Demand",
					// img: img1,
				},
				{
					name: "Adejoko Ola",
					message: "I need fifty supply of eggs",
					status: "Demand",
					// img: "img1",
				},
			],
		};
	}

	addContact = n => {
		const customers = [...this.state.customers, n];
		this.setState({ customers });
	};

	render() {
		return (
			<div className="app">
				<div>Welcome to wenovate ofr (Our Farm Project)</div>{" "}
				{/*This line was written by Master Locksi */}
				<Main />
				<Connect customers={this.state.customers} />
			</div>
		);
	}
}

export default App;
