import React, {Component} from 'react';
import Head from '../Home/component/Head/Head';
import Options from '../Home/component/Body/Options';
import LatestBody from './LatestBody';
import Footer from '../Footer/Footer';
import axios from 'axios';

export default class Top extends Component {
	state = {
		moviesList: [],
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/latest?api_key=090752bd8cb65389996217b782198eb8&language=en-US')
			.then(response => {
				console.log(response);
				this.setState({
					moviesList: response.data
				})
				console.log(this.state.moviesList)
			})
		
	}

	
	render() {
		
		let name = <h1>Most Latest Movies</h1>;
		
		return(
			<div>
				<Head 
					searching={this.props.searching}
					searchHandler={this.props.searchHandler}
					loading={this.props.loading}
					/>
				{name}
				<Options />
				<LatestBody
					details={this.props.details}
					list={this.state.moviesList}
					/>
				<Footer />
			</div>	
		)
	}
}