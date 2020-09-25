import React from 'react';
import styles from './footer.module.css';
import logoo from '../../assets/Image/logo.png';

const logo = () => {
	return(
		<div className={styles.Logo}>
			<img
				alt="logo"
				src={logoo}
				width="43.1px"
				height="64px"
				></img>
		</div>
	)
}

export default logo;