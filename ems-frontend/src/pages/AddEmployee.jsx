import React from 'react'
import { useEffect, useState } from "react";
import { getEmployees, addEmployee, deleteEmployee } from "../services/employeeService";


const AddEmployee = () => {
  const [list, setList] = useState([]);
  const [emp, setEmp] = useState({ name: "", role: "", salary: "",phoneno: "" });

 const loadEmployees = async () => {
    const res = await getEmployees();
    setList(res.data);
  };

   const handleAdd = async () => {
      await addEmployee(emp);
      setEmp({ name: "", role: "", salary: "",phoneno: "" });
      loadEmployees();
    };

  return (


    <div>
       <div className="add-employee-container">
  <div className="emp-card">

    <h2>Add Employee</h2>

    <label>First Name</label>
    <input
      className="emp-input"
      value={emp.name}
      onChange={(e) => setEmp({ ...emp, name: e.target.value })}
    />

    <label>Role</label>
    <input
      className="emp-input"
      value={emp.role}
      onChange={(e) => setEmp({ ...emp, role: e.target.value })}
    />

    <label>Salary</label>
    <input
      className="emp-input"
      value={emp.salary}
      onChange={(e) => setEmp({ ...emp, salary: e.target.value })}
    />

    <label>Phone No</label>
    <input
      className="emp-input"
      value={emp.phoneno}
      onChange={(e) => setEmp({ ...emp, phoneno: e.target.value })}
    />

    <button className="submit-btn" onClick={handleAdd}>
      Add Employee
    </button>

  </div>
</div>

    </div>
  )
}

export default AddEmployee