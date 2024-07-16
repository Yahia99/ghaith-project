import React, { useState } from "react";
import Box from "@mui/material/Box";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = (newOpen: boolean) => {
    setIsOpen(!newOpen);
  };
  return (
    <Box sx={{ height: "100vh", bgcolor: "#ccc" }}>
      <AppBar component="nav" position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => open(isOpen)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
