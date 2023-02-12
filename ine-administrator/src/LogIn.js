import TextField from "@mui/material/TextField";
import Card from "./UI/Card";
import PrimaryButton from './UI/PrimaryButton'
import "./App.css";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const LogIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogIn = (event) => {
        event.preventDefault();
        props.onSubmit(username, password);
    }

    return (
        <div className="background">
            <Card className="logIn">
                <form onSubmit={handleLogIn}>
                    <h1>Inicio de Sesión</h1>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                            style: { fontSize: 30, marginTop: 20 },
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
                            style: { fontSize: 30 },
                        }}
                        fullWidth
                        placeholder="Contraseña"
                        variant="standard"
                        margin="normal"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <PrimaryButton message='Iniciar Sesión' />
                </form>
            </Card>
        </div>
    );
}

export default LogIn;