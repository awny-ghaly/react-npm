import { useState } from "react";
import "../css/App.css";

const users = [
  { name: "Awny", password: "Awny" },
  { name: "Basil", password: "Basil" },
  { name: "Mohsen", password: "Mohsen" },
];

export default function SignIn({ setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((e) => e.name === userName);
    console.log(user);
    if (!user) {
      alert("Username not found");
      return;
    }
    if (user.password !== password) {
      alert("Wrong Password");
      return;
    }
    alert("Login successfully");
    localStorage.setItem("user", JSON.stringify(user));
    setUserName("");
    setPassword("");
    setUser(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="Write user name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Write password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
