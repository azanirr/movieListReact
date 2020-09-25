import React, { Component } from 'react';
import Navbar from '../../../Home/component/Head/navbar';
import Particle from '../../../Home/component/Head/Particle';
import ImageDetails from './ImageDetails';
import Description from './Description';
import styles from '../Details.module.css';

export default class HeadDetails extends Component {
	render() {
		return (
			<div className={styles.Container}>
				<Navbar />
				<ImageDetails
					details={this.props.details}/>
				<Description 
					details={this.props.details}/>
				<Particle />
			</div>
		)
	}
}