import { useState } from "react";
import InfiniteCarousel from "./InfiniteCarousel";
import "../styles/login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })
    })
    .then(() => console.log("credentials sent succesfully"))
  };

  return(
    <div className="login-form-wrapper">
      <h1>Scam Monitor</h1>
      <InfiniteCarousel />
      <h3>Inicia sesíon</h3>
      <form className="login-form" onSubmit={handleSubmit}>        <div className="input-wrapper">
        <input 
            name="e-mail"
            type="text"
            required
            autoComplete="off"
            onChange={(e) => {setEmail(e.target.value)}}
          ></input>
          <label for="e-mail">Email</label>
        </div>
        <div className="input-wrapper">
        <input
            name="password"
            type="password"
            required
            placehlder="contraseña"
            onChange={(e) => {setPassword(e.target.value)}}
          ></input>
          <label for="password">Contraseña</label>
        </div>
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;