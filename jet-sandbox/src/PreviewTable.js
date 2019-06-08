/*PreviewTable*/
import React from 'react';
import ReactDOM from 'react-dom';
class PreviewTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rowLength: props.rowLength,
		};

	}
	//FIXME: change for Preview Table with buttons "Show" -> redirect ot org card
	render(){
		return (
			<table>
			<thead>
			{
				this.props.headers.map((el)=>{
				 return (<th>{el}</th>);
				})
			}
			</thead>
			<tbody>
			{

			this.props.rows.map(el => <tr>{el.map( e => <td>{e}</td> )} </tr> )
			}
			</tbody>
			<tfoot>
			<tr>
				<td colSpan={this.state.rowLength}>  &copy; Moscow, 2018</td>
			</tr>
			</tfoot>
			</table>
			);
	}
} 
export default TableView;