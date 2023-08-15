import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import Section from "../../components/Section";
import CallMadeIcon from "@mui/icons-material/CallMade";

export default function KolIM({ configData }) {
  return (
    <Section
      title={configData.title}
      subTitle={configData.subTitle}
      subTitleVariant={"subtitle2"}
      subtitleSx={{ maxWidth: "min(961px,100%)" }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          ".splide__pagination": {
            gap: 2,
            bottom: "-20px",
          },
          ".splide__pagination__page": {
            transform: "scale(1.4)",
          },
          ".splide__pagination__page.is-active": {
            backgroundColor: "primary.main",
            transform: "scale(1.7)",
          },
        }}
      >
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            rewind: true,
            width: "100%",
            gap: "0px",
            autoplay: true,
            interval: 5000,
            perPage: 1,
            perMove: 1,
            arrows: false,
            pauseOnHover: false,
          }}
        >
          <SplideTrack>
            {React.Children.toArray(
              configData.initiatives.map((initiative) => (
                <SplideSlide>
                  <Grid container spacing={3} sx={{ height: "100%" }}>
                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                      <img
                        src={initiative.icon}
                        alt={initiative.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          margin: "auto",
                          marginRight: 0,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack
                        justifyContent={"center"}
                        alignItems={{ xs: "center", md: "start" }}
                        spacing={2}
                        height="100%"
                      >
                        <Typography variant="h4" component={"h4"}>
                          {initiative.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          component={"p"}
                          sx={{
                            width: "min(100%,380px)",
                          }}
                        >
                          {initiative.description}
                        </Typography>
                        <Link
                          href={initiative.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ textDecoration: "none" }}
                        >
                          Learn More <CallMadeIcon />
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </SplideSlide>
              ))
            )}
          </SplideTrack>
        </Splide>
      </Box>
    </Section>
  );
}
