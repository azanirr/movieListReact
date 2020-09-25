import React, { Component } from 'react';
import Home from './container/Home/Home';
import About from './container/About/About';
import Details from './container/Details/Details';
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
		similar: []
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
	
	render(){
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route path="/details/:id">
							<Details 
								detailsHandler={this.detailsHandler}
								details={this.state.details}
								similar={this.state.similar}/>
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route exact path="/">
							<Home
								details={this.detailsHandler}
								/>
						</Route>
					</Switch>
				</Router>
			</div>
 		);
	}	
}


