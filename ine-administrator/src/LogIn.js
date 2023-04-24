// Importar componentes y dependencias necesarias
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
  // Estados locales
  const [loginTries, setLoginTries] = useState(
    parseInt(sessionStorage.getItem("logInTries"), 10) || 0
  );
  const [logInMessage, setLoginMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [redirect, setRedirect] = useState(null);

  // Estilo CSS para el mensaje de error
  const errorMessage = {
    color: "red",
    margin: "10px 0 0",
  };

  useEffect(() => {
    // Este useEffect no hace nada
  }, [logInMessage]);

  // Maneja el inicio de sesión exitoso
  const handleLogIn = (user) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", user);
    sessionStorage.setItem("isRestricted", false);
  };

  // Muestra o esconde la contraseña
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Maneja las credenciales de inicio de sesión
  const logCredentials = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        setLoginMessage("");
        sessionStorage.setItem("logInTries", 0);
        handleLogIn(username);
        setRedirect("/");
      } else {
        const tries = loginTries + 1;
        setLoginTries(tries);
        if (tries >= 3) {
          sessionStorage.setItem("isRestricted", true);
          setRedirect("/restricted");
        }
        setLoginMessage("Usuario y/o contraseña incorrecta\n");
      }
    } catch (error) {
      console.error("Error while logging in:", error);
    }
  };

  // Redirige a la página correspondiente después del inicio de sesión
  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  return (
    // Componente de la pantalla de inicio de sesión
    <div className="background">
      <Card className="logIn">
        <form onSubmit={logCredentials}>
          <h1>Inicio de Sesión</h1>
          <TextField
            // Campo para el usuario
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
            // Campo para la contraseña
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
          {/* Muestra el mensaje de error si existe */}
          <p style={errorMessage}>{logInMessage}</p>
          {/* Botón de inicio de sesión */}
          <SubmitButton message="Iniciar Sesión" />
        </form>
      </Card>
    </div>
  );
};

// Exporta el componente LogIn para su uso en otros componentes de la aplicación
export default LogIn;
