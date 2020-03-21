import React, {Component} from "react";
import API from "./utils/API";


class Employees extends Component {
    state = {
        people:[]
    }

    componentDidMount() {
        API.getUsers()
        .then(res => {
            const people = res.data.results;
            this.setState({ people });
            console.log(people)
          })
      }

    render() {
        // this.state.users
        return (
            <ul>
            { this.state.people.map(people => <li>{people.name.first}</li>)}
          </ul>
        )
    }
}

// set API results in the component state (this.setState...)
// in the render function, iterate over results (.each or .map or something), and for each one, add an EmployeeCard, passing in the employee
// updating the EmployeeCard component to work with the actual API result


export default Employees;
