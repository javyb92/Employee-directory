import React from "react";
import "./style.css";
// import API from "../utils/API.js";






function EmployeeCard(props) {
  return (
    <div className="employeeCard">
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap"></img>
          <div className="card-body">
          <p className="card-text">Name: {props.name}</p>
          <p className="card-text">Email: {props.email}</p>
          <p className="card-text">Phone: {props.phone}</p>
          </div>
      </div>
    </div>
  );
}

export default EmployeeCard;