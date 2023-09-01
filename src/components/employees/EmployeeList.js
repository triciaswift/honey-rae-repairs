import { useEffect, useState } from "react";
import "./Employee.css";
import { getStaffUsers } from "../../services/userService";
import { User } from "../users/User";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => {
        return <User user={employee} key={employee.id} />;
      })}
    </div>
  );
};
