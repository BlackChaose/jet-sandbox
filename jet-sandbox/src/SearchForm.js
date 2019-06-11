/**
 * SearchForm component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "./SearchForm.css";
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
			<>
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
					  <Input placeholder="Input 2" defaultValue="" />
				</Col>
 			</Row>
 			<Row>
 				<Col md="3">
 						<label>машинному коду</label>
 				</Col>
 				<Col md="2">
 					<Input placeholder="num" defaultValue="" /> 			
 				</Col>
 			</Row>
 			<Row>
				<Col md="3"> 	
 					<label>типу</label>
 				</Col>
				<Col md="3">
			        <Select name="input" label="Select Example" defaultValue="option2">
       					<Option value="option1" label="Option 1" />
       					<Option value="option2" label="Option 2" />
       					<Option value="option3" label="Option 3" />
       					<Option value="option4" label="Option 4" />
      				</Select>
				</Col> 			
 			</Row>
 			<Row>
 				<Col md="10">
 					<p className="SearchForm btnBg mui--text-center"><Button color="primary">button</Button></p>
 				</Col>
 			</Row>
 			</>
			);

	}

}
export default SearchForm;