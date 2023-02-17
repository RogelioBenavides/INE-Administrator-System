import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LogIn from "./LogIn";
import Main from "./Main";
import Restricted from "./Log/Restricted"
import Protected from "./Log/Protected";
import ProtectedRestricted from './Log/ProtectedRestricted';
import { useState, useEffect } from 'react';

const App = () => {
  sessionStorage.setItem("logInTries", 0);

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem('isLoggedIn') === 'true'
  );
  const [isRestricted, setIsRestricted] = useState(
    sessionStorage.getItem('isRestricted') === 'true'
  );
  const [loginTries, setLoginTries] = useState(
    parseInt(sessionStorage.getItem('logInTries'), 10) || 0
  );
  const [logInMessage, setLoginMessage] = useState('');

  useEffect(() => {
    console.log("logInMessage:", logInMessage);
  }, [logInMessage]);

  const handleLogIn = (user) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", user);
    sessionStorage.setItem("isRestricted", false);
    setIsLoggedIn(true);
  };
  
  const logCredentials = (username, password) => {
    if (username === "Roger" && password === "123") {
      sessionStorage.setItem("logInTries", 0);
      handleLogIn(username);
    } else {
      const tries = loginTries + 1;
      setLoginTries(tries);
      if (tries >= 3) {
        sessionStorage.setItem('isRestricted', true);
        setIsRestricted(true);
      }
      setLoginMessage("Usuario y/o contraseña incorrecta\n");
    }
  };

  if (isRestricted) {
    return <Restricted />;
  }
  
  if(isLoggedIn){
    return <Main />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRestricted>
            <Protected>
            {isLoggedIn ? <Main /> : <Navigate to="/login" />}
            </Protected>
          </ProtectedRestricted>
        } />
        <Route path="/login" element={<LogIn logCredentials={logCredentials} logInMessage={logInMessage} />} />
        <Route path="/restricted" element={<Restricted />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;