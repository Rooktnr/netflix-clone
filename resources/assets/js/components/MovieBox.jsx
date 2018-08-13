import React, { Component } from "react";

class MovieBox extends Component {
	render() {
		const { movie } = this.props;
		const { title, overview, poster_path } = movie;
		const img_src = 'https://image.tmdb.org/t/p/w185' + poster_path;

		return (
			<section>
				<div className="template">
					<div><p>rating</p></div>
					<div><img height="200px" width="200px" alt="poster-img" src={img_src}></img></div>
					<div><h3>{title}</h3></div>
					<div><p>{overview.slice(0, 150)}</p></div>
				</div>
			</section>
		)
	}
}

export default MovieBox;
