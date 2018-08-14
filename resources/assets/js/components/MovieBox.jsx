import React, { Component } from "react";

class MovieBox extends Component {

  viewMovie(){
    // console.log("View your movie");
    // console.log(this.props.movie.title);
    let viewUrl = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = viewUrl;
  }






	render() {
		const { movie } = this.props;
		const { title, overview, poster_path, vote_average } = movie;
		const img_src = 'https://image.tmdb.org/t/p/w185' + poster_path;


		return (
			<section className="wrapper">
				<div className="template">
					<div><p className="ratings">{vote_average}</p></div>
					<div><img height="200px" width="200px" alt="img-unavailable" src={img_src}></img></div>
					<div><h3>{title}</h3></div>
					<div><p>{overview.slice(0, 150)}</p></div>
          <button className="view-btn" onClick={this.viewMovie.bind(this)}>View</button>
				</div>
			</section>
		)
	}
}

export default MovieBox;
