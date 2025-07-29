import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeColorContext";


interface LoginUserProps {
  setUserType: (type: "guest" | "loginUser") => void;
}

function LoginUser({ setUserType }: LoginUserProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const { theme } = useTheme(); // ✅ use theme context

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:30001/api/users/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setUserType("loginUser"); // ✅ update userType
      alert("Login successful");
      navigate("/dashboard");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed");
    }
  };


  return (
     <div className="container mt-5 d-flex justify-content-center">
      <div className={`card shadow p-4 w-75 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign in</button>
          <button
          type="button"
          className="btn btn-primary w-100 mt-2"
          onClick={() => {
          setEmail("");
          setPassword("");
          }}
          >
          Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;


