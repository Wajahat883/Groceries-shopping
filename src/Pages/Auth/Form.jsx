import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Singup";

function Forms() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isLogin ? (
        <Login toggle={() => setIsLogin(false)} />
      ) : (
        <Signup toggle={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default Forms;
