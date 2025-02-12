import React from "react";
import { Stack, Link, Divider } from "@mui/material";

const Url = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={0} sx={{pt:2}}>
        <Link href="https://close.com" target="_blank" underline="hover">
          close.com
        </Link>
      </Stack>

      <Divider sx={{ my: 1 }} />
    </>
  );
};

export default Url;
