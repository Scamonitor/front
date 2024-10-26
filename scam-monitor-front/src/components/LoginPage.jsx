import { useState } from "react";

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
      <div>Stack Monitor</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="e-mail">Email</label>
        <input 
          name="e-mail"
          type="text"
          required
          autoComplete="off"
          placeholder="correo electrónico"
          onChange={(e) => {setEmail(e.target.value)}}
        ></input>
        <label for="password">Contraseña</label>
        <input
          name="password"
          type="password"
          required
          placehlder="contraseña"
          onChange={(e) => {setPassword(e.target.value)}}
        ></input>
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;