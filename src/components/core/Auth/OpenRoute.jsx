import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  if (token === null) {
    return children
  } else {
    if (user.accountType === "Student") {
      return <Navigate to="/dashboard/student" />
    } else if (user.accountType === "Admin") {
      return <Navigate to="/dashboard/admin" />
    } 
  }
}

export default OpenRoute