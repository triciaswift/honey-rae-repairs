export const getAllEmployees = () => {
  return fetch(`http://localhost:8088/employees?_expand=user`).then((res) =>
    res.json()
  );
};

/* -------------- Goes with extra example in ticket.js ---------------- */
/*
export const getEmployeeById = (employeeId) => {
  return fetch(
    `http://localhost:8088/employees/${employeeId}?_expand=user`
  ).then((res) => res.json());
};
*/
