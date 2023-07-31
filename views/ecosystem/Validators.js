import React from "react";
import { Box, Card, CardMedia, Grid, Link, Stack } from "@mui/material";
import Section from "../../components/Section";

export default function Validators({ configData }) {
  return (
    <Section title={configData.title} subTitle={configData.subTitle}>
      <Box sx={{ position: "relative" }}>
        <Grid
          container
          spacing={1}
          sx={{
            width: "min(710px, 100%)",
            aspectRatio: "5/4",
            margin: "auto",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {React.Children.toArray(
            configData.vals.map((val) => (
              <Grid
                item
                xs={4}
                sx={{
                  position: "relative",
                  height: "max-content",
                  "@keyframes up": {
                    "0%": { transform: "translateY(0%)" },
                    "100%": { transform: "translateY(-66.66%)" },
                  },
                  "@keyframes down": {
                    "0%": { transform: "translateY(-66.66%)" },
                    "100%": { transform: "translateY(0%)" },
                  },
                  animation: `${val.dir} infinite 12000ms linear both`,
                }}
              >
                <Stack
                  spacing={1}
                  sx={{
                    height: "33%",
                  }}
                >
                  {React.Children.toArray(
                    val.imgs.map((item) => (
                      <Card
                        sx={{
                          background: "transparent",
                          border: "none",
                          padding: "0",
                          margin: "0",
                          boxShadow:
                            "0px 0px 60px 0px rgba(255, 198, 64, 0.50)",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={`${configData.imageFolderUrl}${item.name}.${
                            item.extension ? item.extension : "png"
                          }`}
                          alt={item.name}
                          sx={{
                            border: "none",
                            width: "100%",
                            height: "auto",
                            objectPosition: "center",
                            // transform: "scale(1.4)",
                          }}
                        />
                      </Card>
                    ))
                  )}
                </Stack>
                <Stack
                  spacing={1}
                  sx={{
                    height: "33%",
                  }}
                >
                  {React.Children.toArray(
                    val.imgs.map((item) => (
                      <Card
                        sx={{
                          background: "transparent",
                          border: "none",
                          padding: "0",
                          margin: "0",
                          boxShadow:
                            "0px 0px 60px 0px rgba(255, 198, 64, 0.50)",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={`${configData.imageFolderUrl}${item.name}.${
                            item.extension ? item.extension : "png"
                          }`}
                          alt={item.name}
                          sx={{
                            border: "none",
                            width: "100%",
                            height: "auto",
                            objectPosition: "center",
                            // transform: "scale(1.4)",
                          }}
                        />
                      </Card>
                    ))
                  )}
                </Stack>
                <Stack
                  spacing={1}
                  sx={{
                    height: "33%",
                  }}
                >
                  {React.Children.toArray(
                    val.imgs.map((item) => (
                      <Card
                        sx={{
                          background: "transparent",
                          border: "none",
                          padding: "0",
                          margin: "0",
                          boxShadow:
                            "0px 0px 60px 0px rgba(255, 198, 64, 0.50)",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={`${configData.imageFolderUrl}${item.name}.${
                            item.extension ? item.extension : "png"
                          }`}
                          alt={item.name}
                          sx={{
                            border: "none",
                            width: "100%",
                            height: "auto",
                            objectPosition: "center",
                            // transform: "scale(1.4)",
                          }}
                        />
                      </Card>
                    ))
                  )}
                </Stack>
              </Grid>
            ))
          )}
        </Grid>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "20%",
            bottom: "-0px",
            left: "0",
            right: "0",
            // filter: "blur(20px)",
            background:
              "linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%)",
            zIndex: "10",
          }}
          //   #6FB4B5A6, #6FB4B54D
        ></Box>
      </Box>
      <Stack
        sx={{
          width: "100%",
          //   backgroundImage: "url('/ecosystem/validators/bg.png')",
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   padding: "80px 0 40px",
          //   transform: "translateY(-50%)",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link
          href="https://www.mintscan.io/asset-mantle/validators"
          sx={{ textDecoration: "none" }}
          target="_blank"
          variant="large"
        >
          + 50 More
        </Link>
      </Stack>
    </Section>
  );
}
