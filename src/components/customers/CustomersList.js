import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import "./Customers.css";
import { User } from "../users/User";
import { Link } from "react-router-dom";

export const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customer) => {
        return (
          <Link to={`/customers/${customer.id}`} key={customer.id}>
            <User user={customer} />
          </Link>
        );
      })}
    </div>
  );
};
