import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/videoSlice";
import { Button, TextField, Paper } from "@mui/material";

const VideoLogin = () => {
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (password === "karate123") {
            dispatch(loginSuccess());
        } else {
            alert("Wrong Password");
        }
    };

    return (
        <Paper style={{ padding: 30, maxWidth: 400, margin: "100px auto" }}>
            <h2>Student Video Login</h2>
            <TextField
                fullWidth
                label="Enter Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={handleLogin}
                style={{ marginTop: 15 }}
            >
                Unlock Videos
            </Button>
        </Paper>
    );
};

export default VideoLogin;
