import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";

const containerStyles = {
  padding: "0 6px",
  px: 3,
  color: "primary.main",
};

const navLinkStyle = {
  textTransform: "capitalize",
  color: "primary.light",
  fontWeight: 500,
  textDecoration: "none",
  textAlign: {
    xs: "center",
  },
  padding: {
    xs: "8px 16px",
    sm: "16px",
  },
};

export default function Header(props) {
  const { Window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      name: "About",
      link: "https://docs.internft.org/",
    },
    {
      name: "Standards",
      link: "https://github.com/interNFT/nft-rfc",
    },
  ];
  const container =
    Window !== undefined ? () => Window().document.body : undefined;

  return (
    <>
      <AppBar
        // position="static"
        color="primary"
        sx={{ backgroundColor: "navBg", backdropFilter: "blur(2px)" }}
      >
        <Container sx={containerStyles} disableGutters maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", sm: "space-between" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="/static/Logo.svg"
              alt="logo"
              onClick={() => window.open("/", "_self")}
              style={{ cursor: "pointer" }}
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link
                  variant="body3"
                  key={item}
                  sx={navLinkStyle}
                  href={item.link}
                  onClick={(e) => item.link === "" && e.preventDefault()}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              textAlign: "center",
              backgroundColor: "primary.dark",
              height: "100%",
              pt: 6,
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem key={item}>
                  <ListItemButton
                    sx={navLinkStyle}
                    component="a"
                    href={item.link}
                    onClick={(e) => item.link === "" && e.preventDefault()}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
