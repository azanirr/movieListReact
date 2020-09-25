import React, {Component} from 'react';
import Navbar from './navbar';
import Particle from './Particle';
import SearchFilm from './SearchFilm';

import styles from '../Home.module.css';
import Spinner from '../../../../assets/UI/Spinner';

class Head extends Component {
	
	
	
	render(){
		
		let search =
			<SearchFilm 
				searchHandler={this.props.searchHandler}
				searching={this.props.searching}
				/>

		
		if(this.props.loading){
			search = (
				<Spinner />
			)
		}
		
		return(
		<div className={styles.Container}>
			<Navbar />	
			<Particle />
			{search}
		</div>
		)
	}
	
}


export default Head;