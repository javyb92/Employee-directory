import React from "react";
import "./style.css";



// {props.(variable here) inserts api results}
function EmployeeCard(props) {
  return (
    <div className="employeeCard">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-1">
              <img src={props.image} className="card-img" alt= "{props.firstName}{props.lastName}" ></img>
          </div>
          <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">Name: {props.firstName} {props.lastName}</p>
            <p className="card-text">Email: {props.email}</p>
            <p className="card-text">Phone: {props.phone}</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default EmployeeCard;