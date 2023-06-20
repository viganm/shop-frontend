import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [personEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      personEmail,
      password,
    };

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        const personId = data.person_id;
        localStorage.setItem("token", token);
        localStorage.setItem("personId", personId);
        navigate("/shop");
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <label>Email:</label>
      <input
        type="email"
        value={personEmail}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
