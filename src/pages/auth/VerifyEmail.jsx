import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../env";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .post(`${BASE_URL}/api/auth/verify-email`, { token })
        .then(() => {
          setStatus("Email verified! Redirecting to setup...");
          setTimeout(() => navigate("/profile-setup"), 2000);
        })
        .catch(() => setStatus("Verification failed. Please try again."));
    }
  }, [token]);

  return <p className="text-center">{status}</p>;
};

export default VerifyEmail;
