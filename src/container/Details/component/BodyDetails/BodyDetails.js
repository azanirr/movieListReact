import React, {Component} from 'react';
import styles from '../Details.module.css';
import Movies from '../../../Home/component/Body/Movies';
import { NavLink } from 'react-router-dom';

export default class Body extends Component {
	render () {
		return(
			<div className={styles.BodyContainer}>
				{this.props.similar.slice(0, 10).map(list => {
					return (
					<NavLink
						className={styles.Linked}
						to={"/details/" + list.id}>
						<Movies 
							key={list.id}
							list={list}
							details={this.props.detailsHandler}
						/>
					</NavLink>
					)
				})} 
			</div>
		)
	}
}