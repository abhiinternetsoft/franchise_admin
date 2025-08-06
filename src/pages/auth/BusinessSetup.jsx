import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../env";

const BusinessSetup = () => {
  const [businessName, setBusinessName] = useState("");
  const [brandLogo, setBrandLogo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${BASE_URL}/api/user/business-setup`,
        {
          businessName,
          brandLogo,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      navigate("/dashboard");
    } catch (error) {
      console.error("Business setup failed", error);
    }
  };

  return (
    <div>
      <h3>Business Setup</h3>
      <input
        type="text"
        placeholder="Business Name"
        onChange={(e) => setBusinessName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Brand Logo URL"
        onChange={(e) => setBrandLogo(e.target.value)}
      />
      <button onClick={handleSubmit}>Finish</button>
    </div>
  );
};

export default BusinessSetup;
