import { Box, Container, Typography } from "@mui/material";
import React from "react";
import InitiativeCard from "../components/InitiativeCard";

const sectionStyle = {
  mt: 13,
  paddingTop: "7px",
  color: "primary.light",
};

const flexStyle = {
  display: "flex",
  width: "min(960px,100%)",
  mx: "auto",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 6,
  mt: 12,
  mb: 19,
};

export default function GallerySection() {
  const DATA = [
    {
      image: "github-logo",
      text: "Requests for comments ",
      iWidth: "180px",
      href: "https://github.com/interNFT",
    },
    {
      image: "reference-logo",
      text: "reference implementations",
      iWidth: "126px",
      href: "https://github.com/cosmos/modules/tree/master/incubator/nft",
    },
    {
      image: "logo-big",
      text: "advocacy and education",
      iWidth: "213px",
    },
  ];
  return (
    <Box component="section" sx={sectionStyle}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          color="inherit"
          sx={{
            paddingBottom: "33px",
            backgroundImage: "url(/static/line.svg)",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            width: "min(510px,100%)",
            "@media (max-width:900px)": {
              width: "100%",
              textAlign: "center",
            },
          }}
        >
          GallerySection
        </Typography>
        <Box sx={flexStyle}>
          {DATA.map((data, index) => (
            <InitiativeCard {...data} key={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
