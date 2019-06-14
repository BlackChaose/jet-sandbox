/*
 * CloseModal component
 */
/*react*/
import React from 'react';
import ReactDOM from 'react-dom';
/*component style*/

import './CloseModal.css';

/*for key generation*/
import shortid from 'shortid';

class CloseModal extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}

	render(){
		let { children, className, ...reactProps } = this.props;
		return (
			<img className={'CloseModal-' + this.props.moveTo} src="img/window-close-regular.svg" width={this.props.width}/>
			);
	}
}

export default CloseModal;