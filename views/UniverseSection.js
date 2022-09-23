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

// leftSubsectionData.items.map((ele) => {
//   ele.subData.map((data) => {
//     console.log(data);
//   });
// });

export default function UniverseSection({
  leftSubsectionData,
  rightSubsectionData,
  headerLogoStyles,
}) {
  return (
    <Section
      title={leftSubsectionData.sectionTitle}
      subTitle={leftSubsectionData.sectionSubTitle}
    >
      <Button
        variant={leftSubsectionData.buttonVariant}
        component="a"
        href="/ecosystems"
        size="large"
      >
        Learn More <KeyboardArrowRightIcon />
      </Button>
      <Grid spacing={2} container>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Paper variant="translucent" sx={headerLogoStyles}>
              <img width="80%" src="/static/Logo.svg" />
            </Paper>
            <Paper variant={leftSubsectionData.paperVariant}>
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
              <img
                width="80%"
                src="UniverseSection/MLLogo.png"
                style={{ maxWidth: "331px" }}
              />
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
                          variant={rightSubsectionData.titleVariant}
                          color={rightSubsectionData.titleColor}
                        >
                          {element.title}
                        </Typography>
                        <List>
                          {element.subData.map((listItem, idx) => (
                            <ListItem
                              sx={{ display: "flex", justifyContent: "center" }}
                              key={idx}
                            >
                              <Typography
                                align="center"
                                variant={rightSubsectionData.listVariant}
                              >
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
