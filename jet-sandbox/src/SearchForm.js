/**
 * SearchForm component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "./SearchForm.css";
import ButtonView from './ButtonView.js';
/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
/**/
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';



class SearchForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}

	render(){
		return (
			<Container fluid={true}>
			<Row>
				<Col md="10">
 					<p className="SearchForm"><b>Отбор организаций по следующим признакам</b></p>
				</Col>
			</Row>
			<Row>
				<Col md="3">
				<label>названию, сокращённому названию, ИНН, ОГРН, id</label>	
				</Col>
				<Col md="7">
					  <Input placeholder="" defaultValue="" />
				</Col>
 			</Row>
 			<Row>
 				<Col md="3">
 						<label>машинному коду</label>
 				</Col>
 				<Col md="2">
 					<Input placeholder="" defaultValue="" /> 			
 				</Col>
 			</Row>
 			<Row>
				<Col md="3"> 	
 					<label>типу</label>
 				</Col>
				<Col md="3">
			        <Select name="input"  defaultValue="option1">
       					<Option value="option1" label="Все" />
       					<Option value="option2" label="ГНЦ" />
       					<Option value="option3" label="НИУ" />
       					<Option value="option4" label="ФУ" />
       					<Option value="option5" label="Заказчик экспертизы" />
       					<Option value="option6" label="Региональный НЦ РАН" />
      				</Select>
				</Col> 			
 			</Row>
 			<Row>
 				<Col md="10">
 					<p className="SearchForm btnBg mui--text-center"><ButtonView color="danger" view="icon" text="Найти" onClick={()=>{console.log("in onClick by SearchForm");}}>Найти</ButtonView></p>
 				</Col>
 			</Row>
 			</Container>
			);

	}

}
export default SearchForm;