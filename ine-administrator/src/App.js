import LogIn from "./LogIn";

const App = () => {

  const handleLogIn = (user) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", user);
  };

  const logCredentials = (username, password) => {
    if (username === "Roger" && password === "HelloThere") {
      console.log(password);
      handleLogIn(username);
    }
  };

  return (
    <LogIn onSubmit={logCredentials} />
  );
};

export default App;
