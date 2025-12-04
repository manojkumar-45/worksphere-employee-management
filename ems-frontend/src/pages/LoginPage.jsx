import { useState } from "react";
import api from "../api/axiosConfig";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("http://localhost:8080/auth/login", { username, password });
      const token = res.data;

      if (!token || token.includes("Invalid")) {
        setMsg("Invalid Credentials");
        return;
      }

      login(token);
      navigate("/dashboard");
    } catch (error) {
      setMsg("Login error");
    }
  };

  return (
<div className="total-div">
    <div className="left-container">
       <img className="left-img" src="src\assets\img-4.png" alt="image" />
    </div>

    <div className="right-container">

    <div className="login-container">
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {msg && <p className="error">{msg}</p>}
    </div>
    </div>
</div>
  );
}
