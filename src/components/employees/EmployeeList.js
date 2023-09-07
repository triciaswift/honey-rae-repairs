import { useEffect, useState } from "react";
import "./Employee.css";
import { getStaffUsers } from "../../services/userService";
import { User } from "../users/User";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => {
        return (
          <Link to={`/employees/${employee.id}`} key={employee.id}>
            <User user={employee} />
          </Link>
        );
      })}
    </div>
  );
};
