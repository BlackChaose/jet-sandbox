/**
 * SysInfo component
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './SysInfo.css';

class SysInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}
	render(){
		return (
			<p className="SysInfo">Page load in 0.314159265 ms !!!</p>
			);
	}
}

export default SysInfo;