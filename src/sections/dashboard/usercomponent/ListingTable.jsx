import {
  Avatar,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import MainCard from "components/MainCard";
import { IoEyeOutline } from "react-icons/io5";

const leadData = [
  {
    name: "Samantha Reyes",
    email: "samantha@email.com",
    location: "Florida",
    date: "25 Mar, 2025",
    source: "Landing Page",
    initial: "L",
    color: "#74b9ff",
  },
  {
    name: "Michael Johnson",
    email: "michael@email.com",
    location: "California",
    date: "25 Mar, 2025",
    source: "Google Ads",
    initial: "G",
    color: "#ff7675",
  },
  {
    name: "Jennifer Lee",
    email: "jennifer@email.com",
    location: "California",
    date: "25 Mar, 2025",
    source: "Google Ads",
    initial: "D",
    color: "#ffeaa7",
  },
  {
    name: "Samantha Reyes",
    email: "samantha@email.com",
    location: "Florida",
    date: "25 Mar, 2025",
    source: "Landing Page",
    initial: "L",
    color: "#74b9ff",
  },
  {
    name: "Michael Johnson",
    email: "michael@email.com",
    location: "California",
    date: "25 Mar, 2025",
    source: "Google Ads",
    initial: "G",
    color: "#ff7675",
  },
  {
    name: "Jennifer Lee",
    email: "jennifer@email.com",
    location: "California",
    date: "25 Mar, 2025",
    source: "Google Ads",
    initial: "D",
    color: "#ffeaa7",
  },
  {
    name: "Samantha Reyes",
    email: "samantha@email.com",
    location: "Florida",
    date: "25 Mar, 2025",
    source: "Landing Page",
    initial: "L",
    color: "#74b9ff",
  },
  {
    name: "Michael Johnson",
    email: "michael@email.com",
    location: "California",
    date: "25 Mar, 2025",
    source: "Google Ads",
    initial: "G",
    color: "#ff7675",
  },
  {
    name: "Jennifer Lee",
    email: "jennifer@email.com",
    location: "California",
    date: "25 Mar, 2025",
    source: "Google Ads",
    initial: "D",
    color: "#ffeaa7",
  },
];

export default function UserListing() {
  return (
    <MainCard
      title="New Lead Activity"
      secondary={
        <Button variant="text" className="view-all-btn">
          View All
        </Button>
      }
    >
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="lead table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Date</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell align="center">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leadData.map((lead, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar sx={{ bgcolor: lead.color, color: "#fff" }}>
                    {lead.initial}
                  </Avatar>
                </TableCell>
                <TableCell>{lead.date}</TableCell>
                <TableCell>{lead.source}</TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.location}</TableCell>
                <TableCell align="center" sx={{ cursor: "pointer" }}>
                  <IoEyeOutline size={22} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
