import { Box, Container, Typography } from "@mui/material";
import React from "react";

const footerStyle = {
  mt: 13,
  paddingTop: "7px",
  color: "primary.light",
  backgroundColor: "secondary.dark",
  p: 4,
  textAlign: "center",
};

export default function Footer() {
  return (
    <Box component="footer" sx={footerStyle}>
      <Container maxWidth="lg">
        <Typography variant="body3" component="p">
          © AssetMantle 2022 - All rights reserved{" "}
        </Typography>
      </Container>
    </Box>
  );
}
