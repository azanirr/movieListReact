import React, {Component} from 'react';
import Head from '../Home/component/Head/Head';
import Options from '../Home/component/Body/Options';
import Body from '../Home/component/Body/Body';
import Footer from '../Footer/Footer';

export default class Top extends Component {

	render() {
		
		let name = <h1>Now Playing Movies</h1>;
		if(this.props.searching){
			name = <h1>Search: {this.props.input}</h1>
		}
		
		return(
			<div>
				<Head 
					searching={this.props.searching}
					searchHandler={this.props.searchHandler}
					loading={this.props.loading}
					/>
				{name}
				<Options />
				<Body 
					details={this.props.details}
					movieList={this.props.searchMovies}
					searching={this.props.searching}
					/>
				<Footer />
			</div>	
		)
	}
}