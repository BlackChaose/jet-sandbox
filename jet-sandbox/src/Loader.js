import React from 'react';
import ReactDOM from 'react-dom';

class Loader extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			path: "img/spinner-solid.svg",
		};
	}

	render(){
		return (
				<div>
				<img className = "Loader" src = {this.state.path} />
				</div>
			);
	}

}
export default Loader;