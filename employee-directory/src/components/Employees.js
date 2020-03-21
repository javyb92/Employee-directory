import React, {Component} from "react";
import API from "./utils/API";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";


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
        return (
            <div>
            { this.state.people.map(people => 
            <EmployeeCard
            firstName= {people.name.first} 
            lastName={people.name.last} 
            email={people.email} 
            phone={people.phone}
            image={people.picture.large}  />)}
          
          
        </div>
        );
    }
}

// set API results in the component state (this.setState...)
// in the render function, iterate over results (.each or .map or something), and for each one, add an EmployeeCard, passing in the employee
// updating the EmployeeCard component to work with the actual API result


export default Employees;
