import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
  return (sessionStorage.getItem("isRestricted")==='true') ? <Navigate to="/restricted" /> :
  (sessionStorage.getItem("isLoggedIn")==='true') ? <Outlet /> :  <Navigate to='/login' />
}
export default Protected;