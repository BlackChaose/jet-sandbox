import React from 'react';
import ReactDOM from 'react-dom';
import './Loader.css';

class Loader extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			path: "img/spinner-solid.svg",
		};
	}

	render(){
		return (
				<img className = "Loader" src = {this.state.path} />
			);
	}

}
export default Loader;