import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import BasicMenu from "../components/BasicMenu";

// contents of menu and/or drawer
const itemList = [
  {
    menuName: "Products",
    isExternalURL: false,
    isNestMenuCollapsed: false,
    endIcon: <ExpandMoreIcon />,
    ratioWidthExist: true,
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
            url: "https://marketplace.assetmantle.one/",
          },
          {
            menuName: "MantleBuilder",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://docs.assetmantle.one/MantleBuilder_Overview/",
          },
          {
            menuName: "MantleWallet",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://wallet.assetmantle.one/",
          },
          {
            menuName: "MantleExplorer",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://explorer.assetmantle.one/",
          },
        ],
      },
      {
        menuName: "External",
        isExternalURL: false,
        isNestMenuCollapsed: true,
        titleExist: true,
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
                url: "https://www.keplr.app/",
              },
              {
                menuName: "Cosmostation",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://wallet.cosmostation.io/asset-mantle",
              },
              {
                menuName: "Everstake",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://everstake.one/assetmantle",
              },
              {
                menuName: "Citadel",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://app.citadel.one/",
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
                url: "https://www.mintscan.io/asset-mantle",
              },
              {
                menuName: "PostCapitalist",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://explorer.postcapitalist.io/AssetMantle",
              },
              {
                menuName: "BigDipper",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://bigdipper.live/assetmantle",
              },
              {
                menuName: "StakingRewards",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://www.stakingrewards.com/earn/asset-mantle/",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    menuName: "Build",
    isExternalURL: false,
    isNestMenuCollapsed: false,
    endIcon: <ExpandMoreIcon />,
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
            url: "https://blog.assetmantle.one/2022/03/01/mntl-tokenomics-and-utility/",
          },
          {
            menuName: "MantleDrop",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://airdrop.assetmantle.one/",
          },
        ],
      },
      {
        menuName: "Tracking",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: [
          {
            menuName: "CoinGecko",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://www.coingecko.com/en/coins/assetmantle/usd",
          },
          {
            menuName: "CoinMarketCap",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://coinmarketcap.com/currencies/assetmantle/",
          },
        ],
      },
    ],
  },
  {
    menuName: "$MNTL",
    isExternalURL: false,
    isNestMenuCollapsed: true,
    endIcon: <ExpandMoreIcon />,
    url: [
      {
        menuName: "Docs",
        isExternalURL: true,
        isNestMenuCollapsed: false,
        url: [
          {
            menuName: "About",
            isExternalURL: false,
            isNestMenuCollapsed: false,
            url: "/about",
          },
          {
            menuName: "Whitepaper",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://docs.assetmantle.one/AssetMantle_Whitepaper/",
          },
          {
            menuName: "Developer Docs",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://docs.assetmantle.one/Quick_Setup#overview",
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
            url: "https://github.com/AssetMantle",
          },
          {
            menuName: "Grants",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://grants.assetmantle.one/",
          },
          {
            menuName: "interNFT",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://internft.github.io/",
          },
          {
            menuName: "DevNet",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://devnet.assetmantle.one/",
          },
        ],
      },
    ],
  },
];

export default function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const setDrawer = (isDrawerOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(isDrawerOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const container =
    props.window !== undefined ? () => props.window().document.body : undefined;

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
              <IconButton
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
              </IconButton>
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
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                {itemList &&
                  Array.isArray(itemList) &&
                  itemList.length > 0 &&
                  itemList.map((data, index) => (
                    <BasicMenu
                      key={index}
                      title={data.menuName}
                      urls={data.url}
                      titleEndIcon={data.endIcon}
                      ratioWidthExist={data.ratioWidthExist}
                    />
                  ))}
              </Box>
            </Toolbar>
          </Container>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={drawerOpen}
              onClose={toggleDrawer}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "min(260px ,100%)",
                  p: 4,
                },
              }}
            >
              {itemList &&
                Array.isArray(itemList) &&
                itemList.length > 0 &&
                itemList.map((data, index) => (
                  <BasicMenu
                    key={index}
                    title={data.menuName}
                    urls={data.url}
                    titleEndIcon={data.endIcon}
                    ratioWidthExist={data.ratioWidthExist}
                  />
                ))}
            </Drawer>
          </Box>
        </AppBar>
      </ElevationScroll>

      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
