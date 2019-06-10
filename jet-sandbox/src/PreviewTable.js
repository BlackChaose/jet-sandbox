/*PreviewTable*/
import React from 'react';
import ReactDOM from 'react-dom';
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
	//FIXME: change for Preview Table with buttons "Show" -> redirect ot org card
	render(){
		return (
			<table>
			<thead>			
				 <th>{this.props.header[0]}</th>
				 <th>{this.props.header[1]}</th>
				 <th>{this.props.header[2]}</th>			
			</thead>
			<tbody>
			{
			this.props.rows.map(el => <tr><td>{this.showIndex()}</td><td>{el.NameOrg}</td><td><button id={"btnShow-" + el.IdOrg}>показать</button></td></tr> )
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