import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
// import MyProfile from "./components/core/Dashboard/MyProfile"
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import AdminDashboard from "./components/core/Dashboard/AdminDashboard/Admin";
import StudentDashboard from "./components/core/Dashboard/StudentDashboard/Student";

function App() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {user?.accountType === "Student" ? (
            <Route path="dashboard/student" element={<StudentDashboard />} />
          ) : (
            <Route path="dashboard/admin" element={<AdminDashboard />} />
          )}
          {/* <Route 
            path="dashboard/:accountType" 
            element={
             
                 user?.accountType === "Student" ? 
                  <StudentDashboard /> : 
                  <AdminDashboard />
              
            } 
          /> */}
        </Route>

        {/* <Route path="dashboard/Settings" element={<Settings />} />    */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
