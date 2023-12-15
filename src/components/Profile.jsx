import "../css/App.css";

export default function Profile({ name, setUser }) {
  return (
    <div>
      <p>Welcome {name}</p>
      <button
        type="button"
        onClick={() => {
          setUser(null);
          localStorage.removeItem("user");
        }}
      >
        Logout
      </button>
    </div>
  );
}
