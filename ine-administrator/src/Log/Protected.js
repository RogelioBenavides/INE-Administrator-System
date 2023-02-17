import { Navigate } from 'react-router-dom'
function Protected({ children }) {
  if (!(sessionStorage.getItem("isLoggedIn") === 'true')) {
    return <Navigate to="/login" replace />
  }
  return children;
}
export default Protected;