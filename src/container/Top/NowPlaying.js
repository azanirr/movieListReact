import React, {Component} from 'react';
import Head from '../Home/component/Head/Head';
import Options from '../Home/component/Body/Options';
import Body from '../Home/component/Body/Body';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Pagination from "react-js-pagination";
import "../Home/Home.css";
import styles from '../Home/component/Home.module.css';

export default class Top extends Component {
	state = {
		moviesList: [],
		totalResults: 0,
		currentPages: 1,
		activePage: 1
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=090752bd8cb65389996217b782198eb8&language=en-US&page=1')
			.then(response => {
				console.log(response.data.results);
				this.setState({
					moviesList: response.data.results
				})
				console.log(this.state.moviesList)
			})
		
	}
	nextpage = (pagesNumber) => {
		axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=090752bd8cb65389996217b782198eb8&language=en-US&page=' + pagesNumber)
			.then(response => {
				console.log(response.data.results);
				this.setState({
					moviesList: response.data.results,
					currentPages: pagesNumber,
					activePage: pagesNumber
				})
				console.log(this.state.moviesList)
				window.scrollTo(0, 0);
				})
		}


	
	render() {
		
		let name = <h1>Now Playing Movies</h1>;
		
		let pages = <h1 className={styles.Pages}>Pages {this.state.activePage} of 500</h1>;
		
		return(
			<div>
				<Head 
				searching={this.props.searching}
					searchHandler={this.props.searchHandler}
					loading={this.props.loading}
					/>
				{name}
				<Options />
				{pages}
				<Body 
					details={this.props.details}
					movieList={this.state.moviesList}
					/>
				<Pagination 
					className="pagination"
					activePage={this.state.activePage}
					itemsCountPerPage={20}
					totalItemsCount={10000}
					pageRangeDisplayed={5}
					onChange={this.nextpage.bind(this)}/>
				<Footer />
			</div>	
		)
	}
}