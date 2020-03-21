import React, {Component} from "react";
import API from "./utils/API";


class Employees extends Component {
    state = {
    }

    componentDidMount() {
        API.getUsers().then(function(results) { console.log(results) });
    }

    render() {
        // this.state.users

        return (
            <p>test</p>
            // <EmployeeCard employee={employee} />
        )
    }
}

// set API results in the component state (this.setState...)
// in the render function, iterate over results (.each or .map or something), and for each one, add an EmployeeCard, passing in the employee
// updating the EmployeeCard component to work with the actual API result


export default Employees;
