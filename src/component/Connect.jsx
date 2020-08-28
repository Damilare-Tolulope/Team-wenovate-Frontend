import React, { Component } from "react";
import ConnectInfo from "./ConnectInfo";

class Connect extends Component {
	render() {
		return (
			<div className="connect">
				<h4 className="text-center m-2">Connect</h4>
				{this.props.customers.map(customer => (
					<ConnectInfo key={customer.name} customer={customer} />
				))}
				<button
					className="btn btn-md btn-success"
					style={{ color: "white", marginTop: "50px" }}
				>
					{" "}
					+ Add Contact
				</button>
			</div>
		);
	}
}

export default Connect;
