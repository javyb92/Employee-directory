import React from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron"
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/Wrapper"
import Employees from "./components/Employees"


function App() {
  return (
    <Wrapper>
      <Jumbotron />
      {/* <Navbar /> */}
      <Employees />
    </Wrapper>

  );
}

export default App;
