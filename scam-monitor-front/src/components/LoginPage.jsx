import { useState } from "react";
import InfiniteCarousel from "./InfiniteCarousel";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ personal_email: email, password: password }),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Invalid credentials");
        }
        return response.json(); // Assuming the backend responds with JSON
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/fraud");
      });
  };

  return (
    <div className="login-form-wrapper">
      <h1>Scam Monitor</h1>
      <InfiniteCarousel />
      <h3>Inicia sesíon</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        {" "}
        <div className="input-wrapper">
          <input
            name="e-mail"
            type="text"
            required
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label for="e-mail">Email</label>
        </div>
        <div className="input-wrapper">
          <input
            name="password"
            type="password"
            required
            placehlder="contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <label for="password">Contraseña</label>
        </div>
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
