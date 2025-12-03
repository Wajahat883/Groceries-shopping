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
      <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            SignUp
          </h2>
          <form onSubmit={handelSingup} className="space-y-5">
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="text"
              value={email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="text"
              value={password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
              {" "}
              create Account
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            already have account ? {""}
            <button
              onClick={toggle}
              className="text-indigo-500 font-medium hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Singup;
