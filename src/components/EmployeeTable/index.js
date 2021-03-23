import React from "react";

function EmployeeTable(props) {
  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {props.state.filteredEmployees.map((employee) => {
            return (
              <tr key={employee.id.value}>
                <td>{employee.name.first}</td>
                <td>{employee.name.last} </td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
                <td>{employee.location.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
