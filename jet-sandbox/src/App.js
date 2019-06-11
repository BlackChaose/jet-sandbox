/**
 * @todo: routes for redirect to Org's cards
 * @todo: handler&views for PreviewTable - List Orgs's with buttons view(go to org's card)
 */
/**
 * App - SPA for OrgsStore
 */
import React from 'react';
import './App.css';
/*MUI-grid*/
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
/*jet-sandbox components*/
import Loader from './Loader.js';
import TableView from './TableView.js';
import PreviewTable from './PreviewTable.js';
import SearchForm from './SearchForm.js';
import Pagination from './Pagination.js';
import Menu from './Menu.js';
import SysInfo from './SysInfo.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      headers: ['#', 'name', 'town', 'age','man/wooman'],
      rows:  [['1', 'Rob', 'Ontario', '22', 'man'],['2', 'Stive', 'Boston','35', 'man'],['3', 'Margo', 'Paris','28', 'woman'],['4', 'Juan', 'Madrid','37', 'man'], ['5', 'Ana', 'Barcelona','25', 'woman']],
      data: [],
      dataRows: []
     };
  }  

  getData(self,path){
  fetch(path)
  .then(function(response){
      return response.json();
  })
  .then(function(myJson) {    
    self.setState({data:myJson});  
  });  
  }

  router(self,rt){
    switch(rt){
      case 'http://localhost:3042/table/Org': self.getData(self, 'http://localhost:3042/api/table/Org'); break;
      case 'http://localhost:3042/table/:Org/:byName': self.getData(self, 'http://localhost:3042/api/table/Org/NameOrg/100'); break;
    }
  }


  loadTable(self){
    if(self.state.data.length === 0){
      return <Loader />
    }else{
        return <PreviewTable header={["№ п/п","Название организации","действие"]} rows = {self.state.data} />
    }    
  }

componentDidMount() {
    this.router(this, 'http://localhost:3042/table/:Org/:byName');
  }

  render() {  
    return (
    <div className="jet-sandbox">
    <Container fluid={true}>
      <Row>
        <Col md = "10">
          <header className="jet-sandbox">
            Jet Sandbox
          </header>
        </Col>
      </Row>
      <Row>
          <SearchForm />
      </Row>
      <Row>
          <Col md="10">{this.loadTable(this)}</Col>
      </Row>
      <Row>
        <Col md="8" md-offset="1">
          <Pagination pages={['<<','<',1,2,3,4,5,6,7,8,9,10,'>','>>']} path={"http://localhost:3000/api/table/Org/list/"} />
        </Col>
      </Row>
      <Row>
        <Col md="8" md-offset="1">
          <SysInfo />
        </Col>
      </Row>      
    </Container>
    </div>
  );
}
}

export default App;
