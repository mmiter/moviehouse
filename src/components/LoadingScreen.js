import React from "react";
// @mui
import { Box, CircularProgress } from "@mui/material";

const LoadingScreen = () => (
  <Box sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
    <CircularProgress />
  </Box>
);

export default LoadingScreen