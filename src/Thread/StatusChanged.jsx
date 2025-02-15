import React from "react";
import { Box, Avatar, Chip, Typography } from "@mui/material";

const StatusChanged = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        mt: 2,
        padding: "8px 16px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            fontSize: "14px",
            backgroundColor: "#1976D2",
            marginRight: "8px",
          }}
        >
          A
        </Avatar>
        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
        >
          Status changed from{" "}
        </Typography>
        <Chip
          label="POTENTIAL"
          sx={{ fontSize: "12px", backgroundColor: "#FFEB3B", marginX: "4px" }}
        />
        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ fontSize: "10px", marginX: "4px" }}
        >
          →
        </Typography>
        <Chip
          label="CUSTOMER"
          sx={{ fontSize: "10px", backgroundColor: "#4CAF50", color: "#fff" }}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}> AK</Avatar>
        <Typography
          variant="caption"
          sx={{ fontSize: "12px", marginLeft: "8px", color: "#757575" }}
        >
          1d ago
        </Typography>
      </Box>
    </Box>
  );
};

export default StatusChanged;
