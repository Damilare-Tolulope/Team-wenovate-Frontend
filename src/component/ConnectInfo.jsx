import React, { Component } from "react";
import img1 from "./images/img1.png";

class ConnectInfo extends Component {
	render() {
		const imgStyle = {
			border: "1px solid #333",
			borderRadius: "50%",
			margin: "10px",
			height: "30px",
			width: "30px",
		};

		const nameStyle = {
			fontSize: "12px",
			fontWeight: "bold",
			paddingTop: "10px",
		};

		const msgStyle = {
			fontSize: "12px",
		};

		return (
			<div className="customerYes">
				<div className="customer">
					<span>
						<img src={img1} style={imgStyle} />
						{this.props.customer.img}
					</span>
					<span className="content">
						<p style={nameStyle} className="name">
							{this.props.customer.name}
						</p>
						<p style={msgStyle}>{this.props.customer.message}</p>
					</span>
					<span className="status">{this.props.customer.status}</span>
				</div>
			</div>
		);
	}
}

export default ConnectInfo;
