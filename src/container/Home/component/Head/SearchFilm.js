import React, {Component} from 'react';
import styles from '../Home.module.css';
import {withRouter} from 'react-router-dom';

class SearchFilm extends Component {
	
	state ={
		input : ""
	}
	
	setInput = (event) => {
		this.setState({input: event.target.value})
	}
	
	submit = (e) => {
		e.preventDefault();
		if(this.state.input === ""){
			console.log('isi input');
		} else{
		this.props.searchHandler(this.state.input)
		this.props.history.push(`/search/${this.state.input}`)
		e.target.value = "";
		this.setState({input: e.target.value})
		
		}
	} 
	render(){
		return(
		<div className={styles.ContainerSearch}>
			<h1 className={styles.Title}>YOUR MOVIE LIST</h1>
			<p className={styles.Para}>VENI, VIDI, VICI</p>
			<form onSubmit={(e) => this.submit(e)}>
				<input 
					placeholder="Search"
					className={styles.Input}
					onChange={(event) => this.setInput(event)}
					type="text"></input>
				<button 
					className={styles.Button}>Search</button>
			</form>
		</div>
		)	
	}
	
	
}

export default withRouter(SearchFilm);
