import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../env";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BASE_URL}/api/auth/reset-password/${token}`,
        {
          password,
        }
      );
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Reset Password</h3>
      <form onSubmit={handleReset}>
        <input
          type="password"
          className="form-control my-3"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success w-100" type="submit">
          Reset Password
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ResetPassword;
