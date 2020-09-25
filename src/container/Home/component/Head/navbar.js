import React from 'react';
import styles from '../Home.module.css'
import { NavLink } from 'react-router-dom';

const navbar = () => {
	return (
		<div>
			<ul className={styles.Ul}>
				<li className={styles.Li}><NavLink to="/">Movies</NavLink></li>
				<li className={styles.Li}><NavLink to="/about">About</NavLink></li>
			</ul>
		</div>	
	)
}

export default navbar;