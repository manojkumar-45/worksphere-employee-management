import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { updateEmployee } from "../services/employeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    name: "",
    role: "",
    salary: "",
    phoneno: ""
  });

  // Load employee details to prefill
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employees`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then((res) => {
        const selected = res.data.find((e) => e.id == id);
        if (selected) setEmp(selected);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateEmployee(id, emp);
    navigate("/employees");
  };

  return (
    <div>
      <Navbar />

    <div className="update-employee-container">
  <div className="update-card">
    <h2>Update Employee</h2>

    <label>Name</label>
    <input
      type="text"
      name="name"
      className="update-input"
      value={emp.name}
      onChange={handleChange}
    />

    <label>Role</label>
    <input
      type="text"
      name="role"
      className="update-input"
      value={emp.role}
      onChange={handleChange}
    />

    <label>Salary</label>
    <input
      type="number"
      name="salary"
      className="update-input"
      value={emp.salary}
      onChange={handleChange}
    />

    <label>Phone No</label>
    <input
      type="text"
      name="phoneno"
      className="update-input"
      value={emp.phoneno}
      onChange={handleChange}
    />

    <button className="update-btn" onClick={handleUpdate}>
      Update Employee
    </button>
  </div>
</div>


    </div>
  );
};

export default UpdateEmployee;
