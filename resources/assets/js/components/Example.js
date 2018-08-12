import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieBox from "./MovieBox.jsx"
import $ from "jquery"

export default class Example extends Component {


constructor(props){
  super(props);
  this.state = {}

  this.performSearch()


//   const movies = [
//     {
//       id: 0, poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lmJr2ngGLwL8b1jU4FfMVThe4Mh.jpg", title: "fake title", overview: "fksjfskjfdhafdkjfhd"
//     },
//     {
//       id: 1, title: "made-up title", overview: "fhsnvnsvfsnvd", poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lmJr2ngGLwL8b1jU4FfMVThe4Mh.jpg"
//     },
//     {
//       id: 2, title: "not real title", overview: "fkfjfjjfjf", poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lmJr2ngGLwL8b1jU4FfMVThe4Mh.jpg"
//     }
//   ]
//
//
// let movieBoxes = []
//
//   movies.forEach((movie) => {
//     console.log(movie.title)
//     var movieBox = <MovieBox movie={movie}/>
//     movieBoxes.push(movieBox)
//   })
//   this.state = {boxes: movieBoxes}
}

    performSearch(){
      console.log("perform a search using moviedb")
      let urlString = "https://api.themoviedb.org/3/search/movie?api_key=0630ec8170c346f90fd1ba75959cf4b9&language=en-US&query=avengers&page=1&include_adult=false";
      $.ajax({
        // https://api.themoviedb.org/3/search/movie?api_key=0630ec8170c346f90fd1ba75959cf4b9&language=en-US&query=avengers&page=1&include_adult=false
        url: urlString,
        // upon successful search initate (searchResults) parameter
        // name of the paramaeter will not break code
        // however the name should have semantic value
        // (pizza) vs something like (searchResults)
        success: (searchResults) => {
          console.log("gathered data successfully")
          // console.log(searchResults)
          const results = searchResults.results
          // console.log(results[0])
          // console.log(results[0].title)
          let movieBoxes = []

           results.forEach((movie) => {
          // ^ parameter is equal to 1st property ^
          // movie param = results[0]
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
              // console.log(movie.poster_path)
             const movieBox = <MovieBox movie={movie}/>
             movieBoxes.push(movieBox)
           })
            this.setState({boxes: movieBoxes})
        },
        error: (xhr, status, err) => {
          console.error("Failed to gather data")
        }
      })
    }

    render() {
        return (
            <div className="container">
              <table className="title-Bar">
                <tbody>
                  <tr>
                    <td>
                    <img src="Netflix-Clone-Logo.png" height="100px" width="100px" alt="app icon"/>
                    </td>
                    <td width="8px">

                    </td>
                    <td>
                      <h1>Netflix Clone</h1>
                    </td>
                    <td>
                    <span><i className="fa fa-search"></i></span>
                    <input  className="search-Bar" placeholder="enter your search ..."></input>
                    </td>
                <td width="30px"></td>
                  </tr>
                </tbody>
              </table>

              {this.state.boxes}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
