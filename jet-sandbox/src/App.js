import React from 'react';
import './App.css';
import './TableView.css';
import TableView from './TableView.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      headers: ['#', 'name', 'town', 'age','man/wooman'],
      rows:  [['1', 'Rob', 'Ontario', '22', 'man'],['2', 'Stive', 'Boston','35', 'man'],['3', 'Margo', 'Paris','28', 'woman'],['4', 'Juan', 'Madrid','37', 'man'], ['5', 'Ana', 'Barcelona','25', 'woman']],
      data: [],
     };
  }  

  getData(self){
    fetch('http://localhost:3043/api/table/Org')
  .then(function(response){
      return response.json();
  })
  .then(function(myJson) {    
    console.log(JSON.stringify(myJson));
    self.setState({data:myJson});  
  });  
  }

componentDidMount() {
    this.getData(this);
    console.warn("dataFromServer :=> ");
    console.warn(this.state.data);
    console.log(this.state.rows);
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

    </div>
  );
}
}

export default App;
