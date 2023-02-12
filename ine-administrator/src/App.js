import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from "./LogIn";
import Main from "./Main";
import Protected from "./Log/Protected";

const App = () => {
  const handleLogIn = (user) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", user);
  };

  const logCredentials = (username, password) => {
    if (username === "Roger" && password === "HelloThere") {
      handleLogIn(username);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <Protected isLoggedIn={sessionStorage.getItem('isLoggedIn')}>
          <Main/>
        </Protected>
        } />
        <Route path="/login" element={<LogIn onSubmit={logCredentials} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
