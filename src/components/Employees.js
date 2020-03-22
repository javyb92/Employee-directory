import React, {Component} from "react";
import API from "./utils/API";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
// import Navbar from "./Navbar/Navbar.js"


class Employees extends Component {
    state = {
        people:[]
    }


//API query, loads on startup of page
    componentDidMount() {
        API.getUsers()
        .then(res => {
            const people = res.data.results;
            this.setState({ people });
            // console.log(people)
          })
      }


// sort by last name alphabetically (not working)
    // sortAscending = () => {
    //     const { people } = this.state;
    //     people.sort(function(a, b){
    //         if(a.lastName < b.lastName) { return -1; }
    //         return 0;
    //     })
    //   }
    
    // sortDescending = () => {
    //     const { people } = this.state;
    //     people.sort(function(a, b){
    //         if(a.lastName < b.lastName) { return 1; }
    //         return 0;
    //     })
    //   }

//EmployeeCard renders, variables matched up with results/map from the API query
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
