import TextField from "@mui/material/TextField";
import Card from "./UI/Card";
import "./App.css";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from 'react'

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  const primaryButtonStyles = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: 30,
      background: isHovered ? '#A31464' : '#D14995',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)',
      borderRadius: 42.5,
      borderWidth: 0,
      transform: isActive ? 'translateY(1px)' : 'translateY(0px)',
      padding: '20px 30px',
      margin: '40px 0',
    };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSummit = (event) => {
    event.preventDefault();
    if(username === 'Roger' && password === 'HelloThere')
      console.log(password);
  }

  return (
    <div className="background">
      <Card className="logIn">
        <form onSubmit={handleSummit}>
          <h1>Inicio de Sesión</h1>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
              style: { fontSize: 30 , marginTop: 20 },
            }}
            fullWidth
            placeholder="Usuario"
            variant="standard"
            margin="normal"
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
              style: { fontSize: 30 },
            }}
            fullWidth
            placeholder="Contraseña"
            variant="standard"
            margin="normal"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button  style={primaryButtonStyles} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)} type="submit">
  Iniciar Sesión
</button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
