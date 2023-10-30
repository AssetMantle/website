import React from "react";
import Section from "../../components/Section";
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

export default function Web3EcoSystem({ configData }) {
  return (
    <Section
      title={configData.title && configData.title}
      subTitle={configData.description && configData.description}
    >
      <Grid
        container
        spacing={{ sx: 0, md: 3 }}
        sx={{ width: { sm: "100%", lg: "80%" } }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "transparent",
            alignSelf: "stretch",
          }}
        >
          <Stack spacing={2}>
            <Typography
              component="p"
              variant="body1"
              sx={configData?.left?.desStyle}
            >
              {configData?.left?.description}
            </Typography>
            {configData.left.cards &&
              Array.isArray(configData.left.cards) &&
              configData.left.cards.length > 0 && (
                <Grid container spacing={1}>
                  {configData.left.cards.map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
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
                            borderRadius: "16px",
                          }}
                        >
                          <Card sx={configData?.left?.optionStyle}>
                            {item.image && (
                              <CardMedia
                                component="img"
                                alt={item.title}
                                // height={item.height ? item.height : 420}
                                image={item.image}
                                sx={{
                                  border: "none",
                                  width: "100%",
                                  aspectRatio: "1/1",
                                }}
                              />
                            )}
                            {(item.title || item.description) && (
                              <CardContent sx={{ p: 1 }}>
                                <Stack spacing={2}>
                                  {item.title && (
                                    <Typography
                                      gutterBottom
                                      variant={configData.left.itemTitleVariant}
                                      component="h4"
                                      color={configData.left.titleColor}
                                    >
                                      {item.title}
                                    </Typography>
                                  )}
                                  {item.description && (
                                    <Typography
                                      variant={
                                        configData.left.itemDescriptionVariant
                                      }
                                      color={configData.left.descriptionColor}
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
                                      underline={button.disabled ? "" : "hover"}
                                      key={`ff${i}`}
                                      component={
                                        button.disabled ? "button" : "a"
                                      }
                                      color={
                                        button.disabled
                                          ? "secondary.light"
                                          : "primary.main"
                                      }
                                      display="flex"
                                      alignItems="center"
                                      href={button.url && button.url}
                                      disabled={button.disabled}
                                      variant="body1"
                                      sx={{
                                        px: 0,
                                      }}
                                      aria-label={`${button.text} about ${item.title}`}
                                      // size="small"
                                    >
                                      {button.text && (
                                        <>
                                          {button.text}{" "}
                                          {button.disabled ? (
                                            ""
                                          ) : (
                                            <Icon>{configData.endIcon}</Icon>
                                          )}
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
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "transparent",
            alignSelf: "stretch",
            pt: { xs: 5, md: 0 },
          }}
        >
          <Stack sx={{ gap: 3 }}>
            <Typography
              component="p"
              variant="body1"
              sx={configData?.right?.desStyle}
            >
              {configData?.right?.description}
            </Typography>

            {configData.right.link && (
              <Link
                underline="hover"
                component={"a"}
                display={"flex"}
                alignItems={"end"}
                justifyContent={{ xs: "center", md: "start" }}
                gap={1}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: configData.right.link.text,
                  }}
                ></span>
                <Icon>{configData.right.link.endIcon}</Icon>
              </Link>
            )}
            {configData.right.button && (
              <Button
                variant="contained"
                endIcon={<Icon>{configData.right.button.endIcon}</Icon>}
                sx={{
                  py: 1.5,
                  px: 3,
                  mr: "auto",
                  mt: 2,
                  ml: { xs: "auto", md: "0" },
                }}
                href={
                  configData.right.button.url && configData.right.button.url
                }
              >
                {configData.right.button.text}
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
