import React from 'react';
import styles from './footer.module.css';
import Logo from './Logo';
import Icon from './Icon';

const footer = () => {
	return(
		<div className={styles.Container}>
			<Logo />
			<Icon />
			<p className={styles.Copy}>Azanirr &copy; 2020</p>
		</div>
	)
}

export default footer;