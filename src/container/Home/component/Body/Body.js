import React, {Component} from 'react';
import styles from '../Home.module.css';
import Movies from './Movies';
import { NavLink } from 'react-router-dom';


export default class Body extends Component {
	render () {
		return(
			<div className={styles.BodyContainer}>
				{!this.props.searching ?
				this.props.movieList.slice(0, 10).map(list => {
					return (
					<NavLink
						className={styles.Linked}
						to={"/details/" + list.id}>
						<Movies 
							key={list.id}
							list={list}
							details={this.props.details}
						/>
					</NavLink>
					)
				})
				: 
				this.props.search.map(list => {
					return(
					
					<Movies 
						key={list.id}
						list={list}
						/>
					)
				})
				}
			</div>
		)
	}
}