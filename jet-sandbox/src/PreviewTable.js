/**
 * PreviewTable - component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './PreviewTable.css';
import shortid from 'shortid';
import _ from 'lodash';
import Loader from './Loader.js';
import ButtonView from './ButtonView.js';

class PreviewTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rowLength: props.rowLength,
			index: 0,
			answer: {},
		};
		this.index = 0;
	}

	showIndex(){
		let buf = this.index;
		buf+=1;
		this.index = buf;
		return buf;
	}

	showOrg(e){
		//@fixme: render info about organization or redirect
		    e.preventDefault();
		    let rgx = /[^btnShow-]*\d/ig;
		    let s = e.target.id;
		    let resId = s.match(rgx);
		    let path = "http://localhost:3042/api/table/Org/" + resId;
	        fetch(path)
  					.then(function(response){
      						return response.json();

  					})
  					.then(function(myJson){
  						alert(JSON.stringify({data:myJson}));
  						return {data:myJson};

  					});
    		
	}

	/** 
	 * @todo event handlers for btnShow!!!!! + add MUI grid and button "просмотр" - for descktop - text, for mobile - icon
	 */
	render(){
		return (
			<table className="PreviewTable" key={shortid.generate()}>
			<thead>	
			<tr>		
				 <th className="PreviewTable">{this.props.header[0]}</th>
				 <th className="PreviewTable">{this.props.header[1]}</th>
				 <th className="PreviewTable">{this.props.header[2]}</th>			
			</tr>
			</thead>
			<tbody>
			{
			this.props.rows.map(el => <tr className="PreviewTable" key={shortid.generate()}><td className="PreviewTable">{this.showIndex()}</td><td className="PreviewTable">{el.NameOrg}</td><td className="mui--align-middle mui--text-center"><ButtonView key={shortid.generate()} color=""  id={"btnShow-" + el.IdOrg} onClick={this.showOrg} text="просмотр"></ButtonView></td></tr> )
			}
			</tbody>
			<tfoot>
			<tr>
				<td></td>
			</tr>
			</tfoot>
			</table>
			);
	}
} 
export default PreviewTable;