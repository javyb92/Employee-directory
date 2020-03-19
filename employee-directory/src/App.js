import React from 'react';
import './App.css';
import EmployeeCard from "./components/EmployeeCard"
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <EmployeeCard />
    </div>
  );
}

export default App;
