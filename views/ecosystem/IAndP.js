import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

export default function IAndP({ configData }) {
  const [Identifier, setIdentifier] = useState(0);

  useEffect(() => {
    const change = () => {
      const nextIdentifier = (Identifier + 1) % configData.IPs.length;
      setIdentifier(nextIdentifier);
    };
    const Modifier = setInterval(change, 5000);

    return () => clearInterval(Modifier);
  }, [Identifier]);

  return (
    <Section title={configData.title} subTitle={configData.subTitle}>
      <Grid container spacing={5} width={"100%"}>
        <Grid
          items
          xs={12}
          md={4}
          display={"flex"}
          alignItems={"center"}
          py={2}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            width={"98%"}
          >
            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
            >
              {React.Children.toArray(
                configData.IPs.map((lab, ind) => (
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
            <Stack spacing={2} alignItems={{ xs: "center" }} width={"100%"}>
              {React.Children.toArray(
                configData.IPs.map((item, ind) => (
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems={"center"}
                    justifyContent={{ xs: "center", md: "start" }}
                    spacing={2}
                    role="button"
                    onClick={() => setIdentifier(ind)}
                    sx={{
                      opacity: ind === Identifier ? "1" : "0.2",
                      transform: {
                        xs: ind === Identifier ? "scale(1)" : "scale(0.8)",
                        md:
                          ind === Identifier
                            ? "scale(1) translateX(0)"
                            : "scale(0.8) translateX(-10%)",
                      },
                      filter:
                        ind === Identifier
                          ? "grayScale(0%)"
                          : "grayScale(100%)",
                      transition: "all 300ms ease-in-out",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{ width: "min(20%,64px)", height: "auto" }}
                    />{" "}
                    <Typography variant="h4" component="h4">
                      {item.title}
                    </Typography>
                  </Stack>
                ))
              )}
            </Stack>
          </Stack>
        </Grid>
        <Grid items xs={12} md={8} py={2}>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={3}
          >
            <Divider
              orientation={"vertical"}
              flexItem
              display={{ xs: "none", md: "static" }}
            />
            <Divider
              orientation={"horizontal"}
              flexItem
              display={{ xs: "static", md: "none" }}
            />
            <Grid
              container
              spacing={2}
              justifyContent={{ xs: "center", md: "start" }}
            >
              {React.Children.toArray(
                configData.IPs[Identifier].coms.map((item) => (
                  <Grid items xs={6} position={"relative"} width={"100%"}>
                    <Stack
                      sx={{
                        padding: "12px 0",
                        width: "100%",
                        position: "static",
                      }}
                      spacing={1}
                    >
                      <div
                        sx={{
                          position: "relative",
                          width: "100%",
                          display: "inline",
                        }}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          style={{
                            width: "min(120px,100%)",
                            height: "auto",
                          }}
                        />
                      </div>
                      <Typography variant="body2" component={"p"} width={"90%"}>
                        {item.details}
                      </Typography>
                    </Stack>
                  </Grid>
                ))
              )}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
