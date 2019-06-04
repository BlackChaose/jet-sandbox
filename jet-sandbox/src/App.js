import React from 'react';
import './App.css';
import './TableView.css';
import TableView from './TableView.js';

function App() {
  var headers = ['#', 'name', 'town', 'age','man/wooman'];
  var rows = [['1', 'Rob', 'Ontario', '22', 'man'],['2', 'Stive', 'Boston','35', 'man'],['3', 'Margo', 'Paris','28', 'woman'],['4', 'Juan', 'Madrid','37', 'man'], ['5', 'Ana', 'Barcelona','25', 'woman']];

  return (
    <div className="jet-sandbox">
      <header className="jet-sandbox">
      Jet Sandbox
      </header>
    <TableView headers={headers} rows = {rows} />    
    </div>
  );
}

export default App;
