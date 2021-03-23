import React, { Component } from "react";
import Title from "../Title/index";
import Search from "../Search/index";
import EmployeeTable from "../EmployeeTable/index";
import API from "../../utils/API";
import "./style.css";

class Container extends Component {
  // initial state
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    sortingDirection: "asc", // @audit
  };

  // when component mounts, get list of employees
  componentDidMount() {
    API.getEmployeeList()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }
  // handleInputChange
  handleInputChange = async (event) => {
    const value = event.target.value;
    await this.setState({ search: value });
    this.filterEmployees(value); //@audit-issue
  };

  // Filter the list based on age...
  filteredEmployees() {
    this.setState({
      filteredEmployees: this.state.employees.sort((a, b) => {
        let ageA = a.this.state.employee.age.dob;
        let ageB = b.this.state.employee.age.dob;
        if (ageA < ageB) return -1;
        if (ageA > ageB) return 1;
        return 0;
        // return employee.dob.age.sort(key);
      }),
    });
  }

  // this.state.employees.sort((a, b) => {
  //   let ageA = a.age + a.name;
  //   let ageB = b.age + b.name;
  //   if (ageA < ageB) return -1
  //   if (ageA > ageB) return 1;
  //   return 0
  // });

  sortAge = (key) => {
    // let ageA = a.dob.age + a.name.first;
    // let ageB = b.dob.age + b.name.first;
    let sortedAges;
    let direction;
    // Sort by age or first name
    {
      if (this.state.sortingDirection === "asc") {
        sortedAges = this.state.filteredEmployees.sort((a, b) =>
          a.dob.age > b.dob.age ? 1 : -1
        );
        direction = "dsc";
      } else {
        sortedAges = this.state.filteredEmployees.sort((a, b) =>
          a.dob.age < b.dob.age ? 1 : -1
        );
        direction = "asc";
      }

      // nothing selected by default
    }
    this.setState({
      filteredEmployees: sortedAges,
      sortingDirection: direction,
    });
  };

  // render Container with imported components
  render() {
    return (
      <div className="container-fluid">
        <Title />
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable
          state={this.state}
          filterEmployees={this.filterEmployees}
        />
      </div>
    );
  }
}

export default Container;
