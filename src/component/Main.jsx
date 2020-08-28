import React, { Component } from "react";
import img1 from "./images/img1.png";
import Blog from "./Blog";

class Main extends Component {
	render() {
		return (
			<div className="main">
				<div className="create">
					<button className="btn btn-md btn-default">+ Create Blog</button>
				</div>
				<div className="features">
					<h3 style={{ margin: "20px " }}>FEATURES:</h3>
					<Blog />
				</div>
			</div>
		);
	}
}

export default Main;
