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
	loadLinks(self){
		return self.props.pages.map(el=><li><a href={self.props.path+el}>{el}</a></li>);
	}
	render(){
		return (
			<div className="Pagination mui--text-center">
			<ul>
				{this.loadLinks(this)}
			</ul>
			</div>
			);
	}
}

export default Pagination;