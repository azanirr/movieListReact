import React from 'react';
import styles from '../Details.module.css';

const imageDetails = (props) => {
	return(
		<div className={styles.Image}>
			<img 
				src={"https://image.tmdb.org/t/p/original" + props.details.poster_path}
				alt="Details"
				width="450px"
				height="675px"></img>
		</div>
	)
}

export default imageDetails;