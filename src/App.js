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
import DSA from "./pages/DSA";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import AdminDashboard from "./components/core/Dashboard/AdminDashboard/Admin";
import StudentDashboard from "./components/core/Dashboard/StudentDashboard/Student";
import DataStructures from "./components/core/DSA/DataStructures";
import Algorithms from "./components/core/DSA/Algorithms";
import ProgrammingQues from "./pages/ProgrammingQues";
import ShowDetailQuestion from "./components/core/ProgrammingQuestion/ShowDetailQuestion";

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
        </Route>

        <Route path="/data-structures-and-algorithms" element={<DSA />} />
        <Route path="/data-structures" element={<DataStructures />}/>
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/programming-questions" element={<ProgrammingQues />}/>
        <Route path="/programming-questions/:questionId" element={<ShowDetailQuestion />}/>
        {/* <Route path="dashboard/Settings" element={<Settings />} />    */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
