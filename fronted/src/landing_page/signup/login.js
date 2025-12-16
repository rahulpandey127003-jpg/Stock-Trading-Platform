import { useState } from "react";
import axios from "../../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      setMsg(res.data.message);

      if (res.data.success) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      }
    } catch (error) {
      setMsg("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(to right, #1f2937, #06b6d4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        {/* LOGO */}
        <img
          src={`${process.env.PUBLIC_URL}/media/logo.svg`}
          alt="Zerodha"
          style={{ width: "120px", marginBottom: "20px" }}
        />

        <h2 style={{ marginBottom: "20px", color: "#06b6d4" }}>
          Login Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            background: "#06b6d4",
            border: "none",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "10px", color: "red" }}>{msg}</p>

        <p style={{ marginTop: "10px" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#06b6d4", fontWeight: "bold" }}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

export default Login;
