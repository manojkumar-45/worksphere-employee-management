import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import ProtectedRoute from "./auth/ProtectedRoute";
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from "./pages/UpdateEmployee";
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          {/* Public Route */}
          <Route path="/" element={<LoginPage />} />

          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                < Navbar />
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Employees */}
          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                < Navbar />
                <Employees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addemployee"
            element={
              <ProtectedRoute>
                < Navbar />
                <AddEmployee />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/updateemployee/:id"
            element={
              <ProtectedRoute>
                <UpdateEmployee />
               </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
