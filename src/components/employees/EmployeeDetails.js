import { useParams } from "react-router-dom";
import "./Employee.css";
import { useEffect, useState } from "react";
import { getEmployeeByUserId } from "../../services/employeeService";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(userId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [userId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate : </span>
        {employee.rate}
      </div>
      <footer className="employee-footer">
        Currently working on {employee.employeeTickets?.length} tickets
      </footer>
    </section>
  );
};
