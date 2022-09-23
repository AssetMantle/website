import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function AdvantageSection({
  initiativeSectionConfigData,
  initiativeSectionListStyle,
}) {
  console.log(initiativeSectionConfigData, initiativeSectionListStyle);
  return (
    <Section
      title={initiativeSectionConfigData.title}
      subTitle={
        initiativeSectionConfigData.description &&
        initiativeSectionConfigData.description
      }
    >
      <Grid
        container
        spacing={2}
        maxWidth="lg"
        sx={{
          background: "url(/AdvantageSection/advantage_bg.png) no-repeat left",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {initiativeSectionConfigData.ctas &&
            initiativeSectionConfigData.ctas.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  pt: 8,
                  justifyContent: "center",
                  width: "100%",
                  mt:
                    initiativeSectionConfigData.descriptionOnLeft ||
                    initiativeSectionConfigData.titleOnLeft
                      ? 0
                      : "auto",
                  mb:
                    initiativeSectionConfigData.descriptionOnLeft ||
                    initiativeSectionConfigData.titleOnLeft
                      ? 0
                      : 8,
                }}
              >
                {initiativeSectionConfigData.ctas.map((cta, index) => (
                  <Button
                    component="a"
                    variant={cta.variant ? cta.variant : "contained"}
                    key={`${cta.title}-_${index}`}
                    size="large"
                    href={cta.url && cta.url}
                    target={cta.target && cta.target}
                    endIcon={<Icon>{cta.icon}</Icon>}
                  >
                    {cta.title && cta.title}
                  </Button>
                ))}
              </Box>
            )}
        </Grid>
        <Grid item xs={12} md={6}>
          {Array.isArray(initiativeSectionConfigData.initiatives) &&
            initiativeSectionConfigData.initiatives &&
            initiativeSectionConfigData.initiatives.length > 0 && (
              <Stack
                sx={{
                  gap: "10px",
                  flexDirection: "column",
                  mt: { xs: 8, md: 0 },

                  backgroundColor: "transparent",
                }}
              >
                {initiativeSectionConfigData.initiatives.map(
                  (initiative, index) => (
                    <Paper
                      key={index}
                      variant={initiativeSectionConfigData.paperVariant}
                      sx={{
                        mx: { xs: "auto", md: 0 },
                        ml: { md: "auto" },
                        width: "min(500px, 100%)",
                      }}
                    >
                      <Card sx={initiativeSectionListStyle}>
                        {initiative.icon &&
                          (typeof initiative.icon === "string" ? (
                            <CardMedia
                              component="img"
                              image={initiative.icon}
                              alt={initiative.title}
                              title={initiative.title}
                              sx={{
                                width: "min(112px, 100%)",
                                height: "auto",
                              }}
                            />
                          ) : (
                            initiative.icon
                          ))}
                        <CardContent sx={{ padding: "0 !important" }}>
                          <Typography
                            variant={initiativeSectionConfigData.titleVariant}
                            color={initiativeSectionConfigData.titleColor}
                          >
                            {initiative.title && initiative.title}
                          </Typography>
                          <Typography
                            variant={
                              initiativeSectionConfigData.descriptionVariant
                            }
                            sx={{ pt: 1 }}
                          >
                            {initiative.description && initiative.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Paper>
                  )
                )}
              </Stack>
            )}
        </Grid>
      </Grid>
    </Section>
  );
}
