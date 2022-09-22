import DownloadingIcon from "@mui/icons-material/Downloading";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Grid, Icon, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Section from "../components/Section";

export default function ChainSection({ chainSectionConfigData }) {
  const [showDescription, setShowDescription] = useState();
  return (
    <Section
      title={chainSectionConfigData.title}
      subTitle={chainSectionConfigData.subTitle}
    >
      <Grid container spacing={2} backgroundColor="transparent">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Left Sub-section */}
          <Stack
            spacing={2}
            direction="column"
            maxWidth="400px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="transparent"
          >
            {Array.isArray(chainSectionConfigData.chains) &&
              chainSectionConfigData.chains &&
              chainSectionConfigData.chains.length > 0 && (
                <Grid container spacing={0}>
                  {chainSectionConfigData.chains.map((data, index) => (
                    <Grid
                      item
                      xs={6}
                      justifyContent="center"
                      sx={{
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",

                        cursor: "pointer",
                      }}
                      zeroMinWidth
                      key={index}
                      onBlur={() => setShowDescription()}
                      onFocus={() => setShowDescription(index + 1)}
                      onMouseOver={() => setShowDescription(index + 1)}
                      onMouseOut={() => setShowDescription()}
                    >
                      <img src={data.icon} alt={data.alt} width="90%" />
                    </Grid>
                  ))}
                </Grid>
              )}
            <Typography
              variant={chainSectionConfigData.descriptionVariant}
              color={chainSectionConfigData.descriptionColor}
              textAlign="center"
              sx={{
                maxWidth: "380px",
              }}
            >
              {showDescription
                ? chainSectionConfigData.chains[showDescription - 1].title
                : chainSectionConfigData.defaultChainDescription}
            </Typography>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Right Sub-section */}
          <Stack
            spacing={2}
            width="100%"
            direction="column"
            sx={{
              py: 4,
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              {chainSectionConfigData.subSectionTitleIcon && (
                <img
                  src={chainSectionConfigData.subSectionTitleIcon}
                  alt={
                    chainSectionConfigData.subSectionTitle &&
                    chainSectionConfigData.subSectionTitle
                  }
                  style={{ width: "50%" }}
                />
              )}
              {chainSectionConfigData.subSectionTitle && (
                <Typography
                  variant={
                    chainSectionConfigData.subSectionTitleVariant || "h1"
                  }
                  color={
                    chainSectionConfigData.subSectionTitleColor ||
                    "primary.main"
                  }
                >
                  {chainSectionConfigData.subSectionTitle}
                </Typography>
              )}
            </Stack>
            {chainSectionConfigData.subSectionDescription && (
              <Typography
                variant={
                  chainSectionConfigData.subSectionDescriptionVariant || "body1"
                }
                color={
                  chainSectionConfigData.subSectionDescriptionColor ||
                  "secondary.main"
                }
                sx={
                  chainSectionConfigData.subSectionDescriptionStyle &&
                  chainSectionConfigData.subSectionDescriptionStyle
                }
              >
                {chainSectionConfigData.subSectionDescription}
              </Typography>
            )}
            {chainSectionConfigData.ctas &&
              chainSectionConfigData.ctas.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    pt: 3,
                    justifyContent: { xs: "center" },
                  }}
                >
                  {chainSectionConfigData.ctas.map((cta, index) => (
                    <Button
                      component="a"
                      variant={cta.variant ? cta.variant : "contained"}
                      key={index}
                      size="large"
                      href={cta.url && cta.url}
                      target={cta.target && cta.target}
                      endIcon={cta.icon && <Icon>{cta.icon}</Icon>}
                    >
                      {cta.title && cta.title}
                    </Button>
                  ))}
                </Box>
              )}
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
