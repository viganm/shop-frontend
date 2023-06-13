import React, { useState } from "react";
import "./Login.css";

const Login = () => {
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
        localStorage.setItem("token", token);
        document.getElementById("shopLink").click();
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={personEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <a id="shopLink" href="/shop" style={{ display: "none" }}>
        Shop
      </a>
    </form>
  );
};

export default Login;
