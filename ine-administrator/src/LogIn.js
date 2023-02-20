import TextField from "@mui/material/TextField";
import Card from "./UI/Card";
import SubmitButton from "./UI/SubmitButton";
import "./App.css";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useState, useEffect } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate } from "react-router-dom";

const LogIn = () => {
  const [loginTries, setLoginTries] = useState(
    parseInt(sessionStorage.getItem('logInTries'), 10) || 0
  );

  const [logInMessage, setLoginMessage] = useState('');

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [redirect, setRedirect] = useState(null);

  const errorMessage = {
    color: 'red',
    margin: '10px 0 0',
  };

  useEffect(() => {
  }, [logInMessage]);

  const handleLogIn = (user) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", user);
    sessionStorage.setItem("isRestricted", false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const logCredentials = (event) => {
    event.preventDefault();
    if (username === "Roger" && password === "123") {
      setLoginMessage('');
      sessionStorage.setItem("logInTries", 0);
      handleLogIn(username);
      setRedirect('/');
    } else {
      const tries = loginTries + 1;
      setLoginTries(tries);
      if (tries >= 3) {
        sessionStorage.setItem('isRestricted', true);
        setRedirect('/restricted')
      }
      setLoginMessage("Usuario y/o contraseña incorrecta\n");
    }
  };

  if(redirect){
    return <Navigate to={redirect} replace/>
  }

  return (
    <div className="background">
      <Card className="logIn">
        <form onSubmit={logCredentials}>
          <h1>Inicio de Sesión</h1>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
              style: {
                fontSize: 30,
                marginTop: 20,
                width: 250,
                margin: "20px auto 0",
              },
            }}
            placeholder="Usuario"
            variant="standard"
            margin="normal"
            fullWidth
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { fontSize: 30, width: 250 },
            }}
            placeholder="Contraseña"
            variant="standard"
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p style={errorMessage}>{logInMessage}</p>
          <SubmitButton message="Iniciar Sesión" />
        </form>
      </Card>
    </div>
  );
};

export default LogIn;