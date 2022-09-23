import {
  Box,
  Button,
  Container,
  Divider,
  Fab,
  Fade,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import InstagramIcon from "@mui/icons-material/Instagram";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SocialIcons from "../components/SocialIcons";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NextLink from "../components/NextLink";

const FooterConfigData = {
  showTopData: true,
  titleVariant: "body2",
  colOne: {
    title: "Email",
    list: [
      {
        title: "For information & support:",
        text: "hello@assetmantle.one",
        email: "hello@assetmantle.one",
      },
      {
        title: "For collaborations & interests:",
        text: "communications@assetmantle.one",
        email: "communications@assetmantle.one",
      },
    ],
  },
  colTwo: {
    title: "Placeholder",
    list: [
      {
        title: "Documentation",
        link: {
          text: "Documentation",
          href: "https://docs.assetmantle.one/",
        },
      },
      {
        title: "MediaKit",
        link: {
          text: "MediaKit",
          href: "https://docs.assetmantle.one/MediaKit/",
        },
      },
      {
        title: "Blog",
        link: {
          text: "Blog",
          href: "http://blog.assetmantle.one/",
        },
      },
      {
        title: "Whitepaper",
        link: {
          text: "Whitepaper",
          href: "https://docs.assetmantle.one/AssetMantle_Whitepaper/",
        },
      },
      {
        title: "Buy $MNTL",
        link: {
          text: "Buy $MNTL",
          href: "https://app.osmosis.zone/?from=USDC&to=MNTL",
        },
      },
      {
        title: "Tokenomics",
        link: {
          text: "Tokenomics",
          href: "/about#mntl-token-distribution",
        },
      },
    ],
  },
  colThree: {
    title: "Products",
    list: [
      {
        title: "MantlePlace",
        link: {
          text: "MantlePlace",
          href: "https://marketplace.assetmantle.one/",
        },
      },
      {
        title: "MantleBuilder",
        link: {
          text: "MantleBuilder",
          href: "https://docs.assetmantle.one/MantleBuilder_Overview/",
        },
      },
      {
        title: "MantleWallet",
        link: {
          text: "MantleWallet",
          href: "https://wallet.assetmantle.one/",
        },
      },
      {
        title: "MantleExplorer",
        link: {
          text: "MantleExplorer",
          href: "https://explorer.assetmantle.one/",
        },
      },
      {
        title: "MantlePlace Devnet",
        link: {
          text: "MantlePlace Devnet",
          href: "https://devnet.assetmantle.one/",
        },
      },
      {
        title: "Mantle-1 Chain",
        link: {
          text: "Mantle-1 Chain",
          href: "/about#mntl-token-info",
        },
      },
    ],
  },
  colFour: {
    title: "Placeholder",
    list: [
      {
        title: "interNFT",
        link: {
          text: "interNFT",
          href: "https://internft.org/",
        },
      },
      {
        title: "Grants",
        link: {
          text: "Grants",
          href: "https://grants.assetmantle.one/",
        },
      },
      {
        title: "Airdrops",
        link: {
          text: "Airdrops",
          href: "https://airdrop.assetmantle.one/",
        },
      },
      {
        title: "About",
        link: {
          text: "About",
          href: "/about",
        },
      },
      {
        title: "Ecosystems",
        link: {
          text: "Ecosystems",
          href: "/ecosystems",
        },
      },
      {
        title: "Access our Resources",
        link: {
          icon: <NorthEastIcon />,
          text: "MediaKit",
          href: "https://docs.assetmantle.one/MediaKit",
        },
      },
    ],
  },
};

const footerStyle = {
  mt: 10,
  py: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "left" },
};

