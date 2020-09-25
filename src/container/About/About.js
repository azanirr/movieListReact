import React, {Component} from 'react';
import AboutHead from './component/AboutHead/AboutHead';
import AboutBody from './component/AboutBody/AboutBody';
import Footer from '../Footer/Footer';

export default class About extends Component {
	render() {
		return(
			<div>
				<AboutHead />
				<AboutBody />
				<Footer />
			</div>
		)
	}
}