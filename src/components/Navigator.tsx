import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BrushIcon from "@mui/icons-material/Brush";
import InfoIcon from "@mui/icons-material/Info";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ListSubheader from "@mui/material/ListSubheader";

// Custom Styled Components
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

// Important for .map function
const menu = ["About Me", "My Drawings", "Contact Me"];
const menuIcons = [<InfoIcon />, <ColorLensIcon />, <ContactPageIcon />];

function Navigator() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setIsDrawerOpen(true)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <BrushIcon
            sx={{
              mr: 2,
              display: { xs: "none", sm: "inline-block" },
            }}
          />
          <Typography variant="h6" component="div" noWrap flex={1}>
            Ghaith Fineart
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <Typography variant="h5" component="span" noWrap>
            Ghaith Fineart
          </Typography>
        </DrawerHeader>
        <Divider />
        <List subheader={<ListSubheader>Menu</ListSubheader>} sx={{ flex: 1 }}>
          {/* 
        TODO!!!
        add an action when clicking on a link to navigate to the clicked link
        */}
          {menu.map((text, index) => (
            <ListItem disablePadding>
              <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                <ListItemIcon>{menuIcons[index]}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
export default Navigator;
