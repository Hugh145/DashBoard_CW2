import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeColorContext";



function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  // inside function Register
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:30001/api/users/register", form);
    alert("Registration successful");
    navigate("/login"); // ✅ redirect to login
  } catch (error: any) {
    alert(error.response?.data?.message || "Registration failed");
  }
};

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className={`card shadow p-4 w-75 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" required value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-success w-100">Register</button>
          <button
            type="button"
            className="btn btn-primary w-100 mt-2"
            onClick={() => setForm({ username: "", email: "", password: "" })}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
