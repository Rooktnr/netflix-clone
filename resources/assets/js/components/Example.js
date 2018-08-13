import React, { Component } from 'react';
import MovieBox from "./MovieBox.jsx"
import axios from 'axios';
import {MOVIE_API, API_KEY} from '../utils';

export default class Example extends Component {


	constructor(props){
		super(props);
		this.state = {
			movies: []
		}

		this.performSearch = () => {
			let urlString = "/search/movie";
				
			axios.get(MOVIE_API + urlString, {
				params: {
					api_key: API_KEY,
					language: 'en-US',
					query: 'avengers',
					include_adult: false
				}
			})
			.then(response => {
				const { data } = response;
				const { results } = data;
				// console.log(results);
				this.setState({
					movies: results
				})
			}).catch(err => console.log(err));
		}
	}

	componentDidMount() {
		// when component renders, when all the comps are mounted
		this.performSearch();
	}

	render() {
		const { movies } = this.state;
		return (
			<div className="container">
				<table className="title-Bar">
					<tbody>
						<tr>
							<td>
								<img src="Netflix-Clone-Logo.png" height="100px" width="100px" alt="app icon" />
							</td>
							<td width="8px">

							</td>
							<td>
								<h1>Netflix Clone</h1>
							</td>
							<td>
								<span><i className="fa fa-search"></i></span>
								<input className="search-Bar" placeholder="enter your search ..."></input>
							</td>
							<td width="30px"></td>
						</tr>
					</tbody>
				</table>

				{
					movies.map(movie => <MovieBox movie={movie} key={movie.id} />)
				}
			</div>
		);
	}
}