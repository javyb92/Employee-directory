import React from "react";
import "./style.css";
import Employees from "../Employees";

//Use href to call function to sort
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light justify-content-between">
<div className="dropdown">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Sort  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href onClick={Employees.sortAscending}>A-Z</a>
    <a className="dropdown-item" href onClick={Employees.sortDescending}>Z-A</a>
  </div>
</div>
<div className="dropdown">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Filter  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href onClick="#"></a>
    <a className="dropdown-item" href onClick="#"></a>
  </div>
</div>
</nav>
  );
}

export default Navbar;