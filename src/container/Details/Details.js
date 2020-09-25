import React, { Component } from 'react';
import HeadDetails from './component/HeadDetails/HeadDetails';
import BodyDetails from './component/BodyDetails/BodyDetails';
import Footer from '../Footer/Footer';

export default class Details extends Component {
	render() {
		return (
			<div>
				<HeadDetails 
					details={this.props.details}/>
				<h1>Recommended Movies</h1>
				<BodyDetails 
					detailsHandler={this.props.detailsHandler}
					similar={this.props.similar}/>
				<Footer />
			</div>
		)
	}
}