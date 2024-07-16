import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, Typography } from "@mui/material";

function LandingPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return (
    <>
      <AppBar
        position="sticky"
        sx={trigger ? {} : { bgcolor: "#ccc" }}
        elevation={trigger ? 4 : 0}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" noWrap sx={{ flexGrow: 1 }}>
            Ghaith Fineart
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ height: "calc(100vh - 56px)", bgcolor: "#ccc" }}>
        <Typography>setTest</Typography>
        <img src="../s.svg" alt="#" />
      </Container>
    </>
  );
}

export default LandingPage;
