import React from "react";
import "./style.css";


function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light">
<div className="dropdown">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Sort  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">A-Z</a>
    <a className="dropdown-item" href="#">Z-A</a>
  </div>
</div>
<div className="dropdown">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Filter  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" >A-Z</a>
    <a className="dropdown-item" >Z-A</a>
  </div>
</div>
</nav>
  );
}

export default Navbar;