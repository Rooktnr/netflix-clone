import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {


constructor(props){
  super(props)
  console.log("this is my initalizer")

  const movies = [
    {
      id: 0, title: "fake title", overview: "fksjfskjfdhafdkjfhd"
    },
    {
      id: 1, title: "made-up title", overview: "fhsnvnsvfsnvd"
    },
    {
      id: 2, title: "not real title", overview: "fkfjfjjfjf"
    }
  ]

  this.state = {

  }

let movieBoxes = []
  // const movieBox = <div></div>
  movies.forEach((movie) => {
    console.log(movies)
    movieBoxes.push(<p>title:{movie.title}</p>)
  })
  this.state = {boxes: movieBoxes}
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
