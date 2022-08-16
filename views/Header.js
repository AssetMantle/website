import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";

function ElevationScroll(props) {
  const { children } = props;
  // implement scroll trigger. Enable hystersis so that we can identify up-scroll from down-scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  let appBarJSX = React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: { backgroundColor: trigger ? "rgba(0,0,0,0.75)" : "transparent" },
  });

  return appBarJSX;
}

// contents of menu and/or drawer
const itemList = [
  {
    menuName: "Products",
    isExternalURL: false,
    isNestMenuCollapsed: false,
    url: [
      {
        menuName: "In-House",
        isExternalURL: false,
        isNestMenuCollapsed: false,
        url: [
          {
            menuName: "MantlePlace",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "MantleBuilder",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "MantleWallet",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "MantleExplorer",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://assetmantle.one/mantleplace",
          },
        ],
      },
      {
        menuName: "External",
        isExternalURL: false,
        isNestMenuCollapsed: true,
        url: [
          {
            menuName: "Wallet",
            isExternalURL: false,
            isNestMenuCollapsed: true,
            url: [
              {
                menuName: "Keplr",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
              {
                menuName: "Cosmostation",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
              {
                menuName: "Everstake",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
              {
                menuName: "Citadel",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
            ],
          },
          {
            menuName: "Explorer",
            isExternalURL: false,
            isNestMenuCollapsed: true,
            url: [
              {
                menuName: "MintScan",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
              {
                menuName: "PostCapitalist",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
              {
                menuName: "BigDipper",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
              {
                menuName: "StakingRewards",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://assetmantle.one/mantleplace",
              },
            ],
          },
        ],
      },
    ],
  },
  /* {
    menuName: "Resources",
    isExternalURL: false,
    isNestMenuCollapsed: true,
    url: [
      {
        menuName: "About",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: "https://assetmantle.one/mantleplace",
      },
      {
        menuName: "WhitePaper",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: "https://assetmantle.one/mantleplace",
      },
      {
        menuName: "Documentation",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: "https://assetmantle.one/mantleplace",
      },
      {
        menuName: "FAQ",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: "https://assetmantle.one/mantleplace",
      },
      {
        menuName: "Support",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: "https://assetmantle.one/mantleplace",
      },
    ],
  }, */
  {
    menuName: "Build",
    isExternalURL: false,
    isNestMenuCollapsed: false,
    url: [
      {
        menuName: "Docs",
        isExternalURL: true,
        isNestMenuCollapsed: false,
        url: [
          {
            menuName: "Whitepaper",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "Developer Docs",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://assetmantle.one/mantleplace",
          },
        ],
      },
      {
        menuName: "Developer Resources",
        isExternalURL: true,
        isNestMenuCollapsed: false,
        url: [
          {
            menuName: "GitHub",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "Grants",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "interNFT",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "DevNet",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://assetmantle.one/mantleplace",
          },
        ],
      },
    ],
  },
  {
    menuName: "$MNTL",
    isExternalURL: false,
    isNestMenuCollapsed: true,
    url: [
      {
        menuName: "Token",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: [
          {
            menuName: "Tokenomics",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://assetmantle.one/mantleplace",
          },
          {
            menuName: "MantleDrop",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://assetmantle.one/mantleplace",
          },
        ],
      },
      {
        menuName: "Tracking",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: "https://assetmantle.one/mantleplace",
      },
    ],
  },
];

const createMenuItem = (menuObj) => {
  if (typeof menuObj.url == "string") {
    return;
  }
};

const setDrawer = (isOpen) => (event) => {
  if (
    event &&
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    return;
  }

  setDrawerOpen(isOpen);
};

const toggleDrawer = () => {
  setDrawerOpen(!drawerOpen);
};

const drawerContents = (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={setDrawer(false)}
    onKeyDown={setDrawer(false)}
  >
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  let blankArray = new Array(itemList.length).fill(null);

  const [anchorEl, setAnchorEl] = useState(blankArray);
  const isOpen = (menuVal) => Boolean(anchorEl[menuVal]);
  const handleClick = (menuVal, event) => {
    console.log(
      "inside handleclick, menuVal: ",
      menuVal,
      " and event: ",
      event
    );

    let newArray = new Array(itemList.length).fill(null);
    newArray[menuVal] = event.currentTarget;
    // console.log("newArray: ", newArray, " arraySize: ", newArray.length);
    setAnchorEl(newArray);
    console.log("anchorEl: ", anchorEl);
  };
  const handleClose = (menuVal, event) => {
    // event.preventDefault();
    let newArray = new Array(itemList.length).fill(null);
    setAnchorEl(newArray);
  };

  const menuListJSX = (
    <>
      {itemList.map((item, index) => (
        <>
          <Button
            id={item.menuName}
            key={item.menuName}
            onClick={(e) => {
              handleClick(index, e);
            }}
          >
            {item.menuName}
          </Button>
          <Menu
            id={item.menuName}
            key={index}
            aria-labelledby="menu-item"
            anchorEl={anchorEl && anchorEl[index]}
            open={isOpen(index)}
            onClose={(e) => {
              handleClose(index, e);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {/* <ListItemButton>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse> */}
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </>
      ))}
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Container disableGutters maxWidth="lg">
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: { xs: "flex-start", sm: "space-between" },
              }}
            >
              {/*  <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                sx={{
                  edge: "start",
                  mr: 1,
                  display: { xs: "box", sm: "none" },
                }}
              >
                <MenuIcon color="primary" />
              </IconButton> */}
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                }}
              >
                <img
                  src="/static/Logo.svg"
                  alt="logo"
                  onClick={() => window.open("/", "_self")}
                  style={{ cursor: "pointer", maxWidth: "200px" }}
                />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}></Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      {/* <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={setDrawer(false)}
        onOpen={setDrawer(true)}
      >
        {drawerContents}
      </SwipeableDrawer> */}
    </>
  );
}
