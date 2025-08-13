// src/pages/AddUserPage.jsx
import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import building from "../../assets/images/users/building.svg";
import profilecircle from "../../assets/images/users/profile-circle.svg";
import verify from "../../assets/images/users/verify.svg";
import { RxCross1 } from "react-icons/rx";
import { TfiReload } from "react-icons/tfi";

function generatePassword(length = 10) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
  let pw = "";
  for (let i = 0; i < length; i++)
    pw += chars[Math.floor(Math.random() * chars.length)];
  return pw;
}

export default function AddUserPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "customer",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    company: "",
    brandName: "",
    calendlyUrl: "",
    membershipType: "",
    issuanceDate: "",
  });
  const [sendWelcomeEmail, setSendWelcomeEmail] = useState(true);
  const [requirePasswordChange, setRequirePasswordChange] = useState(true);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleGenerate = () =>
    setForm((prev) => ({ ...prev, password: generatePassword(12) }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const payload = {
        ...form,
        sendWelcomeEmail,
        requirePasswordChange,
      };
      console.log("Token:", localStorage.getItem("token"));

      await axios.post("http://localhost:5000/api/auth/create", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("User created successfully");
      navigate("/usermanagement");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Failed to create user");
    }
  };

  const SectionHeader = ({ title }) => (
    <>
      <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
        {title}
      </Typography>
      <Divider sx={{ mb: 2 }} />
    </>
  );

  return (
    <Container className={"AddUser-section"} sx={{ mt: 4 }}>
      <Paper className="adduser-container">
        <div className="p-4 border adduser-heading">
          <Link to="/usermanagement">
            <FaArrowLeft className="adduser-icon" />
          </Link>
          <div>
            <Typography variant="h5" className="adduser-head">
              Add New User
            </Typography>
            <Typography variant="body2" className="adduser-text">
              Fill in the details below to create a new account.
            </Typography>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 addUser-Form">
          {/* Company Information */}
          <div className="d-flex gap-10 align-items-center adduser-subhead">
            <img src={building} alt="building" />
            <SectionHeader
              title="Company Information"
              className="adduser-title"
            />
          </div>
          <Grid container spacing={2}>
            <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
              <label htmlFor="Company">Company Name</label>
              <TextField
                placeholder="Enter company name"
                name="company"
                fullWidth
                value={form.company}
                onChange={handleChange}
              />
            </Grid>
            <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
              <label htmlFor="brand Name">Brand Name</label>
              <TextField
                placeholder="Brand Name"
                name="brandName"
                fullWidth
                value={form.brandName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Basic Information */}
          <div className="d-flex gap-10 align-items-center adduser-subhead">
            <img src={profilecircle} alt="Profile Circle" />
            <SectionHeader
              title="Basic Information"
              className="adduser-title"
            />
          </div>

          <Grid container spacing={2}>
            <Grid sx={{ flexBasis: { xs: "100%", md: "24%" } }}>
              <label htmlFor="First name">First Name</label>
              <TextField
                placeholder="First Name"
                name="firstName"
                fullWidth
                value={form.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid sx={{ flexBasis: { xs: "100%", md: "24%" } }}>
              <label htmlFor="Last name">Last Name</label>
              <TextField
                placeholder="Last Name"
                name="lastName"
                fullWidth
                value={form.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid sx={{ flexBasis: { xs: "100%", md: "24%" } }}>
              <label htmlFor="Phone Number">Phone Number</label>
              <TextField
                placeholder="Phone Number"
                name="phoneNumber"
                fullWidth
                value={form.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid sx={{ flexBasis: { xs: "100%", md: "24%" } }}>
              <label htmlFor="Email Address*">Email Address*</label>
              <TextField
                placeholder="Email Address"
                name="email"
                fullWidth
                value={form.email}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Role & Membership */}
          <div className="d-flex gap-10 align-items-center adduser-subhead">
            <img src={verify} alt="Verify" />
            <SectionHeader
              title="Role & Membership"
              className="adduser-title"
            />
          </div>

          <Grid container spacing={2}>
            <Grid sx={{ flexBasis: { xs: "100%", md: "20%" } }}>
              <label htmlFor="Select Role ">Select Role</label>
              <TextField
                select
                placeholder="Role"
                name="role"
                fullWidth
                value={form.role}
                onChange={handleChange}
              >
                <MenuItem value="customer">Select Role</MenuItem>
                <MenuItem value="franchisee">Franchisee</MenuItem>
                <MenuItem value="franchisor">Franchisor</MenuItem>
                <MenuItem value="Super Admin">Super Admin</MenuItem>
              </TextField>
            </Grid>
            <Grid sx={{ flexBasis: { xs: "100%", md: "20%" } }}>
              <label htmlFor="Membership Type">Membership Type</label>
              <TextField
                select
                placeholder="Membership Type"
                name="membershipType"
                fullWidth
                value={form.membershipType}
                onChange={handleChange}
              >
                <MenuItem value="customer">Select Membership</MenuItem>
                <MenuItem value="customer">Freemium</MenuItem>
                <MenuItem value="franchisee">Premium</MenuItem>
                <MenuItem value="franchisor">Premium Pro</MenuItem>
                <MenuItem value="Super Admin">Prmium Plus</MenuItem>
              </TextField>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="Calendly URL"
                name="calendlyUrl"
                fullWidth
                value={form.calendlyUrl}
                onChange={handleChange}
              />
            </Grid> */}
            <Grid sx={{ flexBasis: { xs: "100%", md: "20%" } }}>
              <label htmlFor="Issuance Date">Issuance Date</label>
              <TextField
                type="date"
                name="issuanceDate"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={form.issuanceDate}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Temporary Password */}
          <div className="d-flex gap-10 align-items-center adduser-subhead">
            <img src={verify} alt="Verify" />
            <SectionHeader
              title="Temporary Password"
              className="adduser-title"
            />
          </div>

          <Grid container spacing={2} display="flex" alignItems="end">
            <Grid sx={{ flexBasis: { xs: "100%", md: "50%" } }}>
              <label htmlFor="Password">Password</label>
              <TextField
                placeholder="Enter Password"
                name="password"
                fullWidth
                value={form.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} display="flex" alignItems="center">
              <Button
                onClick={handleGenerate}
                variant="outlined"
                sx={{ height: "fit-content" }}
                className="d-flex gap-10 Pass-generate"
              >
                {" "}
                <TfiReload />
                Generate
              </Button>
            </Grid>
          </Grid>

          {/* Account Setup */}
          <div className="d-flex gap-10 align-items-center adduser-subhead">
            <SectionHeader title="Account Setup" />
          </div>

          <Box className="Account-setup-section">
            <FormControlLabel
              control={
                <Checkbox
                  checked={sendWelcomeEmail}
                  onChange={(e) => setSendWelcomeEmail(e.target.checked)}
                />
              }
              label="Send welcome email"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={requirePasswordChange}
                  onChange={(e) => setRequirePasswordChange(e.target.checked)}
                />
              }
              label="Require password change on first login"
            />
          </Box>

          {/* Actions */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-start" }}>
            <Button
              onClick={() => navigate("/usermanagement")}
              sx={{ mr: 2 }}
              className="adduser-cancel "
            >
              Cancel <RxCross1 />
            </Button>
            <Button
              variant="contained"
              type="submit"
              className="adduser-confirm"
            >
              Add User
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
