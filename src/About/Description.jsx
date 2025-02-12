// import React from "react";
// import { Card, CardContent, Typography, IconButton, Link, Divider, Stack } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EditIcon from "@mui/icons-material/Edit";
// import LinkIcon from "@mui/icons-material/Link";
// import NotesIcon from "@mui/icons-material/Notes";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// const Description = () => {
//   return (
//     <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2,ml:30 }}>
//       <CardContent>
//         <Typography variant="h6" fontWeight="bold">
//           ABOUT
//         </Typography>

//         {/* Address Section */}
//         <Stack direction="row" alignItems="center" spacing={1}>
//           <LocationOnIcon color="primary" />
//           <Typography variant="body2">
//             PO Box 7775 #69574 <br />
//             San Francisco, CA 94120 <br />
//             United States
//           </Typography>
//           <IconButton size="small">
//             <EditIcon fontSize="small" />
//           </IconButton>
//           <IconButton size="small">
//             <ContentCopyIcon fontSize="small" />
//           </IconButton>
//         </Stack>

//         <Divider sx={{ my: 1 }} />

//         {/* Website Link */}
//         <Stack direction="row" alignItems="center" spacing={1}>
//           <LinkIcon color="primary" />
//           <Link href="https://close.com" target="_blank" underline="hover">
//             close.com
//           </Link>
//         </Stack>

//         <Divider sx={{ my: 1 }} />

//         {/* Description */}
//         <Stack direction="row" alignItems="center" spacing={1}>
//           <NotesIcon color="primary" />
//           <Typography variant="body2">
//             Here you can add your lead description and a URL.
//           </Typography>
//         </Stack>

//         <Divider sx={{ my: 1 }} />

//         {/* Blog Link */}
//         <Typography variant="body2">
//           Don't forget to visit our blog for actionable sales tips:{" "}
//           <Link href="https://close.com/blog" target="_blank" underline="hover">
//             close.com/blog
//           </Link>
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default Description;
import React from "react";
import {  Typography, Link, Divider, Stack } from "@mui/material";

const Description=()=>{
    return(
        <>
                <Stack direction="row" alignItems="center" spacing={1}>
          {/* <NotesIcon color="primary" /> */}
          <Typography variant="body2">
            Here you can add your lead description and a URL.
          </Typography>
        </Stack>

        {/* <Divider sx={{ my: 1 }} /> */}

        {/* Blog Link */}
        <Typography variant="body2">
          Don't forget to visit our blog for actionable sales tips:{" "}
          <Link href="https://close.com/blog" target="_blank" underline="hover">
            close.com/blog
          </Link>
        </Typography>

        </>
    )
}
export default Description;