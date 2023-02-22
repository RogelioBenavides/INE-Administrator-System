import { Routes, Route, BrowserRouter } from "react-router-dom";
import Protected from "./Log/Protected";
import Restricted from "./Log/Restricted";
import Reset from "./Menu/Reset";
import LogIn from "./LogIn";
import Main from "./Menu/Main";
import ProtectedRestricted from "./Log/ProtectedRestricted";
import Candidates from "./Menu/Candidates";
import Presidents from "./Menu/Presidents";
import DateAndTime from "./Menu/DateAndTime";

// La función App se utiliza como componente principal que contiene la navegación entre páginas y la protección de rutas.
const App = () => {
  // Se inicializan las variables de sistema para el inicio de sesión y el acceso restringido.
  if (!sessionStorage.getItem("logInTries")) {
    sessionStorage.setItem("logInTries", 0);
  }
  if (!sessionStorage.getItem("isRestricted")) {
    sessionStorage.setItem("isRestricted", false);
  }
  if (!sessionStorage.getItem("isLoggedIn")) {
    sessionStorage.setItem("isLoggedIn", false);
  }
  return (
    // Se utiliza BrowserRouter para habilitar la navegación entre páginas.
    <BrowserRouter>
      <Routes>
        {/* Se utiliza ProtectedRestricted para proteger las rutas restringidas */}
        <Route element={<ProtectedRestricted />}>
          {/* Se define la ruta para la página de inicio de sesión */}
          <Route path="/login" element={<LogIn />} />
          {/* Se utiliza Protected para proteger las rutas de usuarios autenticados */}
          <Route element={<Protected />}>
            {/* Se define la ruta principal */}
            <Route path="/" element={<Main />} />
            {/* Se define la ruta para la página de reinicio */}
            <Route path="/reset" element={<Reset />} />
            {/* Se define la ruta para la página de candidatos */}
            <Route path="/candidates" element={<Candidates />} />
            {/* Se define la ruta para la página de presidentes */}
            <Route path="/presidents" element={<Presidents />} />
            {/* Se define la ruta para la página de fecha y hora */}
            <Route path="/date&time" element={<DateAndTime />} />
          </Route>
          <Route />
        </Route>
        {/* Se define la ruta para la página restringida */}
        <Route path="/restricted" element={<Restricted />} />
      </Routes>
    </BrowserRouter>
  );
};

// Se exporta la función App como un componente.
export default App;
