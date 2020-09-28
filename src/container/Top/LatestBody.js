import React, {Component} from 'react';
import styles from '../Home/component/Home.module.css';
import Movies from '../Home/component/Body/Movies';

import { NavLink } from 'react-router-dom';


export default class LatestBody extends Component {

	render () {
		return(
			<div className={styles.BodyContainer}>
						<NavLink
							className={styles.Linked}
							to={"/details/" + this.props.list.id}>
							<Movies 
								key={this.props.list.id}
								list={this.props.list}
								details={this.props.details}
							/>
						</NavLink>
			</div>
		)
	}
}