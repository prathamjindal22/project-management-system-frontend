import { useState } from "react";
import { useAuthStore } from "../store/authStore";

export default function Login() {

  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    window.location.href = "/projects";
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card p-4 shadow" style={{ width: "400px" }}>

        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}