import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';

const icon = () => {
	return(
		<div className={styles.Icon}>
			<span><a 
					  href="https://www.linkedin.com/in/azaniramadhan/" 
					  rel="noopener noreferrer" 
					  target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></span>
			<span><a 
					  href="https://twitter.com/azanirr" 
					  rel="noopener noreferrer" 
					  target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></span>
			<span><a 
					  href="https://web.facebook.com/azani.ramadhan/" 
					  rel="noopener noreferrer" 
					  target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']}/></a></span>
			<span><a 
					  href="https://www.instagram.com/azanirr/" 
					  rel="noopener noreferrer" 
					  target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></span>
		</div>
	)
}

export default icon;