import { useAuth } from "../auth/useAuth";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="dashboard">

      <button onClick={logout} className="logout-btn">
        Logout
      </button>

<div className="menu">

      <div className="menu-one">
        <Link to="/addemployee">Add Employee</Link>
      </div>
      <div className="menu-two">
        <Link to="/employees">Manage Employees</Link>
      </div>
</div>
    </div>
  );
}
