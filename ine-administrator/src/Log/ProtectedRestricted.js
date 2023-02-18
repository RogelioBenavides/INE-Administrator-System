import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRestricted = () => {
  return (sessionStorage.getItem("isRestricted")==='true') ? <Navigate to="/restricted" /> : <Outlet />
}

export default ProtectedRestricted;