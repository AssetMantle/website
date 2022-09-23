import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Icon,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Section from "../components/Section";

export default function TokenInfo({ tokenInfoData }) {
  return (
    <Section title={tokenInfoData.title} subTitle={tokenInfoData.description}>
      <Grid container spacing={{ xs: 0, md: 3 }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
            justifyContent={{ xs: "center", sm: "start" }}
            sx={{ my: "auto" }}
          >
            <Box
              sx={{
                width: "min(204px, 100%)",
              }}
            >
              <img
                src={tokenInfoData.left.mntlCoinImage}
                alt="MNTL token illustration"
                style={{
                  width: "100%",
                  height: "auto",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Stack direction="column" spacing={3}>
              <Typography
                variant={tokenInfoData.left.titleVariant}
                color={tokenInfoData.left.titleColor}
              >
                {tokenInfoData.left.title && tokenInfoData.left.title}
              </Typography>
              <Stack>
                {tokenInfoData.left.data.map((ele, index) => (
                  <Typography
                    component="span"
                    sx={{ display: "inline" }}
                    variant={ele.textVariant}
                    color={ele.textColor}
                    key={index}
                  >
                    {ele.title}
                    <Typography
                      sx={{ display: "inline" }}
                      variant={ele.textVariant}
                      color={ele.valueColor}
                    >
                      {ele.value}
                    </Typography>
                  </Typography>
                ))}
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", sm: "start" }}
              >
                {tokenInfoData.left.ctas &&
                  Array.isArray(tokenInfoData.left.ctas) &&
                  tokenInfoData.left.ctas.length > 0 &&
                  React.Children.toArray(
                    tokenInfoData.left.ctas.map((cta) => (
                      <Button
                        component="a"
                        variant={cta.variant ? cta.variant : "contained"}
                        size={cta.size}
                        href={cta.url && cta.url}
                        target={cta.target && cta.target}
                        endIcon={<Icon>{cta.endIcon}</Icon>}
                      >
                        {cta.title}
                      </Button>
                    ))
                  )}
              </Stack>
              <Stack direction="row" spacing={2.5}>
                {tokenInfoData.left.references &&
                  Array.isArray(tokenInfoData.left.references) &&
                  tokenInfoData.left.references.length > 0 &&
                  React.Children.toArray(
                    tokenInfoData.left.references.map((reference) => (
                      <Link
                        href={reference.url && reference.url}
                        target={reference.target && reference.target}
                        sx={{ width: "45px" }}
                      >
                        <img
                          src={reference.logo && reference.logo}
                          alt={reference.name}
                          sx={{
                            width: "100%",
                            height: "auto",
                            objectPosition: "center",
                          }}
                        />
                      </Link>
                    ))
                  )}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              mt: { xs: 7, md: 0 },
            }}
          >
            {tokenInfoData.right.tokenFrom2 &&
              Array.isArray(tokenInfoData.right.tokenFrom2) &&
              tokenInfoData.right.tokenFrom2.length > 0 &&
              React.Children.toArray(
                tokenInfoData.right.tokenFrom2.map((token) => (
                  <Paper
                    variant={tokenInfoData.right.paperVariant}
                    sx={{
                      gridColumn: `${token.col} / span 3`,
                      gridRow: `${token.row} / span 2`,
                      clipPath:
                        "polygon(30% 1%, 70% 1%, 95% 50%, 70% 99%, 30% 99%, 5% 50%)",
                    }}
                  >
                    <Link
                      href={token.url}
                      variant={tokenInfoData.right.textVariant}
                      textAlign="center"
                      underline="none"
                      fontWeight={400}
                      target={token.target && token.target}
                      fontSize={{ xs: "60%", md: "90%" }}
                    >
                      <Card
                        sx={{
                          aspectRatio: "5/4",
                          background: "transparent",
                          boxShadow: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt={token.name}
                          image={token.logo && token.logo}
                          sx={{
                            margin: "0 auto",
                            border: "none",
                            width: "30%",
                            height: "auto",
                            objectPosition: "center",
                          }}
                        />
                        <CardActions>
                          <Typography
                            variant={tokenInfoData.right.textVariant}
                            textAlign="center"
                            color={tokenInfoData.right.textColor}
                            fontSize={{ xs: "60%", md: "90%" }}
                          >
                            {token.title && token.title}
                            {
                              <>
                                <br />
                                {token.subTitle && token.subTitle}
                              </>
                            }
                          </Typography>
                        </CardActions>
                      </Card>
                    </Link>
                  </Paper>
                ))
              )}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
