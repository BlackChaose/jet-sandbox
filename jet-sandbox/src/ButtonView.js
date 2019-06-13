/*
buttonView - component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "./ButtonView.css";
/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
/**/
import Button from 'muicss/lib/react/button';

/**
 * @todo  проверь необходимость передавать this 
 */

class ButtonView extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}
	showButton(self){
		//console.log(self.props.onClick);
		if(self.props.view === "text"){
			return <Button variant="flat" color="primary"  onClick={self.props.onClick}>{self.props.text}</Button>
		}else{
			return <Button variant="flat" color={this.props.color}  onClick={self.props.onClick}><img className="ButtonView mui--hidden-md mui--hidden-xl mui--visible-xs mui--visible-sm" src="img/search-solid.svg" width="16" height="16" /><span className="mui--visible-md mui--visible-xl mui--hidden-xs mui--hidden-sm">{self.props.text}</span></Button>
		}
	}
	render(){

		return (<div id={this.props.idBtnView}>{this.showButton(this)}</div>);
	}
}
export default ButtonView;