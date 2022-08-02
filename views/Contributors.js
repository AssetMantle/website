import { Box, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const sectionStyle = {
  mt: 13,
  paddingTop: "7px",
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};

export default function Contributors() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
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
                },
              }}
            >
              Contributors
            </Typography>
            <Box sx={{ mt: 8 }}>
              <Typography component="p" variant="body1">
                This open collaboration was initiated by the Interchain
                Foundation and is facilitated by ixo (The Internet of Impact)
                together with AssetMantle.
                <br />
                <br />
                <br />
                <Link
                  underline="hover"
                  href="https://interchain.io/"
                  sx={{ cursor: "pointer" }}
                >
                  Interchain Foundation
                </Link>{" "}
                grants along with the collaborative development of developers
                from{" "}
                <Link
                  underline="hover"
                  href="https://www.w3.org/"
                  sx={{ cursor: "pointer" }}
                >
                  World Wide Web Consortium (W3C)
                </Link>{" "}
                and other development teams worked to further expand the
                capabilities of Cosmos SDK
                <br />
                <br />
                <br />
                <Link
                  underline="none"
                  href="https://blog.cosmos.network/progress-report-interchain-nft-metadata-standards-94770dfe3bb1"
                  sx={{ cursor: "pointer" }}
                >
                  LEARN MORE
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <img
              src="/static/InterNFTGraphic.png"
              alt=""
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
