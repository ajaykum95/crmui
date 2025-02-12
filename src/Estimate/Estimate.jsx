// import React, { useState } from "react";
// import { Box, Card, CardContent, Typography, IconButton, Divider, List, ListItem, ListItemText } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import AddIcon from "@mui/icons-material/Add";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import DownloadIcon from "@mui/icons-material/Download";

// const Estimate = () => {
//   const [servicesExpanded, setServicesExpanded] = useState(false);
//   const [documentsExpanded, setDocumentsExpanded] = useState(false);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}>
//       {/* Services Section */}
//       <Card>
//         <CardContent>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6">Services</Typography>
//             <IconButton onClick={() => setServicesExpanded(!servicesExpanded)}>
//               {servicesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </IconButton>
//           </Box>
//           <Divider sx={{ my: 1 }} />
//           {servicesExpanded && (
//             <List>
//               {["GST Registration", "GST Registration"].map((service, index) => (
//                 <ListItem key={index} disableGutters secondaryAction={
//                   <IconButton>
//                     <CheckCircleIcon color="success" />
//                   </IconButton>
//                 }>
//                   <ListItemText primary={service} secondary="License & Certification" />
//                 </ListItem>
//               ))}
//               <ListItem disableGutters>
//                 <IconButton>
//                   <AddIcon />
//                 </IconButton>
//                 <ListItemText primary="Add More Services" />
//               </ListItem>
//             </List>
//           )}
//         </CardContent>
//       </Card>

//       {/* Documents Section */}
//       <Card>
//         <CardContent>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6">Documents</Typography>
//             <IconButton onClick={() => setDocumentsExpanded(!documentsExpanded)}>
//               {documentsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </IconButton>
//           </Box>
//           <Divider sx={{ my: 1 }} />
//           {documentsExpanded && (
//             <List>
//               {["Aadhaar Card", "Aadhaar Card"].map((document, index) => (
//                 <ListItem key={index} disableGutters secondaryAction={
//                   <>
//                     <IconButton>
//                       <RefreshIcon />
//                     </IconButton>
//                     <IconButton>
//                       <CheckCircleIcon color="success" />
//                     </IconButton>
//                   </>
//                 }>
//                   <ListItemText primary={document} />
//                 </ListItem>
//               ))}
//               <ListItem disableGutters>
//                 <IconButton>
//                   <AddIcon />
//                 </IconButton>
//                 <ListItemText primary="Add More Documents" />
//               </ListItem>
//             </List>
//           )}
//         </CardContent>
//       </Card>

//       {/* Invoices Section */}
//       <Card>
//         <CardContent>
//           <Typography variant="h6">Invoices</Typography>
//           <List>
//             {["EST2425BITI0001", "EST2425BITI0001"].map((invoice, index) => (
//               <ListItem key={index} disableGutters secondaryAction={
//                 index === 0 ? (
//                   <IconButton>
//                     <DownloadIcon color="error" />
//                   </IconButton>
//                 ) : (
//                   <IconButton>
//                     <CheckCircleIcon color="success" />
//                   </IconButton>
//                 )
//               }>
//                 <ListItemText primary={invoice} />
//               </ListItem>
//             ))}
//           </List>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Estimate;


import { useState } from "react"
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
  Paper,
  Button,
  Collapse,
} from "@mui/material"
import { ExpandMore, ExpandLess, Add, MoreVert, Edit, Refresh, Download, Check } from "@mui/icons-material"

const initialSections = {
  services: {
    title: "Services",
    count: 5,
    items: [
      { id: 1, title: "GST Registration", subtitle: "License & Certification" },
      { id: 2, title: "GST Registration", subtitle: "License & Certification" },
    ],
    showAll: false,
  },
  documents: {
    title: "Documents",
    count: 5,
    items: [
      { id: 1, title: "Aadhaar Card", status: "verified" },
      { id: 2, title: "Aadhaar Card", status: "verified" },
    ],
    showAll: false,
  },
  invoices: {
    title: "Invoices",
    count: 2,
    items: [
      { id: 1, title: "EST2425BIT10001", type: "download" },
      { id: 2, title: "EST2425BIT10001", type: "pending" },
    ],
    showAll: false,
  },
}

export default function Estimate() {
  const [sections, setSections] = useState(initialSections)
  const [expanded, setExpanded] = useState({
    services: true,
    documents: true,
    invoices: true,
  })

  const toggleSection = (section) => {
    setExpanded({ ...expanded, [section]: !expanded[section] })
  }

  const toggleShowMore = (section) => {
    setSections({
      ...sections,
      [section]: {
        ...sections[section],
        showAll: !sections[section].showAll,
      },
    })
  }

  const renderIcon = (type) => {
    switch (type) {
      case "verified":
        return <Check sx={{ color: "success.main" }} />
      case "download":
        return <Download sx={{ color: "primary.main" }} />
      case "pending":
        return <Refresh sx={{ color: "primary.main" }} />
      default:
        return null
    }
  }

  const renderSection = (key, section) => {
    const visibleItems = section.showAll ? section.items : section.items.slice(0, 2)

    return (
      <Paper sx={{ mb: 2, overflow: "hidden" }} elevation={0}>
        <ListItem button onClick={() => toggleSection(key)} sx={{ bgcolor: "grey.100" }}>
          {expanded[key] ? <ExpandLess /> : <ExpandMore />}
          <ListItemText
            primary={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">{section.title}</Typography>
                <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
                  {section.count}
                </Typography>
              </Box>
            }
          />
          <IconButton size="small">
            <Add />
          </IconButton>
        </ListItem>

        <Collapse in={expanded[key]}>
          <List disablePadding>
            {visibleItems.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  "&:last-child": { borderBottom: 0 },
                }}
                secondaryAction={
                  <Box>
                    {key === "services" && (
                      <>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <MoreVert fontSize="small" />
                        </IconButton>
                      </>
                    )}
                    {(key === "documents" || key === "invoices") && renderIcon(item.status || item.type)}
                  </Box>
                }
              >
                {key === "services" && (
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: "error.light",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      GR
                    </Box>
                  </ListItemIcon>
                )}
                {key === "documents" && (
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: "warning.light",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      AC
                    </Box>
                  </ListItemIcon>
                )}
                {key === "invoices" && (
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: "primary.light",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      {item.type === "download" ? <Download fontSize="small" /> : <Refresh fontSize="small" />}
                    </Box>
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{
                    variant: "body2",
                  }}
                  secondaryTypographyProps={{
                    variant: "caption",
                  }}
                />
              </ListItem>
            ))}
            {section.items.length > 2 && !section.showAll && (
              <Button fullWidth onClick={() => toggleShowMore(key)} sx={{ textTransform: "none", py: 1 }}>
                Show {section.count - 2} more
              </Button>
            )}
          </List>
        </Collapse>
      </Paper>
    )
  }

  return (
    <Box sx={{ width:"100%",mt:2 }}>
      {Object.entries(sections).map(([key, section]) => renderSection(key, section))}
    </Box>
  )
}

