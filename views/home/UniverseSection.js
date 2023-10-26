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
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import React from "react";
import Section from "../../components/Section";

export default function UniverseSection({ configData }) {
  return (
    <Section
      title={configData.sectionTitle}
      subTitle={configData.sectionSubTitle}
    >
      <Button
        variant={configData.buttonVariant}
        component="a"
        href="/ecosystems"
        size="large"
      >
        Learn More <KeyboardArrowRightIcon />
      </Button>
      <Grid spacing={{ xs: 0, md: 4 }} container>
        {configData.subSections &&
          Array.isArray(configData.subSections) &&
          configData.subSections.length > 0 &&
          React.Children.toArray(
            configData.subSections.map((subSection) => (
              <Grid item xs={12} md={6} py={{ xs: 2, md: 0 }}>
                <Stack spacing={2} sx={{ height: "100%" }}>
                  <Paper
                    variant={configData.paperVariant}
                    sx={{
                      display: "flex",
                      py: 2,
                      aspectRatio: "16/6",
                    }}
                  >
                    <img
                      src={subSection.logo}
                      alt={subSection.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        ...subSection.styles,
                        objectPosition: "center",
                        objectFit: "scale-down",
                        margin: "auto",
                      }}
                    />
                  </Paper>
                  <Paper
                    variant={configData.paperVariant}
                    sx={{ height: "100%" }}
                  >
                    <Stack
                      direction="column"
                      gap={5}
                      px={{ xs: 1, md: 3 }}
                      pt={4}
                    >
                      {subSection.items.map((element, index) => {
                        return (
                          <Grid
                            key={index}
                            container
                            spacing={{ xs: 1, md: 3 }}
                          >
                            <Grid item xs={4} md={5} alignSelf="center">
                              <Paper
                                variant={subSection.childLogoBG}
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <img
                                  alt={element.title}
                                  src={element.image}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectPosition: "center",
                                  }}
                                ></img>
                              </Paper>
                            </Grid>
                            <Grid item xs={8} md={7}>
                              <Typography
                                variant="h4"
                                color="primary.light"
                                align="left"
                              >
                                {element.title}
                              </Typography>
                              <List>
                                {element.subData.map((listItem, idx) => (
                                  <ListItem
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                    key={idx}
                                  >
                                    <FiberManualRecordOutlinedIcon />
                                    <Typography variant="body2">
                                      {listItem}
                                    </Typography>
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Stack>
                  </Paper>
                </Stack>
              </Grid>
            ))
          )}
      </Grid>
    </Section>
  );
}
