import TextField from "@mui/material/TextField";
import Card from "./UI/Card";
import PrimaryButton from "./UI/PrimaryButton";
import "./App.css";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoggedIn from "./Log/LoggedIn";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  let i;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const logCredentials = (event) => {
    event.preventDefault();
    if (username === "Roger" && password === "123") {
      handleLogIn(username);
      i = 4;
    }
    if (i === 3) {
      //Desplegar aviso: "Favor de consultar al administrador del sistema.";
    }
  };

  const handleLogIn = (user) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", user);
  };

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
          <br />
          <PrimaryButton message="Iniciar Sesión" />
        </form>
      </Card>
      <LoggedIn isLoggedIn={sessionStorage.getItem("isLoggedIn")} />
    </div>
  );
};

export default LogIn;
