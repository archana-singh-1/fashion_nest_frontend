import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/auth/signup", { username, email, password });
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button className="signup-btn" type="submit">Signup</button>
        </form>
        <p className="switch-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
