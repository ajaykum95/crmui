import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Divider, Avatar, Box, Typography } from "@mui/material";
import user from "../Image/user.png";
import { Link } from "react-router-dom";
import { menuItems } from "./SideNavData";
const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawerContent = (
    <Box sx={{ width: 220 }}>
      <Toolbar sx={{ display: "flex",   p:1, borderBottom: "1px solid #ccc" }}>
        <Avatar src={user} alt="User" sx={{ width: 60, height: 60 }} />
      </Toolbar>

      <List>
        {menuItems.map((section, index) => (
          <Box key={index} >
            {section.title && index !== 0 && <Divider sx={{ my: 1 }} />} {/* Divider before section titles */}
            {section.title && (
              <Typography
                variant="caption"
                sx={{ px: 2, color: "gray", textTransform: "uppercase", fontSize: "0.7rem", fontWeight: 500 }}
              >
                {section.title}
              </Typography>
            )}
            {section.items.map((item, idx) => (
              <ListItemButton key={idx} sx={{ py: 0.3 }}  component={Link}
              to={item.path}
>
                <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "0.8rem" }} />
              </ListItemButton>
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Permanent Sidebar for Large Screens */}
      <Drawer
        variant="permanent"
        sx={{
          width: 220,
        //   flexShrink: 0,
          display: { xs: "none", md: "flex" },
          [`& .MuiDrawer-paper`]: { width: 220},
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Temporary Sidebar for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ 
          display: { xs: "block", md: "none" },
          [`& .MuiDrawer-paper`]: { width: 220, mt: 7 }, // Add margin-top when opened on mobile
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
