import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import { Box, Button, Grid, Paper, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function MantleLabs({ configData }) {
  const [Identifier, setIdentifier] = useState(0);

  useEffect(() => {
    const handleInterval = () => {
      const nextIdentifier = (Identifier + 1) % configData.labs.length;
      setIdentifier(nextIdentifier);
    };
    const intervalId = setInterval(handleInterval, 5000);
    return () => clearInterval(intervalId);
  }, [Identifier, configData.labs.length]);

  return (
    <Section
      title={configData.title}
      subTitle={configData.subTitle}
      subTitleVariant={"subtitle2"}
      subtitleSx={{ maxWidth: "min(961px,100%)" }}
    >
      <Stack>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIosIcon />}
          href={configData.buttonHref}
          target="_blank"
        >
          {configData.buttonText}
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          direction={"column"}
          gap={4}
        >
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
            // margin={"auto"}
          >
            {React.Children.toArray(
              configData.labs.map((lab, ind) => (
                <Grid
                  item
                  xs={6}
                  role="button"
                  onClick={() => setIdentifier(ind)}
                  p={{ xs: 1, md: 2 }}
                >
                  <Paper
                    sx={{
                      padding: "16px",
                      margin: "auto",
                      cursor: "pointer",
                      display: "flex",
                    }}
                    variant={ind === Identifier ? "translucent" : "transparent"}
                  >
                    <img
                      src={lab.logo}
                      alt={lab.name}
                      style={{ width: "100%", height: "auto", margin: "auto" }}
                    />
                  </Paper>
                </Grid>
              ))
            )}
          </Grid>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            {React.Children.toArray(
              configData.labs.map((lab, ind) => (
                <Box
                  item
                  xs={6}
                  role="button"
                  onClick={() => setIdentifier(ind)}
                  display={"inline"}
                >
                  {ind === Identifier ? (
                    <Box
                      sx={{
                        padding: "6px",
                        margin: "auto",
                        cursor: "pointer",
                        backgroundColor: "primary.main",
                        borderRadius: "50%",
                      }}
                    ></Box>
                  ) : (
                    <Paper
                      sx={{
                        padding: "4px",
                        margin: "auto",
                        cursor: "pointer",
                      }}
                      variant="translucent"
                    ></Paper>
                  )}
                </Box>
              ))
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={configData.labs[Identifier].right}
              alt={configData.labs[Identifier].name}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
