import { useState } from "react";
import "./css/App.css";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      {!user ? (
        <SignIn setUser={setUser} />
      ) : (
        <Profile name={user.name} setUser={setUser} />
      )}
    </>
  );
}

export default App;
