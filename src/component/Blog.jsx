import React, { Component } from "react";

class Blog extends Component {
	render() {
		return (
			<div className="blog">
				<div className="title">
					<div className="title-name">The blog Title</div>
					<div className="title-time">
						<span style={{ color: "blue" }}>4</span>
						<br />
						<span style={{ opacity: "0.6" }}>
							<i>1h ago </i>
						</span>
					</div>
				</div>
				<div className="blog-note" style={{ borderTop: "1px solid white" }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
					dolorem aliquid id distinctio optio, placeat ullam numquam incidunt
					culpa possimus
				</div>
				<div className="blog-foot">
					<div className="blog-name">By Name Surname</div>
					<div className="blog-button">
						<button
							className="btn btn-sm btn-round btn-success"
							style={{ marginRight: "5px" }}
						>
							Approve
						</button>
						<button className="btn btn-sm btn-round btn-danger">Decline</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Blog;
