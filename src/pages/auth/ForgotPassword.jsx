import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../env";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/forgot-password`, {
        email,
      });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control my-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary w-100" type="submit">
          Send Reset Link
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
