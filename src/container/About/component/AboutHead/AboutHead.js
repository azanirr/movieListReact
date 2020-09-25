import React, {Component} from 'react';
import Navbar from '../../../Home/component/Head/navbar';
import Particle from '../../../Home/component/Head/Particle';
import styles from '../About.module.css';
import Title from './Title';


export default class AboutHead extends Component{
	render() {
		return(
			<div className={styles.Container}>
				<Navbar />
				<Particle />
				<Title />
			</div>
		)
	}
}