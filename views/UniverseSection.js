import { Grid, List, ListItem, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Section from "../components/Section";

const headerLogoStyles = {
  height: "170px",
};

export default function UniverseSection() {
  return (
    <Section
      title="THE MANTLE UNIVERSE"
      subTitle="There are other entities, apart from AssetMantle, that come under our central entity called MantleLabs, which span Community based, Partner based and other signature creations. "
    >
      <Grid gap={2} container>
        <Grid item xs={5}>
          <Paper variant="translucent" sx={headerLogoStyles}>
            <img width="90%" src="images/universe_section/AMLogo.png" alt="" />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper variant="translucent" sx={headerLogoStyles}>
            <img width="90%" src="images/universe_section/MLLogo.png" alt="" />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper variant="translucent">
            <Grid
              justifyContent="center"
              alignItems="start"
              container
              sx={{ xs: 6 }}
              gap={2}
            >
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img
                    width="98px"
                    src="images/universe_section/MAntle_Products.png"
                  ></img>
                  <Typography>MANTLE PRODUCTS</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">MantlePlace</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">MantleBuilder</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">MantleWallet</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">MantleExplorer</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">+2 MORE</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img
                    width="98px"
                    src="images/universe_section/Mantle_Chain.png"
                  ></img>
                  <Typography>MANTLE-1 CHAIN</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">$MNTL Token</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">
                        Foundation Validators
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img
                    width="98px"
                    src="images/universe_section/Community_Initiatives.png"
                  ></img>
                  <Typography>COMMUNITY INITIATIVES</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">InterNFT</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Artist4Web3</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">MantleArmy</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img
                    width="98px"
                    src="images/universe_section/Mantle_Creatives.png"
                  />
                  <Typography>MANTLE CREATIVES</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">Membership NFTs</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Mantlers</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">AssMan NFTs</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper variant="translucent">
            <Grid
              sx={{ xs: 6 }}
              justifyContent="center"
              alignItems="start"
              container
              gap={2}
            >
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img
                    width="98px"
                    src="images/universe_section/Partnerships.png"
                  />
                  <Typography>PARTNERSHIPS</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">Validators</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">DAOs</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Investors</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Media</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">+ 2 MORE</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img
                    width="98px"
                    src="images/universe_section/Ecosystem_Projects.png"
                  />
                  <Typography>ECOSYSTEM PROJECTS</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">MyriadFlow</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">RushRaids</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Xtrathin</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img
                    width="98px"
                    src="images/universe_section/Integrations.png"
                  />
                  <Typography>INTEGRATIONS</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">
                        $MNTL - [Wallets]
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">
                        Mantle-1 - [Explorers]
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Modules </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Toolings </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
              <Grid item sx={{ xs: 3 }}>
                <Stack justifyContent="center" alignItems="center">
                  <img width="98px" src="images/universe_section/Grants.png" />
                  <Typography>GRANTS</Typography>
                  <List>
                    <ListItem>
                      <Typography variant="caption">
                        Internal Development{" "}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">
                        External Integrations
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="caption">Products</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
            </Grid>
            {/**/}
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
}
