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
/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Appbar from 'muicss/lib/react/appbar';
import Panel from 'muicss/lib/react/panel';

class ViewOrg extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
	}

	showOrgInfo(obj){
		/*всего 43 пункта ??*/
		return (
			<Container fluid={true}>
			<Row style = {{backgroundColor: "#07B49C"}}>
				<Col md = "4" className="mui--text-center">Поле</Col>
				<Col md = "8" className="mui--text-center">в хранилище</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-center">Название организации</Col>
				<Col md = "8" className="mui--text-center">{obj.NameOrg}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-center">Название организации без ОПФ</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Наименование организации в дательном падеже</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-center">Сокращённое название организации</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-center">Сокращённое название по версии Минобрнауки России</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>

			<Row>
				<Col md = "4" className="mui--text-center">Название на английском языке</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Ведомственная подчинённость</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Название головной организации</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Название в уставе начинается с маленькой буквы</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Является грузом</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">ИНН/КПП организации</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Сведения об учёте в налоговом органе</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Присвоение ОГРН</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Почтовый адрес</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Юридический адрес</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Код по ОКПО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Код по ОКАТО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Код по ОКТМО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Код по ОКФС</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Код по ОКОПФ 2012</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Код по ОКОПФ (старый)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Код по ОКОПФ 2015</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Основной вид деятельности по ОКВЭД</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Основной вид деятельности по ОКВЭД (ред.2)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Контакты организации</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Контакты руководителя</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Главный бухгалтер</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Контакты главного бухгалтера</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Лицо ответсвтенное за бюджетное обязательство</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Контакты лица ответсвтенного за БО</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Банк</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">УФК</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Реквизиты для государственных организаций не федерального подчинения</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">КБК</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Генеральное разрешение</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Название учредительного документа</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Документ-основание для руководителя</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Организация ликвидирована</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Сведения о переименовании</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Id организации в хранилище</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Служебные данные</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Контакты ЭБ</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Документы</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			
			<Row>
				<Col md = "4" className="mui--text-center">Вхождение в приказ об изменениях (только активные конкурсы)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Конкурс (№ приказа о назначении стипендии)</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			<Row>
				<Col md = "4" className="mui--text-center">Список задействованных источников</Col>
				<Col md = "8" className="mui--text-center">{}</Col>
			</Row>
			
			</Container>
			);
	}

	render(){
		return (
			<Modal>
			<h1>DEBUG!</h1>
			<Appbar>{this.props.dataInfo[0].NameOrgShort}</Appbar>
			<Panel>{this.showOrgInfo(this.props.dataInfo[0])}</Panel>
			</Modal>
			);
	}

}

export default ViewOrg;
