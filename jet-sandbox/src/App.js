import React from 'react';
import './App.css';
import './TableView.css';
import './Loader.css';
import Loader from './Loader.js';
import TableView from './TableView.js';

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
//FIXME: port 3042 => 3043
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
      console.log(Array.isArray(self.state.data));

      var arr = [];      
      
      self.state.data.reduce(function(acc, el){        
        var buf = [];
        Object.keys(el).forEach(function(key, idx) {           
           buf.push(el[key]);               
      });
        acc.push(buf);
        return acc;

      }, arr);
      //TODO:FIXME: add button показать для каждой строки     
      return <TableView headers = {Object.keys(this.state.data[0])} rows = {arr} />

    }    
  }

componentDidMount() {
    this.router(this, 'http://localhost:3042/table/:Org/:byName');
  }

  render() {  
    return (
    <div className="jet-sandbox">
      <header className="jet-sandbox">
      Jet Sandbox
      </header>
    <TableView headers = {this.state.headers} rows = {this.state.rows} rowLength = {5}/>  
    <button className = "btn">редактировать</button>  
    <button className = "btn btn-info">показать</button>
    {this.loadTable(this)}
    </div>
  );
}
}

export default App;
