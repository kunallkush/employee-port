import { useState } from "react";
import "./login.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/employees');
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-field">
          <input
            style={{ border: "none" }}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Enter your password</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span style={{ color: "white" }}>Remember me</span>
          </label>
          <span>Forgot password?</span>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>
            Do not have an account? <span>Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
