import React from "react";




class MovieBox extends React.Component {
  render(){
    return <section key={this.props.movie.id}>
      <div className="movie-template">
        <div><p>rating</p></div>
        <div><img height="200px" width="200px" alt="poster-img" src={this.props.movie.poster_src}></img></div>
          <div><h3>{this.props.movie.title}</h3></div>
          <div><p>{this.props.movie.overview.slice(0,150)}</p></div>


      </div>
    </section>
  }
}

export default MovieBox;
