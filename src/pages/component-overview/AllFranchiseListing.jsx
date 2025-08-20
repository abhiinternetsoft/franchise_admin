import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  InputLabel,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import { Edit, Visibility } from "@mui/icons-material";

import { BACKEND_URL } from "../../../env";
import { Link } from "react-router";
import icView from "../../assets/images/users/ic-view.svg";
import icEdit from "../../assets/images/users/ic-edit.svg";
import newListing from "../../assets/images/users/newListing.svg";
import Export from "../../assets/images/users/export.svg";

const statusColors = {
  Active: { bg: "#B9FBC0", color: "#027A48" },
  Pending: { bg: "#FFEAB6", color: "#915E00" },
  Inactive: { bg: "#E0E0E0", color: "#555" },
};

const circleColors = ["#B3E5FC", "#FFCDD2", "#FFE082", "#C5E1A5", "#D7CCC8"];

const AllFranchiseListing = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const listingsPerPage = 5;

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/opportunities`);
        setListings(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;

  // Pagination calculation
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const nextPage = () => {
    if (indexOfLastListing < listings.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box p={3} className="">
      <Box className="border rounded">
        <Paper sx={{ p: 2, mb: 0 }} className="shadow-none">
          <Box justifyContent="space-between" flexWrap="wrap" gap={2}>
            <h3 className="table-main-heading my-4">
              All Franchise Opportunities{" "}
              <span>({listings.length} Results)</span>
            </h3>
            <div className="w-100 gap-10 d-flex justify-content-between my-4">
              <div className="w-75 d-flex gap-10">
                <TextField
                  label="Search by brand name, category"
                  variant="outlined"
                  size="large"
                  className="w-40"
                />
                <FormControl size="large" className="w-15">
                  <InputLabel>All Status</InputLabel>
                  <Select label="All Status" defaultValue="">
                    <MenuItem value="">All Status</MenuItem>
                    <MenuItem value="ACTIVE">Active</MenuItem>
                    <MenuItem value="PENDING">Pending</MenuItem>
                    <MenuItem value="SUSPENDED">Suspended</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="large" className="w-15">
                  <InputLabel>All Categories</InputLabel>
                  <Select label="All Roles" defaultValue="">
                    <MenuItem value="">Beauty & Wellness</MenuItem>
                    <MenuItem value="ADMIN">Children & Family</MenuItem>
                    <MenuItem value="FRANCHISOR">Healthcare</MenuItem>
                    <MenuItem value="FRANCHISEE">Food & Beverage</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="large" className="w-15">
                  <InputLabel>Show</InputLabel>
                  <Select label="Show" defaultValue={25}>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="w-25 d-flex gap-10 justify-content-end">
                <button className="export-file-btn">
                  <img src={Export} alt="Export" />
                  Export File
                </button>
                <Link to="/franchiseopportunities">
                  <button className="new-listing-btn">
                    <img src={newListing} alt="newListing" />
                    New Listing
                  </button>
                </Link>
              </div>
            </div>
          </Box>
        </Paper>

        <TableContainer
          component={Paper}
          sx={{ borderRadius: 2 }}
          className="shadow-none"
        >
          <Table>
            <TableHead className="border Listingtable-head">
              <TableRow>
                <TableCell>Listings #</TableCell>
                <TableCell>Date Published</TableCell>
                <TableCell>Brand Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Investment Range</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Leads 30D</TableCell>
                <TableCell className="actions-head">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentListings.map((item, index) => (
                <TableRow key={index} className="listingtablerow">
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor:
                            circleColors[index % circleColors.length],
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        #
                      </Box>
                      <Typography
                        color="primary"
                        sx={{ fontWeight: "bold", cursor: "pointer" }}
                      >
                        {item.flsNumber}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>{item.brandName}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    ${item.investmentLow / 1000}K - $
                    {item.investmentHigh / 1000}K
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        backgroundColor:
                          statusColors[item.status]?.bg || "#ddd",
                        color: statusColors[item.status]?.color || "#000",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 3,
                        display: "inline-block",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {item.status}
                    </Typography>
                  </TableCell>
                  <TableCell>{item.leadsLast30Days || 0}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      {/* <Edit /> */}
                      <img src={icEdit} alt="icEdit" />
                    </IconButton>
                    <IconButton color="primary">
                      {/* <Visibility /> */}
                      <img src={icView} alt="icView" />
                    </IconButton>
                    <Button
                      variant={
                        item.status === "Active" ? "contained" : "outlined"
                      }
                      color={item.status === "Active" ? "inherit" : "success"}
                      size="small"
                      className="activate-button"
                      sx={{ textTransform: "none", ml: 1 }}
                    >
                      {item.status === "Active"
                        ? "Deactivate"
                        : item.status === "Pending"
                          ? "Publish"
                          : "Activate"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Pagination */}
      {/* <Box display="flex" justifyContent="center" mt={2} gap={1}>
        <Button
          variant="outlined"
          size="small"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Page {currentPage}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={nextPage}
          disabled={indexOfLastListing >= listings.length}
        >
          Next
        </Button>
      </Box> */}
      <Box display="flex" justifyContent="end" mt={2}>
        <Pagination
          count={Math.ceil(listings.length / listingsPerPage)} // total pages
          page={currentPage} // current active page
          onChange={(event, value) => setCurrentPage(value)}
          color="#6D758F" // styled active page (purple like your image)
          shape="rounded" // rounded buttons
          className="listing-pagination"
        />
      </Box>
    </Box>
  );
};

export default AllFranchiseListing;
