import { Navigate } from 'react-router-dom'
const ProtectedRestricted = ({ children }) => {
  if (sessionStorage.getItem("isRestricted") === 'true') {
    return <Navigate to="/restricted" replace />
  }
  return children;
}
export default ProtectedRestricted;