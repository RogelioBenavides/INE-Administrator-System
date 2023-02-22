import { Navigate, Outlet } from 'react-router-dom'

// La función Protected se utiliza para proteger las rutas que solo deben ser accedidas por usuarios autenticados.
const Protected = () => {
  // Se verifica si el usuario está autenticado en la sesión actual.
  return (sessionStorage.getItem("isLoggedIn")==='true') 
    // Si el usuario está autenticado, se renderiza el componente Outlet.
    ? <Outlet /> 
    // Si el usuario no está autenticado, se redirige al usuario a la página de inicio de sesión.
    :  <Navigate to='/login' />
}
// Se exporta la función Protected como un componente.
export default Protected;