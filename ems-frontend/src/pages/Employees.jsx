import { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
} from "../services/employeeService";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [emp, setEmp] = useState({
    name: "",
    role: "",
    salary: "",
    phoneno: "",
  });

  const loadEmployees = async () => {
    const res = await getEmployees();
    setList(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <>
      <div className="employee-page">
        <div className="employee-header">
          <h2>Employees</h2>

          <button
            onClick={() => {
              navigate("/addemployee");
            }}
          >
            Add Employee
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Salary</th>
              <th>PhoneNo</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {list.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.role}</td>
                <td>{e.salary}</td>
                <td>{e.phoneno}</td>

                <td>
                  <button
                    className="update-bt"
                    onClick={() => {
                      navigate(`/updateemployee/${e.id}`);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
