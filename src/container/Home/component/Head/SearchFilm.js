import React, {Component} from 'react';
import styles from '../Home.module.css';

export default class SearchFilm extends Component {
	
	state ={
		input : ""
	}
	
	setInput = (event) => {
		this.setState({input: event.target.value})
	}
	
	submit = (e) => {
		this.props.searchHandler(this.state.input)
		e.target.value = "";
		this.setState({input: e.target.value})
	} 
	render(){
		return(
		<div className={styles.ContainerSearch}>
			<h1 className={styles.Title}>YOUR MOVIE LIST</h1>
			<p className={styles.Para}>VENI, VIDI, VICI</p>
			<input 
				placeholder="Search"
				className={styles.Input}
				onChange={(event) => this.setInput(event)}
				type="text"></input>
			<button 
				className={styles.Button}
				onClick={(e) => this.submit(e)}>Search</button>
		</div>
		)	
	}
	
	
}
