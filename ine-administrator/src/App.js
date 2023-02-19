import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Protected from "./Log/Protected";
import Restricted from "./Log/Restricted"
import Reset from "./Menu/Reset";
import LogIn from "./LogIn";
import Main from "./Menu/Main";
import ProtectedRestricted from './Log/ProtectedRestricted';
import Candidates from './Menu/Candidates';
import Presidents from './Menu/Presidents';
import DateAndTime from './Menu/DateAndTime';

const App = () => {
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
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRestricted/>}>
          <Route path="/login" element={<LogIn />} />
          <Route element={<Protected />}>
            <Route path="/" element={<Main />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/presidents" element={<Presidents />} />
            <Route path="/date&time" element={<DateAndTime />} />
          </Route>
        <Route/>

        </Route>
        <Route path="/restricted" element={<Restricted />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;