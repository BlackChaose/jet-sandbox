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

class ViewOrg extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}

	showOrgInfo(obj){
		/*всего 43 пункта ??*/
		/*@todo добить!!!*/
		return (
			<Container fluid={true}>
			<Row style = {{backgroundColor: "#07B49C"}}>
				<Col md = "4" className="mui--text-left"><Cell>Поле</Cell></Col>
				<Col md = "8" className="mui--text-center"><Cell>в хранилище</Cell></Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell>Название организации</Cell></Col>
				<Col md = "8" className="mui--text-center">{obj.NameOrg}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell>Название организации без ОПФ</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell>Наименование организации в дательном падеже</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell>Сокращённое название организации</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell>Сокращённое название по версии Минобрнауки России</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-left"><Cell>Название на английском языке</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left"><Cell>Ведомственная подчинённость</Cell></Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Название головной организации</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Название в уставе начинается с маленькой буквы</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Является грузом</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">ИНН/КПП организации</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Сведения об учёте в налоговом органе</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Присвоение ОГРН</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Почтовый адрес</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Юридический адрес</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Код по ОКПО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Код по ОКАТО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Код по ОКТМО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Код по ОКФС</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Код по ОКОПФ 2012</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Код по ОКОПФ (старый)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Код по ОКОПФ 2015</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Основной вид деятельности по ОКВЭД</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Основной вид деятельности по ОКВЭД (ред.2)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Контакты организации</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Контакты руководителя</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Главный бухгалтер</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Контакты главного бухгалтера</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Лицо ответсвтенное за бюджетное обязательство</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Контакты лица ответсвтенного за БО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Банк</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">УФК</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Реквизиты для государственных организаций не федерального подчинения</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">КБК</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Генеральное разрешение</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Название учредительного документа</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Документ-основание для руководителя</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Организация ликвидирована</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Сведения о переименовании</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Id организации в хранилище</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Служебные данные</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Контакты ЭБ</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Документы</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			
			<Row>
				<Col md = "4" className="mui--text-left">Вхождение в приказ об изменениях (только активные конкурсы)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Конкурс (№ приказа о назначении стипендии)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-left">Список задействованных источников</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			</Container>
			);
	}

	render(){
		return (
			<Modal>
			<div className="ViewOrg">
			<Appbar>{this.props.dataInfo.NameOrgShort}</Appbar>
			<div className="ViewOrgBody">{this.showOrgInfo(this.props.dataInfo)}</div>
			</div>
			</Modal>
			);
	}

}

export default ViewOrg;
