import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../env";

const ProfileSetup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${BASE_URL}/api/user/profile-setup`,
        {
          name,
          phone,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      const role = localStorage.getItem("userRole");
      if (role === "franchisor") {
        navigate("/business-setup");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Profile setup failed", error);
    }
  };

  return (
    <div>
      <h3>Profile Setup</h3>
      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
};

export default ProfileSetup;
