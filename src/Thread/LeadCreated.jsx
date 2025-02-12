import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import { SlScreenSmartphone } from "react-icons/sl";

const LeadCreated = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        borderRadius: "4px",
        backgroundColor: "var(--background-color)",
        width: "100%",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar sx={{ bgcolor: "grey.300", width: 24, height: 24 }}>
          <SlScreenSmartphone size={16} />
        </Avatar>
        <Typography variant="body2" sx={{fontSize:"var(--font-size-base)"}}>
          Created manually
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}>
          AK
        </Avatar>
        <Typography variant="caption" color="text.secondary">
          2d ago
        </Typography>
      </Stack>
    </Box>
  );
};

export default LeadCreated;
