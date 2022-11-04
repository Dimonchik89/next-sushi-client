import React, { useState, useEffect  } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useLoginUserMutation } from "../store/api/sushiApi";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
    const [token, setToken] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem('token'))
        }
    }, [])

    const [loginUser] = useLoginUserMutation()
    if(token) {
        const decodToken = jwt_decode(token)

        if(decodToken.role === "ADMIN") {
            router.push("/admin")
            return;
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        const data = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}user/login`, {email, password})
        const token = data.data.token;
        localStorage.setItem("token", token);
            if(data.data) {
                router.push("/admin")
                return;
            } else {
                alert("Error")
            }
    }

    return (
        <Box 
            className="d-flex d-column justify-center align-center login"
        >
            <Typography
                className="login__title"
            >
                Login
            </Typography>
            <Box
                className="login-form__wrapepr"
            >
                <form
                    onSubmit={submit}
                    className="d-flex d-column login__form"
                >
                    <Box
                        className="login-input__wrapper"
                    >
                        <TextField 
                            name="email" 
                            label="Email" 
                            variant="outlined" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box
                        className="login-input__wrapper"
                    >
                        <TextField 
                            name="password" 
                            type="password" 
                            label="Email" 
                            variant="outlined" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>

                    <Button type="submit">Login</Button>
                </form>
            </Box>
        </Box>
        
    )
}
export default Login;