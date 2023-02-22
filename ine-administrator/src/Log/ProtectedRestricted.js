import { Navigate, Outlet } from 'react-router-dom'

// La función ProtectedRestricted se utiliza para proteger las rutas restringidas que solo deben ser accedidas por usuarios autorizados.
const ProtectedRestricted = () => {
  // Se verifica si el usuario tiene acceso restringido en la sesión actual.
  return (sessionStorage.getItem("isRestricted")==='true') 
    // Si el usuario tiene acceso restringido, se redirige al usuario a la página restringida.
    ? <Navigate to="/restricted" /> 
    // Si el usuario no tiene acceso restringido, se renderiza el componente Outlet.
    : <Outlet />
}
// Se exporta la función ProtectedRestricted como un componente.
export default ProtectedRestricted;