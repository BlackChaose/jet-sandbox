import React from 'react';
import ReactDOM from 'react-dom';
import './TableView.css';
class TableView extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rowLength: props.rowLength,
		};

	}
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