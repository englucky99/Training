import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './header';
import SearchComponent from './searchComponent';
import DataTableComponent from './dataTableComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <SearchComponent/>
      <DataTableComponent/>
    </div>
  );
}

export default App;
