import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Delete, Edit, Visibility, Block, Add } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const roleColors = {
  ADMIN: "red",
  FRANCHISOR: "blue",
  FRANCHISEE: "green",
  USER: "gray",
};

const statusColors = {
  ACTIVE: "green",
  PENDING: "goldenrod",
  SUSPENDED: "lightcoral",
};

const UserManagement = () => {
  const [users, setUsers] = useState([]); // store all users here
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API_BASE_URL}/api/auth/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(res.data);
      setUsers(res.data.users || res.data); // adapt to your backend shape
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box p={3}>
      {/* Top header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        className="bg-white p-3 border rounded TextHeading-section"
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" className="fs-24">
            User Management
          </Typography>
          <Typography variant="body2" color="text.secondary" className="fs-14">
            Manage and monitor all platform users
          </Typography>
        </Box>
        <Link to="/add-user">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            className="button"
          >
            Add New User
          </Button>
        </Link>
      </Box>

      {/* Users Table */}
      <div className="bg-white border rounded content-section">
        <Paper sx={{ p: 2, mb: 0 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={2}
          >
            <h3>Platform Users</h3>
            <div className="w-50 gap-10 d-flex">
              <TextField
                label="Search users..."
                variant="outlined"
                size="large"
              />
              <FormControl size="large" className="w-30">
                <InputLabel>All Roles</InputLabel>
                <Select label="All Roles" defaultValue="">
                  <MenuItem value="">All Roles</MenuItem>
                  <MenuItem value="ADMIN">Admin</MenuItem>
                  <MenuItem value="FRANCHISOR">Franchisor</MenuItem>
                  <MenuItem value="FRANCHISEE">Franchisee</MenuItem>
                  <MenuItem value="USER">User</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="large" className="w-30">
                <InputLabel>All Status</InputLabel>
                <Select label="All Status" defaultValue="">
                  <MenuItem value="">All Status</MenuItem>
                  <MenuItem value="ACTIVE">Active</MenuItem>
                  <MenuItem value="PENDING">Pending</MenuItem>
                  <MenuItem value="SUSPENDED">Suspended</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="large">
                <InputLabel>Show</InputLabel>
                <Select label="Show" defaultValue={25}>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
        </Paper>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Brand Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Registration Date</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar>{user.name?.[0] || "?"}</Avatar>
                        <Box className="lh-1">
                          <Typography className="m-0 p-0 fs-14">
                            {user.name}
                          </Typography>
                          <Typography variant="caption">
                            {user.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{user.company}</TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          px: 1,
                          py: 0.5,
                          borderRadius: 2,
                          backgroundColor: statusColors[user.brand],
                          color: "#fff",
                          fontSize: 12,
                          display: "inline-block",
                        }}
                      >
                        {user.brand}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          px: 1,
                          py: 0.5,
                          borderRadius: 2,
                          backgroundColor: roleColors[user.role],
                          color: "#fff",
                          fontSize: 12,
                          display: "inline-block",
                        }}
                      >
                        {user.role}
                      </Typography>
                    </TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>{user.registration}</TableCell>
                    <TableCell>{user.login}</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <Visibility />
                      </IconButton>
                      <IconButton color="success">
                        <Edit />
                      </IconButton>
                      <IconButton color="warning">
                        <Block />
                      </IconButton>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default UserManagement;
