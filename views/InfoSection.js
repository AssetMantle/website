import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

const InfoSectionConfigData = {
  textAlign: "", // >>> default: left
  fullWidth: true, // boolean
  smallDeviceColumnDirections: "reverse", // only "reverse" or "" >>>>>>default is "no-reverse"
  contentMaxWidth: "", // "number+px"(ie. "100px") or "" >>>>>>default is "457px"
  title: "Expanding your company’s brand awareness ",
  titleComponent: "h2",
  titleVariant: "h2",
  description:
    "The majestic Rocky Mountains are a major tourist location in the western United States.",
  descriptionStyle: false, // object of styles or false
  rightSidedImage:
    "https://images.unsplash.com/photo-1659661236300-bac97ff45a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  infos: [
    {
      title: "Info 1",
      description: "Description 1",
      icon: "https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/623b5936a09ba064d3f5c894_Microscope.svg",
    },
    {
      title: "Info 2",
      description: "Description 2",
      icon: "https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/623b5936a09ba064d3f5c894_Microscope.svg",
    },
  ],
};

const sectionStyle = {
  py: 10,
  color: "primary.light",
  textAlign: {
    xs: "center",
    sm: "center",
    md: InfoSectionConfigData.textAlign
      ? InfoSectionConfigData.textAlign
      : "left",
  },
};

const listStyle = {
  mx: "auto",
  my: 8,
  height: "100%",
};

const Content = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={7}>
        <Box
          sx={listStyle}
          maxWidth={
            InfoSectionConfigData.contentMaxWidth
              ? InfoSectionConfigData.contentMaxWidth
              : "457px"
          }
        >
          {InfoSectionConfigData.title && (
            <Typography
              component={
                InfoSectionConfigData.titleComponent
                  ? InfoSectionConfigData.titleComponent
                  : "h2"
              }
              variant={
                InfoSectionConfigData.titleVariant
                  ? InfoSectionConfigData.titleVariant
                  : "h2"
              }
              color="inherit"
              sx={{
                pb: 2,
              }}
            >
              {InfoSectionConfigData.title}
            </Typography>
          )}
          {InfoSectionConfigData.description && (
            <Typography
              component="p"
              variant="body1"
              color="inherit"
              sx={
                InfoSectionConfigData.descriptionStyle
                  ? InfoSectionConfigData.descriptionStyle
                  : {
                      pb: 2,
                      maxWidth: "92%",
                    }
              }
            >
              {InfoSectionConfigData.description}
            </Typography>
          )}
          {InfoSectionConfigData.infos &&
            InfoSectionConfigData.infos.length > 0 && (
              <Box sx={{ pt: 4 }}>
                {InfoSectionConfigData.infos.map((data, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      pb: 3,
                    }}
                  >
                    {data.icon && (
                      <CardMedia
                        sx={{ width: 32, aspectRatio: "1/1" }}
                        image={data.icon}
                      />
                    )}
                    <Box>
                      {data.title && (
                        <Typography
                          component="p"
                          variant="body1"
                          color="inherit"
                        >
                          {data.title}
                        </Typography>
                      )}
                      {data.description && (
                        <Typography
                          component="p"
                          variant="body2"
                          color="inherit"
                        >
                          {data.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: { xs: "16/10", md: "none" },
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://images.unsplash.com/photo-1659625945776-121a1f4bd246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
        />
      </Grid>
    </Grid>
  );
};

export default function InfoSection() {
  return (
    <Box component="section" sx={sectionStyle}>
      {InfoSectionConfigData.fullWidth ? (
        <Content />
      ) : (
        <Container maxWidth="lg">
          <Content />
        </Container>
      )}
    </Box>
  );
}
