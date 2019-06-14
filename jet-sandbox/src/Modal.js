/**
 * Modal.js - component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import shortid from 'shortid';

/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class Modal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		
		};		
	}

		render(){
		let { children, className, ...reactProps } = this.props;
		return <div className="Modal">{children}</div>;
			
	}
}
export default Modal;