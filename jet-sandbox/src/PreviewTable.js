/**
 * PreviewTable - component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './PreviewTable.css';
import shortid from 'shortid';
import _ from 'lodash';
/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
/*other components*/
import Loader from './Loader.js';
import ButtonView from './ButtonView.js';
import Modal from './Modal.js';
import ViewOrg from './ViewOrg.js';


class PreviewTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rowLength: props.rowLength,
			index: 0,
			answer: {},
			LoaderView: false,
			ViewOrgInfo: false,
			OrgInfo: {},
		};
		this.index = 0;
	}

	showIndex(){
		let buf = this.index;
		buf+=1;
		this.index = buf;
		return buf;
	}

	showLoader(self){
		if(self.state.LoaderView === true){
			return <Modal><div className="ModalCenter"><Loader/></div></Modal>
		}
		else return null;
	}

	showViewOrg(self){
		if(self.state.ViewOrgInfo === true){
			return <ViewOrg dataInfo={self.state.OrgInfo} viewWin={true}></ViewOrg>
		}else {
			console.log("not show ViewOrg");
			return null;};
	}


	showOrg(e){
		//@fixme: render info about organization or redirect
			// console.log(e.currentTarget);
		    e.preventDefault();
		    let rgx = /[^btnShow-]*\d/ig;
		    let s = e.currentTarget.parentElement.id;
		    let resId = s.match(rgx);
		    let path = "http://localhost:3042/api/table/Org/" + resId;
		    // console.log("!! click on " + e.target.id + " ||| " + path);
		    
		    //fixme: - not work. parser js not view this. ... 
		    this.setState({LoaderView: true});
		    this.showLoader(this);		  
		    let self = this;
	        fetch(path)
  					.then(function(response){
  							
  							self.setState({LoaderView: false});
		    				self.showLoader(self);
      						return response.json();

  					})
  					.then(function(myJson){
  						 self.setState({ViewOrgInfo: true});
  						 self.setState({OrgInfo: myJson});
  					});
    		
	}

	/** 
	 * @todo event handlers for btnShow!!!!! + add MUI grid and button "просмотр" - for descktop - text, for mobile - icon	
	 */
	render(){
		return (<>
			{this.showLoader(this)}
			{this.showViewOrg(this)}
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
			this.props.rows.map(el => <tr className="PreviewTable" key={shortid.generate()}><td className="PreviewTable">{this.showIndex()}</td><td className="PreviewTable">{el.NameOrg}</td><td className="mui--align-middle mui--text-center"><ButtonView key={shortid.generate()} color=""  idBtnView={"btnShow-" + el.IdOrg} onClick={this.showOrg.bind(this)} text="просмотр"></ButtonView></td></tr> )
			}
			</tbody>
			<tfoot>
			<tr>
				<td></td>
			</tr>
			</tfoot>
			</table>
			</>
			);
	}
} 
export default PreviewTable;