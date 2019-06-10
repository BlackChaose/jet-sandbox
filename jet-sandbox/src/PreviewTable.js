/**
 * PreviewTable - component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './PreviewTable.css';
class PreviewTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rowLength: props.rowLength,
			index: 0,
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
  						alert({data:myJson});
  						return {data:myJson};
  					})

    		
	}

	/** 
	 * @todo event handlers for btnShow!!!!!
	 */
	render(){
		return (
			<table className="PreviewTable">
			<thead>			
				 <th className="PreviewTable">{this.props.header[0]}</th>
				 <th className="PreviewTable">{this.props.header[1]}</th>
				 <th className="PreviewTable">{this.props.header[2]}</th>			
			</thead>
			<tbody>
			{
			this.props.rows.map(el => <tr className="PreviewTable"><td className="PreviewTable">{this.showIndex()}</td><td className="PreviewTable">{el.NameOrg}</td><td><button   className="PreviewTable" id={"btnShow-" + el.IdOrg} onClick={this.showOrg}>показать</button></td></tr> )
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