const linkStyles = {
  color: "primary.light",
  "&:hover": {
    color: "primary.main",
  },
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Footer(props) {
  return (
    <>
      <Paper sx={{ py: 8 }} variant="translucent">
        <Container maxWidth="lg">
          <Stack
            spacing={6}
            // alignItems="stretch"
            // justifyContent="space-between"
          >
            {FooterConfigData.showTopData === true && (
              <Grid container spacing={4} backgroundColor="transparent">
                <Grid item xs={12} sm={6} md={3}>
                  {FooterConfigData.colOne.list &&
                    Array.isArray(FooterConfigData.colOne.list) &&
                    FooterConfigData.colOne.list.length > 0 && (
                      <Stack
                        sx={{ pt: 3 }}
                        spacing={3}
                        alignItems={{ xs: "center", md: "start" }}
                      >
                        {FooterConfigData.colOne.list.map((item, index) => (
                          <Stack
                            key={index}
                            spacing={0.5}
                            backgroundColor="transparent"
                            alignItems={{ xs: "center", md: "start" }}
                          >
                            <Typography variant="caption">
                              {item.title}
                            </Typography>
                            <NextLink
                              color="primary.main"
                              underline="hover"
                              variant="caption"
                              href={`mailto:${item.text}`}
                            >
                              {item.text}
                            </NextLink>
                          </Stack>
                        ))}
                        <SocialIcons spacing={1} size="small" />
                      </Stack>
                    )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{
                    textAlign: "center",
                    // margin: { xs: 0, sm: "auto", md: 0 },
                  }}
                >
                  {FooterConfigData.colTwo.list &&
                    Array.isArray(FooterConfigData.colTwo.list) &&
                    FooterConfigData.colTwo.list.length > 0 && (
                      <Stack sx={{ pt: 3 }} spacing={2}>
                        {FooterConfigData.colTwo.list.map((item, index) => (
                          <Typography
                            variant="caption"
                            key={`${index}sa${item}`}
                          >
                            <NextLink
                              color="primary.main"
                              underline="hover"
                              variant="caption"
                              href={item.link.href}
                            >
                              {item.link.text}
                            </NextLink>
                          </Typography>
                        ))}
                      </Stack>
                    )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{
                    textAlign: "center",
                    // margin: { xs: 0, sm: "auto", md: 0 },
                  }}
                >
                  {FooterConfigData.colThree.list &&
                    Array.isArray(FooterConfigData.colThree.list) &&
                    FooterConfigData.colThree.list.length > 0 && (
                      <Stack sx={{ pt: 3 }} spacing={2}>
                        {FooterConfigData.colThree.list.map((item, index) => (
                          <Typography
                            variant="caption"
                            key={`${index}sa${item}`}
                          >
                            <NextLink
                              color="primary.main"
                              underline="hover"
                              variant="caption"
                              href={item.link.href}
                            >
                              {item.link.text}
                            </NextLink>
                          </Typography>
                        ))}
                      </Stack>
                    )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{
                    textAlign: "center",
                    // margin: { xs: 0, sm: "auto", md: 0 },
                  }}
                >
                  {FooterConfigData.colFour.list &&
                    Array.isArray(FooterConfigData.colFour.list) &&
                    FooterConfigData.colFour.list.length > 0 && (
                      <Stack sx={{ pt: 3 }} spacing={2}>
                        {FooterConfigData.colFour.list.map((item, index) => (
                          <NextLink
                            key={index}
                            color="primary.main"
                            underline="hover"
                            variant="caption"
                            href={item.link.href}
                          >
                            {item.link.text}
                          </NextLink>
                        ))}
                      </Stack>
                    )}
                </Grid>
              </Grid>
            )}
            <Divider sx={{ borderColor: "grey.600" }} />
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <img src="/static/Logo.svg" style={{ maxWidth: "200px" }}></img>
              <Typography
                variant="caption"
                component="p"
                sx={{ textAlign: "center" }}
              >
                © AssetMantle {new Date().getFullYear()} - All rights reserved{" "}
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Paper>
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: "background.default",
            color: "primary.main",
            ":hover": {
              backgroundColor: "primary.main",
              color: "background.default",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
