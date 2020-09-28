import React, { Component } from 'react';
import Home from './container/Home/Home';
import About from './container/About/About';
import Details from './container/Details/Details';
import TopRated from './container/Top/Top';
import Latest from './container/Top/Latest';
import NowPlaying from './container/Top/NowPlaying';
import Upcoming from './container/Top/Upcoming';
import Search from './container/Top/Search';
import Scroll from './Scroll';
import axios from 'axios';
import './container/Footer/Fontawesome';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  	
	state = {
		details: [],
		similar: [],
		searchMovies: [],
		search: false,
		loading: false,
		input: ""
	}

	detailsHandler = (id) =>{
		axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=090752bd8cb65389996217b782198eb8&language=en-US')
			.then(response => {
				this.setState({
					details: response.data
				})
				console.log(response.data)
				console.log('CLICKCKKK')
			})
		
		axios.get('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=090752bd8cb65389996217b782198eb8&language=en-US&page=1')
			.then(response => {
				this.setState({
					similar: response.data.results
				})	
			console.log(response.data.results)
			console.log('SIMILAR')
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
					loading: false,
					input: value
				})
		})
	}
	
	render(){
		return (
			<div className="App">
				<Router>
					<Scroll>
					<Switch>
						<Route path="/details/:id">
							<Details 
								detailsHandler={this.detailsHandler}
								details={this.state.details}
								similar={this.state.similar}/>
						</Route>
						<Route path="/search/:search">
							<Search
								details={this.detailsHandler}
								searching={this.state.search}
								searchHandler={this.searchHandler}
								loading={this.state.loading}
								searchMovies={this.state.searchMovies}
								input={this.state.input}/>
							
								
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/popular">
							<Home
								details={this.detailsHandler}
									searchHandler={this.searchHandler}
								loading={this.state.loading}/>
						</Route>
						<Route path="/top-rated">
							<TopRated 
								details={this.detailsHandler}
									searchHandler={this.searchHandler}
								loading={this.state.loading}
								/>
						</Route>
						<Route path="/latest">
							<Latest
								details={this.detailsHandler}
									searchHandler={this.searchHandler}
								loading={this.state.loading}/>
						</Route>
						<Route path="/play">
							<NowPlaying 
								details={this.detailsHandler}
									searchHandler={this.searchHandler}
								loading={this.state.loading}/>
						</Route>
						<Route path="/upcoming">
							<Upcoming
								details={this.detailsHandler}
									searchHandler={this.searchHandler}
								loading={this.state.loading}/>
						</Route>
						<Route exact path="/">
							<Home
								details={this.detailsHandler}
								searchHandler={this.searchHandler}
								loading={this.state.loading}
								/>
						</Route>
					</Switch>
					</Scroll>
				</Router>
			</div>
 		);
	}	
}


