import React, {Component} from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import axios from 'axios';
import Footer from '../Footer/Footer';


export default class Home extends Component {
	
	state = {
		moviesList: [],
		searchMovies: [],
		search: false,
		loading: false
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=090752bd8cb65389996217b782198eb8&language=en-US&page=1')
			.then(response => {
				console.log(response.data.results);
				this.setState({
					moviesList: response.data.results
				})
				console.log(this.state.moviesList)
			})
		
	}

	searchHandler = (value) => {
		this.setState({
			loading: true
		})
		axios.get('https://api.themoviedb.org/3/search/movie?api_key=090752bd8cb65389996217b782198eb8&language=en-US&query=' + value + '&page=1&include_adult=false')
			.then(response => {
				this.setState({
					searchMovies: response.data.results,
					search: true,
					loading: false
				})
		})
	}

	
	render() {
		return(
			<div>
				<Head 
					searching={this.state.search}
					searchHandler={this.searchHandler}
					loading={this.state.loading}
					/>
				<h1>Popular Movies</h1>
				<Body 
					details={this.props.details}
					movieList={this.state.moviesList}
					search={this.state.searchMovies}
					searching={this.state.search}
					/>
				<Footer />
			</div>
		)
	}
}