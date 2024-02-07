import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Section from "../../components/Section";

export default function IdentityStandard({ configData }) {
  return (
    <Section
      title={configData.title && configData.title}
      subTitle={configData.description && configData.description}
      subTitleSx={configData.descriptionStyle && configData.descriptionStyle}
    >
      {Array.isArray(configData.galleries) &&
        configData.galleries &&
        configData.galleries.length > 0 && (
          <Grid container spacing={{ xs: 1, md: 0, lg: 4 }}>
            {configData.galleries.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  backgroundColor: "transparent",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    p: 1,
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Paper
                    variant={configData.paperVariant}
                    sx={{
                      width: { xs: "100%" },
                      height: "100%",
                    }}
                  >
                    <Card sx={configData.optionStyle}>
                      {item.image && (
                        <CardMedia
                          component="img"
                          alt={item.title}
                          // height={item.height ? item.height : 420}
                          image={item.image}
                          sx={{
                            border: "none",
                            width: "min(170px, 100%)",
                            aspectRatio: "1/1",
                            margin: "48px auto",
                          }}
                        />
                      )}
                      {(item.title || item.subtitle || item.description) && (
                        <CardContent sx={{ p: 1.8 }}>
                          <Stack spacing={2}>
                            {item.title && (
                              <Typography
                                gutterBottom
                                variant={configData.itemTitleVariant}
                                component="h4"
                                color={configData.titleColor}
                                sx={{ m: 0 }}
                              >
                                {item.title}
                              </Typography>
                            )}
                            {item.subtitle && (
                              <Typography
                                gutterBottom
                                variant={configData.itemSubtitleVariant}
                                component="p"
                                color={configData.titleColor}
                                sx={{
                                  marginTop: "0px !important",
                                }}
                              >
                                {item.subtitle}
                              </Typography>
                            )}
                            {item.description && (
                              <Typography
                                variant={configData.itemDescriptionVariant}
                                color={configData.descriptionColor}
                                sx={{ m: 0, paddingRight: "28px" }}
                              >
                                {item.description}
                              </Typography>
                            )}
                          </Stack>
                        </CardContent>
                      )}
                      {item.buttons &&
                        Array.isArray(item.buttons) &&
                        item.buttons?.length !== 0 && (
                          <CardActions
                            sx={{
                              mt: "auto",
                              pb: 2,
                              px: 0.5,
                              justifyContent: {
                                xs: "center",
                                md: "flex-start",
                              },
                              justifySelf: "flex-end",
                            }}
                          >
                            {item.buttons.map((button, i) => (
                              <Link
                                underline="hover"
                                key={`ff${i}`}
                                component="a"
                                color="primary.main"
                                display="flex"
                                alignItems="center"
                                href={button.url && button.url}
                                sx={{
                                  px: 0,
                                }}
                                aria-label={`${button.text} about ${item.title}`}
                                // size="small"
                              >
                                {button.text && (
                                  <>
                                    {button.text}{" "}
                                    <Icon>{configData.endIcon}</Icon>
                                  </>
                                )}
                              </Link>
                            ))}
                          </CardActions>
                        )}
                    </Card>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
    </Section>
  );
}
