// LoginComponent.jsx
import React, { useState } from "react";
import "../Login.css";
import { Navigation } from "./navigation";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Submitted", { email, password });
        // Add your login logic here
    };

    return (
        <>
            <Navigation />
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Welcome Back</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-button" onClick={()=>{navigate('/home')}}>
                        Login
                    </button>

                </form>
            </div>
        </>

    );
};

export default Login;
