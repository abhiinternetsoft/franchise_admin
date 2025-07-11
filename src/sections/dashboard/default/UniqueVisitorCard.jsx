import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { IoEyeOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import MainCard from "components/MainCard";

const leadData = [
  {
    uniquecode: "FLS-OPP-000001",
    date: "Dec 15, 2023",
    brandname: "Sugaring NYC",
    category: "Beauty & Wellness",
    investment: "$75K - $150K",
    status: "Active",
    lead: 23,
    color: "#D4EDDA",
    statusColor: "success",
    action: "Deactivate",
  },
  {
    uniquecode: "FLS-OPP-000002",
    date: "Dec 15, 2023",
    brandname: "Little Princess Spa",
    category: "Children & Family",
    investment: "$50K - $100K",
    status: "Pending",
    lead: 18,
    color: "#FF6D60",
    statusColor: "warning",
    action: "Publish",
  },
  {
    uniquecode: "FLS-OPP-000003",
    date: "Dec 15, 2023",
    brandname: "BreezeMed Urgent Care",
    category: "Healthcare",
    investment: "$200K - $500K",
    status: "Draft",
    lead: 0,
    color: "#FFD966",
    statusColor: "info",
    action: "Publish",
  },
  {
    uniquecode: "FLS-OPP-000004",
    date: "Dec 15, 2023",
    brandname: "Taco Rico TMC",
    category: "Food & Beverage",
    investment: "$125K - $250K",
    status: "Inactive",
    lead: 31,
    color: "#91A3B0",
    statusColor: "default",
    action: "Activate",
  },
  {
    uniquecode: "FLS-OPP-000005",
    date: "Dec 15, 2023",
    brandname: "TrueNest Property Management",
    category: "Food & Beverage",
    investment: "$125K - $250K",
    status: "Active",
    lead: 15,
    color: "#B2784A",
    statusColor: "success",
    action: "Deactivate",
  },
];

export default function NewLeadActivityCard() {
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
        <Table sx={{ minWidth: 1100 }} aria-label="lead table">
          <TableHead>
            <TableRow>
              <TableCell>Listings #</TableCell>
              <TableCell>Date Published</TableCell>
              <TableCell>Brand Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Investment Range</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Leads 30D</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leadData.map((lead, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      sx={{
                        bgcolor: lead.color,
                        width: 30,
                        height: 30,
                        fontSize: 14,
                      }}
                    >
                      #
                    </Avatar>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        color: "#4187F6",
                        cursor: "pointer",
                      }}
                    >
                      {lead.uniquecode}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{lead.date}</TableCell>
                <TableCell>{lead.brandname}</TableCell>
                <TableCell>{lead.category}</TableCell>
                <TableCell>{lead.investment}</TableCell>
                <TableCell>
                  <Chip
                    label={lead.status}
                    color={lead.statusColor}
                    variant={
                      lead.statusColor === "default" ? "outlined" : "filled"
                    }
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                </TableCell>
                <TableCell>{lead.lead}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton size="small">
                      <BiEdit />
                    </IconButton>
                    <IconButton size="small">
                      <IoEyeOutline />
                    </IconButton>
                    <Button
                      variant={
                        lead.action === "Deactivate"
                          ? "contained"
                          : lead.action === "Activate"
                            ? "outlined"
                            : "contained"
                      }
                      size="small"
                      color={
                        lead.action === "Deactivate"
                          ? "secondary"
                          : lead.action === "Activate"
                            ? "success"
                            : "info"
                      }
                      sx={{ textTransform: "capitalize", fontWeight: 500 }}
                    >
                      {lead.action}
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
