import {
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import Section from "../components/Section";
import { Box } from "@mui/system";

const headerLogoStyles = {
  height: "170px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const leftSubsectionData = {
  items: [
    {
      image: "images/universe_section/Mantle_Products.png",
      title: "Mantle Products",
      subData: [
        "MantlePlace",
        "MantleBuilder",
        "MantleWallet",
        "MantleExplorer",
        "+2 More",
      ],
    },
    {
      image: "images/universe_section/Mantle_Chain.png",
      title: "Mantle-1 Chain",
      subData: ["$MNTL Token", "Foundation Validators"],
    },
    {
      image: "images/universe_section/Mantle_Creatives.png",
      title: "Mantle Creatives",
      subData: ["Membership NFTs", "Mantlers", "AssMan NFTs"],
    },
    {
      image: "images/universe_section/Community_Initiatives.png",
      title: "Community Initiatives",
      subData: ["InterNFT", "Artist4Web3", "MantleArmy"],
    },
  ],
};

const rightSubsectionData = {
  items: [
    {
      image: "images/universe_section/Partnerships.png",
      title: "Partnerships",
      subData: ["Vaildators", "DAOs", "Investors", "Media", "+2 More"],
    },
    {
      image: "images/universe_section/Ecosystem_Projects.png",
      title: "Ecosystem Projects",
      subData: ["MyriadFlow", "RushRaids", "Xtrathin"],
    },
    {
      image: "images/universe_section/Integrations.png",
      title: "Integrations",
      subData: ["Modules", "NFT Toolings", "Analytics", "LaunchPads"],
    },
    {
      image: "images/universe_section/Grants.png",
      title: "Grants",
      subData: ["Internal Development", "External Integrations", "Products"],
    },
  ],
};

// leftSubsectionData.items.map((ele) => {
//   ele.subData.map((data) => {
//     console.log(data);
//   });
// });

export default function UniverseSection() {
  return (
    <Section
      title="The Mantle Universe"
      subTitle="There are other entities, apart from AssetMantle, that come under our central entity called MantleLabs, which span Community based, Partner based and other signature creations. "
    >
      <Button
        variant="contained"
        component="a"
        href="https://assetmantle.one/ecosystems"
        size="large"
      >
        Learn More <KeyboardArrowRightIcon />
      </Button>
      <Grid disableGutters spacing={2} container>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Paper variant="translucent" sx={headerLogoStyles}>
              <img width="80%" src="/static/Logo.svg" />
            </Paper>
            <Paper variant="translucent">
              <Grid
                justifyContent="space-around"
                alignItems="start"
                container
                gap={2}
              >
                {leftSubsectionData.items.map((element, index) => {
                  return (
                    <Grid key={index} item xs={4}>
                      <Stack>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <img width="98px" src={element.image}></img>
                        </Box>
                        <Typography
                          align="center"
                          variant="h4"
                          color="primary.main"
                        >
                          {element.title}
                        </Typography>
                        <List>
                          {element.subData.map((listItem, idx) => (
                            <ListItem
                              sx={{ display: "flex", justifyContent: "center" }}
                              key={idx}
                            >
                              <Typography align="center" variant="body1">
                                {listItem}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Paper variant="translucent" sx={headerLogoStyles}>
              <img height="80%" src="images/universe_section/MLLogo.png" />
            </Paper>
            <Paper variant="translucent">
              <Grid
                sx={{ height: "804px" }}
                justifyContent="space-around"
                alignItems="start"
                container
                gap={2}
              >
                {rightSubsectionData.items.map((element, index) => {
                  return (
                    <Grid key={index} item xs={4}>
                      <Stack>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <img width="98px" src={element.image}></img>
                        </Box>
                        <Typography
                          align="center"
                          variant="h4"
                          color="primary.main"
                        >
                          {element.title}
                        </Typography>
                        <List>
                          {element.subData.map((listItem, idx) => (
                            <ListItem
                              sx={{ display: "flex", justifyContent: "center" }}
                              key={idx}
                            >
                              <Typography align="center" variant="body1">
                                {listItem}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
