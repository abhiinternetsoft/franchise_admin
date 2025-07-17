import React from "react";
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
import {
  Delete,
  Edit,
  Visibility,
  Block,
  Add,
  Upload,
} from "@mui/icons-material";

// Sample user data
const leads = [
  {
    name: "John Smith",
    email: "john.smith@email.com",
    company: "abc",
    brand: "ACTIVE",
    role: "ADMIN",
    registration: "Jan 15, 2024",
    login: "Dec 29, 2024",
    status: "ACTIVE",
  },
  {
    name: "Sarah Mitchell",
    email: "sarah.mitchell@mcdonalds.com",
    company: "abc",
    brand: "ACTIVE",
    role: "FRANCHISOR",
    registration: "Mar 22, 2024",
    login: "Dec 28, 2024",
    status: "ACTIVE",
  },
  {
    name: "Mike Johnson",
    email: "mike.johnson@subway.com",
    company: "abc",
    brand: "PENDING",
    role: "FRANCHISOR",
    registration: "Dec 10, 2024",
    login: "Dec 27, 2024",
    status: "PENDING",
  },
  {
    name: "Lisa Chen",
    email: "lisa.chen@anytimefitness.com",
    company: "abc",
    brand: "ACTIVE",
    role: "FRANCHISEE",
    registration: "Nov 5, 2024",
    login: "Dec 26, 2024",
    status: "ACTIVE",
  },
  {
    name: "David Park",
    email: "david.park@email.com",
    company: "abc",
    brand: "SUSPENDED",
    role: "USER",
    registration: "Oct 18, 2024",
    login: "Dec 20, 2024",
    status: "SUSPENDED",
  },
];

// Role/Status color mapping
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

const Disclosures = () => {
  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        className="bg-white p-3 border rounded"
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" className="fs-24">
            Franchise Disclosures
          </Typography>
          <Typography variant="body2" color="text.secondary" className="fs-14">
            Review and manage FDD submissions from franchise listing builders
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Upload />}
          className="button"
        >
          Upload FDD
        </Button>
      </Box>

      <div className="bg-white border rounded ">
        <Paper sx={{ p: 2, mb: 0 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={2}
          >
            <h3>FDD Submissions </h3>
            <div className="w-50 gap-10 d-flex">
              <TextField
                label="Search leads..."
                variant="outlined"
                size="large"
              />
              <FormControl size="large" className="w-30">
                <InputLabel>All Priority</InputLabel>
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

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>brand Name</TableCell>
                <TableCell>Contact Person</TableCell>
                <TableCell>Contact Info</TableCell>
                <TableCell>Submission Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leads.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar>{user.name[0]}</Avatar>
                      <Box className="lh-1">
                        <Typography className="m-0 p-0 fs-14 ">
                          {user.name}
                        </Typography>
                        <Typography variant="caption">{user.email}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className="lh-1">
                      <Typography className="m-0 p-0 fs-14 ">
                        {user.name}
                      </Typography>
                      <Typography variant="caption">{user.email}</Typography>
                    </Box>
                  </TableCell>
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
                  {/* <TableCell>
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
                  </TableCell> */}
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
              ))}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Typography variant="caption">Showing 1-5 of 5 results</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Button variant="outlined" size="small" disabled>
                Previous
              </Button>
              <Button variant="contained" size="small" color="primary">
                1
              </Button>
              <Button variant="outlined" size="small" disabled>
                Next
              </Button>
            </Box>
          </Box>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Disclosures;
