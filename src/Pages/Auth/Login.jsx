import React, { useState } from "react";

function Login({ toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlaLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getitem("users")) || [];

    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      alert("login Successfully");
      localStorage.setItem("loggedinUser", JSON.stringify(found));
    } else {
      alert("invalid Email or password");
    }
  };
  return (
    <>
      <div>
        <h2>
          <form onSubmit={handlaLogin}>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
          </form>
          <p>
            Don't have account?{""}
            <button onClick={toggle}>signup</button>
          </p>
        </h2>
      </div>
    </>
  );
}

export default Login;
