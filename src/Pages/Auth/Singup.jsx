import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Singup({ toggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSingup = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    const already = existingUser.find(
      (u) => u.email === email || u.password === password
    );
    if (already) {
      alert("email already exist");
      return;
    }
    existingUser.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUser));
    alert("signup success fully");
    toggle();
    navigate("/allproducts");
  };
  return (
    <>
      <div>
        <h2>
          <form onSubmit={handelSingup}>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
            <button> create Account</button>
          </form>
          <p>
            already have account ? {""}
            <button onClick={toggle}>Login</button>
          </p>
        </h2>
      </div>
    </>
  );
}

export default Singup;
