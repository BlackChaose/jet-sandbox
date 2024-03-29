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
		openModalWindow: true,
		viewWin: true,
		};		
	}
	closeModalWindow(e){
		e.preventDefault();
		console.log(e.currentTagret);
		console.log("close!");
		this.setState({viewWin: false});
	}

	showCloseModal(){
		if(this.props.showClose){
			return <CloseModal moveTo="right" width="24px" onClick={this.closeModalWindow.bind(this)}></CloseModal>
		}
		else return null;
	}

	/*fixme - разберись со стейтами !!!*/

	render(){
		let { children, className, ...reactProps } = this.props;
		if(this.props.showState){
			this.setState({showModalWindow:'show'});
		}
		return ( 
		<div className="Modal" style={{display: this.state.viewWin}}>
		{this.showCloseModal()}
		{children}
		</div>
			);
	}

	render(){
		return (<>{this.showModal()}</>);
	}
}
export default Modal;