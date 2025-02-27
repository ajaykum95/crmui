import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import { SlScreenSmartphone } from "react-icons/sl";

const LeadCreated = () => {
  return (
    <>
            <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5"}}>
              <Box sx={{pt:1,pl:2}}>
              <Avatar sx={{ bgcolor: "grey.300", width: 24, height: 24,  }}>
          <SlScreenSmartphone size={16} />
        </Avatar>
              </Box>

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
        {/* <Avatar sx={{ bgcolor: "grey.300", width: 24, height: 24 }}>
          <SlScreenSmartphone size={16} />
        </Avatar> */}
        <Typography  sx={{fontSize:"var(--font-size-small)",fontWeight:"bold"}}>
          Created manually
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}> AK</Avatar>
        <Typography variant="caption" color="text.secondary">
          2d ago
        </Typography>
      </Stack>
    </Box>
    </Box>

    </>

  );
};

export default LeadCreated;
