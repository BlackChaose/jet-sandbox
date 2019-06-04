import React from 'react';
import ReactDOM from 'react-dom';
class TableView extends React.Component{
	render(){
		return (
			<table>
			<thead>
			{
				this.props.headers.map(function(el){
				 return (<th>{el}</th>);
				})
			}
			</thead>
			<tbody>
			{

			this.props.rows.map(el => <tr>{el.map( e => <td>{e}</td> )} </tr> )
			}
			</tbody>
			<tfooter>
			<tr colspan>
				<td> &copy; Moscow, 2018</td>
			</tr>
			</tfooter>
			</table>
			);
	}
} 
export default TableView;