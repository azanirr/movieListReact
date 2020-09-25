import React from 'react';
import styles from '../Details.module.css';
import moment from 'moment';

const description = (props) => {
	return(
		<div className={styles.Title}>
			<h1>{props.details.title}</h1>
			<p>Status: {props.details.status}</p>
			<p>Release Date: {moment(props.details.release_date).format("MMMM, D, YYYY")}</p>
			<p>Rating: {props.details.vote_average}</p>
			<p>Revenue: ${props.details.revenue}</p>
			<p>{props.details.overview}</p>
		</div>
	)
}

export default description;