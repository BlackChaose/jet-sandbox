/**
 * Modal.js - component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import shortid from 'shortid';
import CloseModal from './CloseModal.js';

/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class Modal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		openModalWIndow: true,
		};		
	}
	closeModalWindow(){
		console.log();
	}

	showCloseModal(){
		if(this.props.showClose){
			return <CloseModal moveTo="right" width="24px" onClick={this.closeModalWindow}></CloseModal>
		}
		else return null;
	}

	render(){
		let { children, className, ...reactProps } = this.props;
		return ( 
		<div className="Modal">
		{this.showCloseModal()}
		{children}
		</div>
			);
	}
}
export default Modal;