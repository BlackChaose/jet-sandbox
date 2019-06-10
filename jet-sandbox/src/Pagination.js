/**
 * pagination component
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './Pagination.css';

class Pagination extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}
	render(){
		return (
			<p className="Pagination">This will be Pagination</p>
			);
	}
}

export default Pagination;