import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

// Add JWT token to every request
function authHeader() {
  const token = localStorage.getItem("token"); // token saved after login
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

export const getEmployees = () => axios.get(API_URL, authHeader());

export const addEmployee = (employee) =>
  axios.post(API_URL, employee, authHeader());

export const deleteEmployee = (id) =>
  axios.delete(`${API_URL}/${id}`, authHeader());

export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/${id}`, employee, authHeader());

