import React from "react";
import { Card, CardContent, Typography, IconButton, Avatar, Box, Link, Divider } from "@mui/material";
import { MoreHoriz, Reply, ArrowForward, Delete, CallMade } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { PiGreaterThan } from "react-icons/pi";
import { GoArrowDownRight } from "react-icons/go";

export default function Email() {
  return (
    <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5" }}>
      <Box sx={{ pt: 2, pl: 1 }}>
        <MailOutlineIcon />
      </Box>

      <Card sx={{ width: "100%", flex: 8, ml: 4, m: 1, bgcolor: "white" }}>
        {/* Email Header */}
        <Box sx={{ display: "flex", alignItems: "center",p:1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}>
            <Typography  sx={{ color: "#202124",fontSize:"var(--font-size-base)", pl: 1 }}>
              This is an email
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
        <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}> AK</Avatar>
          </Box>
        </Box>

        {/* Email Details */}
        <Divider />
        <CardContent sx={{width:"100%",p:0}}>
            <Box sx={{display:"block"}}>

        <Box sx={{  bgcolor: "#f5f5f5"}}>
          {/* From Line */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
            <Typography component="span" sx={{ color: "#5f6368",fontSize:"var(--font-size-base)" }}>
              From:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{fontSize:"var(--font-size-base)"}}>Close Sales Team {`<sales@close.com>`}</Typography>
              <IconButton color="success">
                <SouthEastIcon sx={{ fontSize: 12 }} />
              </IconButton>
            </Box>
          </Box>

          {/* To Line */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography component="span" sx={{ color: "#5f6368", pl: 5,fontSize:"var(--font-size-base)" }}>
              To:
            </Typography>
            <Typography sx={{fontSize:"var(--font-size-base)"}}>v-ajay.kumar@arya.ag</Typography>

            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="small">
              <Reply sx={{ color: "#5f6368" }} />
            </IconButton>
            <IconButton size="small">
              <Reply sx={{ color: "#5f6368", transform: "scaleX(-1)" }} />
            </IconButton>
            <IconButton size="small">
              <ArrowForward sx={{ color: "#5f6368" }} />
            </IconButton>
            <IconButton size="small">
              <Delete sx={{ color: "#5f6368" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Email Content */}
            
          <Box sx={{p:2}}>
            <Typography paragraph sx={{fontSize:"var(--font-size-base)"}}>
              As you begin using Close, we recommend you handle all of your customer communication through Close directly.
            </Typography>

            <Typography paragraph sx={{fontSize:"var(--font-size-base)"}}>
              Don't forget to add your{" "}
              <Link
                href="#"
                sx={{
                  color: "#4285f4",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Connected Account
              </Link>{" "}
              and enable email and calendar syncing!
            </Typography>

            <Typography paragraph sx={{fontSize:"var(--font-size-base)"}}>
              To send an email to a Lead, click on the email icon found at the top of their Lead page. This will default to sending an email to the Primary Contact (first-listed Contact on the Lead).
            </Typography>

            <Typography paragraph sx={{fontSize:"var(--font-size-base)"}}   >
              Email attachments in Close allow you to send and receive external files with your emails (see attached Close logo).
            </Typography>

            <Typography sx={{ color: "#5f6368", mt: 2,fontSize:"var(--font-size-base)" }}>--</Typography>
            <Typography sx={{ color: "#5f6368",fontSize:"var(--font-size-base)" }}>Close Sales Team</Typography>
          </Box>
            </Box>

            <Box sx={{display:"none",justifyContent:"space-between",alignItems:"center",p:2}}>
            <Box sx={{display:"flex",gap:"5px",alignItems:"center"}}>
            <PiGreaterThan  />
            <Typography>Close Sales Team</Typography>
            <GoArrowDownRight />
            <Typography>As you begin using Close, we recommend you handle all your customer </Typography>
            </Box>
            <Typography >1d ago</Typography>
            </Box>

        </CardContent>
      </Card>
    </Box>
  );
}
