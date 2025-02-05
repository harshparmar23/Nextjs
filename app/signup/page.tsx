"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        className="m-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        className="m-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="text-white bg-black border rounded-md px-2"
        onClick={() => {
          axios.post("http://localhost:3000/api/user", {
            username,
            password,
          });
          setPassword("");
          setUserName("");
        }}
      >
        Sign in
      </button>
    </div>
  );
}
