import "./Navbar.css";
import { FaRegBuilding } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <FaRegBuilding className="nav-icon" />
        <h2>WorkSphere - Employee Management System</h2>
      </div>
    </div>
  )
}

export default Navbar