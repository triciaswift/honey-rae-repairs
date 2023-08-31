import { useEffect, useState } from "react";
import "./Employee.css";
import { getStaffUsers } from "../../services/userService";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);
};
