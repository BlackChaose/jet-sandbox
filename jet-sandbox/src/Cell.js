/*
 * Cell component
 */
/*react*/
import React from 'react';
import ReactDOM from 'react-dom';
/*component style*/
import './Cell.css';
/*for key generation*/
import shortid from 'shortid';

class Cell extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}

	render(){
		let { children, className, ...reactProps } = this.props;
		return (
			<span className="Cell">
			{children}
			</span>
			);
	}
}

export default Cell;