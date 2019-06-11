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
			<>
				<img className="Loader" src = {this.state.path} />
				<span className="Loader">загрузка</span>
			</>
			);
	}

}
export default Loader;