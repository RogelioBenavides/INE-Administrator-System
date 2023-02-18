import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
  return (sessionStorage.getItem("isLoggedIn")==='true') ? <Outlet /> :  <Navigate to='/login' />
}
export default Protected;