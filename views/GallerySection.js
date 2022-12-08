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
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Section from "../components/Section";

export default function GallerySection({ configData }) {
  return (
    <Section
      title={configData.title && configData.title}
      subTitle={configData.description && configData.description}
    >
      {Array.isArray(configData.galleries) &&
        configData.galleries &&
        configData.galleries.length > 0 && (
          <Grid container spacing={0}>
            {configData.galleries.map((Gallery, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={index}
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    p: 1,
                    justifyContent: "center",
                  }}
                >
                  <Paper
                    variant={configData.paperVariant}
                    sx={{
                      width: { xs: "100%" },
                    }}
                  >
                    <Card sx={configData.optionStyles}>
                      {Gallery.image && (
                        <CardMedia
                          component="img"
                          alt={Gallery.title}
                          // height={Gallery.height ? Gallery.height : 420}
                          image={Gallery.image}
                          sx={{
                            border: "none",
                            width: "100%",
                            aspectRatio: "1/1",
                          }}
                        />
                      )}
                      {(Gallery.title || Gallery.description) && (
                        <CardContent sx={{ p: 0.5 }}>
                          {Gallery.title && (
                            <Typography
                              gutterBottom
                              variant={configData.titleVariant}
                              component="h3"
                              color={configData.titleColor}
                            >
                              {Gallery.title}
                            </Typography>
                          )}
                          {Gallery.description && (
                            <Typography
                              variant={configData.descriptionVariant}
                              color={configData.descriptionColor}
                            >
                              {Gallery.description}
                            </Typography>
                          )}
                        </CardContent>
                      )}
                      {Gallery.buttons.length !== 0 && (
                        <CardActions
                          sx={{
                            mt: "auto",
                            pb: 2,
                            px: 0.5,
                            justifyContent: { xs: "center", md: "flex-start" },
                            justifySelf: "flex-end",
                          }}
                        >
                          {Gallery.buttons.map((button, i) => (
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
                              aria-label={`${button.text} about ${Gallery.title}`}
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
