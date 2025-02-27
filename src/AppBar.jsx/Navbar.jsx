import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";
import NavbarIcon from "./NavbarIcon";
import Sidebar from "./Sidebar"; // Import Sidebar

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box >
        <AppBar position="static" sx={{ backgroundColor: { xs: "black", md: "#fff" } }}>
          <Toolbar sx={{ ml: { xs: 0, md: 26 } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1 }}>
              <Search />
            </Box>
            <Box>
              <NavbarIcon />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Sidebar with mobile toggle functionality */}
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}  />
    </>
  );
};

export default Navbar;
