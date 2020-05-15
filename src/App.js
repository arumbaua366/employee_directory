import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import FilterEmployee from "./components/CardBtn/filterEmployee";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  filterEmployees = employmentlength => {
    const employees = this.state.employees.filter(employee => employee.employmentlength >= 4)
    console.log(employees)
    this.setState({ employees });
  };

  sortEmployees = employmentlength => {
    const employees = this.state.employees.sort((a, b) => b.employmentlength - a.employmentlength)

    this.setState({ employees });
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render an EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Reynholm Industries Employee Directory

        <FilterEmployee 
        filterEmployee={this.filterEmployees}
        sortEmployee={this.sortEmployees} />

        </Title>


        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            title={employee.title}
            department={employee.department}
            employmentlength={employee.employmentlength}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
