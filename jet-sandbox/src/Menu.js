/**
 * Menu - component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';

class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}
	render(){
		return (
			<p className="Menu">This will be Menu</p>
			);
	}
}

export default Menu;