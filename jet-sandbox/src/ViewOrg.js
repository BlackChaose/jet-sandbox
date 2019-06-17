/*
 * 	ViewOrg component
 */
/*react*/
import React from 'react';
import ReactDOM from 'react-dom';
/*component style*/
import './ViewOrg.css';
/*for key generation*/
import shortid from 'shortid';
/*utility*/
import _ from 'lodash';
/*other components*/
import Loader from './Loader.js';
import ButtonView from './ButtonView.js';
import Modal from './Modal.js';
import Cell from './Cell.js';
/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Appbar from 'muicss/lib/react/appbar';
/*utility*/
//import _ from 'lodash';

class ViewOrg extends React.Component{
	constructor(props){
		super(props);
	}

	showOrgInfo(objData){
		/*всего 43 пункта ??*/
		/*@todo добить!!!*/
		console.log("in showOrgInfo in ViewOrg component! ");
		console.log(objData);
		if(_.size(objData) > 0){
		return (			
			<Container fluid={true}>
			<Row style = {{backgroundColor: "#07B49C"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Поле</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">в хранилище</Cell></Col>
			</Row>

			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Название организации</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.NameOrg}</Cell></Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Название организации без ОПФ</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.NameOrgMain}</Cell></Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Наименование организации в дательном падеже</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{}</Cell></Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Сокращённое название организации</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.NameOrgShort}</Cell></Col>
			</Row>

			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Сокращённое название по версии Минобрнауки России</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.NameOrgShort2}</Cell></Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Название на английском языке</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.NameOrgEng}</Cell></Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Ведомственная подчинённость</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.IdVedomstvo}</Cell></Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Название головной организации</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{}</Cell></Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Название в уставе начинается с маленькой буквы</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{}</Cell></Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Является вузом</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.IsVuz}</Cell></Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">ИНН/КПП организации</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.INN}</Cell></Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Сведения об учёте в налоговом органе</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Присвоение ОГРН</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell subclass="content">{objData.OGRN}</Cell></Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Почтовый адрес</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Юридический адрес</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Код по ОКПО</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Код по ОКАТО</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Код по ОКТМО</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Код по ОКФС</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Код по ОКОПФ 2012</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Код по ОКОПФ (старый)</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Код по ОКОПФ 2015</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Основной вид деятельности по ОКВЭД</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Основной вид деятельности по ОКВЭД (ред.2)</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Контакты организации</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Контакты руководителя</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Главный бухгалтер</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Контакты главного бухгалтера</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Лицо ответсвтенное за бюджетное обязательство</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Контакты лица ответсвтенного за БО</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Банк</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">УФК</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Реквизиты для государственных организаций не федерального подчинения</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">КБК</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Генеральное разрешение</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Название учредительного документа</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Документ-основание для руководителя</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Организация ликвидирована</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Сведения о переименовании</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Id организации в хранилище</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Служебные данные</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Контакты ЭБ</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Документы</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Вхождение в приказ об изменениях (только активные конкурсы)</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row style ={{backgroundColor: "#FAFAFA"}}>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Конкурс (№ приказа о назначении стипендии)</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell subclass="header">Список задействованных источников</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			</Container>
			);
}else return <div> error: No Data!</div>
	}
		
	render(){
		let objData={};
		if(this.props.dataInfo.length>0){
			objData = this.props.dataInfo[0];
		}
		return (
			<Modal showClose={true} viewWin={this.props.viewWin}>
			<div className="ViewOrg">
			<Appbar className="mui--text-left">
			{objData.NameOrgShort}
			{/*<CloseModal style={{"textAlign": "right"}}/>			*/}
			</Appbar>
			<div className="ViewOrgBody">{this.showOrgInfo(objData)}</div>
			</div>
			</Modal>
			);
	}

}

export default ViewOrg;
