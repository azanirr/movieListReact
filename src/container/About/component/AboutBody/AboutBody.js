import React from 'react';
import styles from '../About.module.css';
import Title from './Title';
import ImageBody from './ImageBody';

const aboutBody = () => {
	return(
		<div className={styles.BodyContainer}>
			<Title />
			<ImageBody />
		</div>
	)
}

export default aboutBody;