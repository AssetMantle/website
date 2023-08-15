import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Section from "../../components/Section";

export default function Protocol({ configData }) {
  return (
    <Section
      title={configData.title}
      subTitle={configData.subTitle}
      subtitleSx={{ maxWidth: "min(912px,100%)" }}
    >
      {Array.isArray(configData.protocols) &&
        configData.protocols &&
        configData.protocols.length > 0 && (
          <Box
            sx={{
              width: "100%",
              position: "relative",
              pt: 8,
              display: "flex",
              justifyContent: "center",
              ".splide__pagination": {
                gap: 2,
                bottom: "-20px",
              },
              ".splide__pagination__page": {
                transform: "scale(1.6)",
              },
              ".splide__pagination__page.is-active": {
                backgroundColor: "primary.main",
                transform: "scale(2)",
              },
            }}
          >
            <Splide
              hasTrack={false}
              options={{
                type: "loop",
                rewind: true,
                width: "90%",
                gap: "0px",
                autoplay: true,
                interval: 5000,
                perPage: 3,
                perMove: 3,
                pauseOnHover: false,
                breakpoints: {
                  900: {
                    perPage: 2,
                    perMove: 2,
                  },
                  600: {
                    perPage: 1,
                    perMove: 1,
                  },
                },
              }}
            >
              <SplideTrack>
                {React.Children.toArray(
                  configData.protocols.map((protocol) => (
                    <SplideSlide>
                      <Card sx={configData.optionStyles}>
                        {protocol.icon && (
                          <CardMedia
                            component="img"
                            // height={protocol.height ? protocol.height : 420}
                            image={protocol.icon}
                            alt={protocol.title}
                            sx={{
                              border: "none",
                              width: protocol.iWidth + "px",
                              aspectRatio: `${protocol.iWidth}/${protocol.iHeight}`,
                              objectPosition: "center",
                              margin: "auto",
                            }}
                          />
                        )}
                        {(protocol.title || protocol.description) && (
                          <CardContent
                            sx={{
                              padding: "0",
                              pt: 5,
                              pb: 2,
                              textAlign: "center",
                            }}
                          >
                            {protocol.title && (
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h5"
                                color={configData.nameColor}
                              >
                                {protocol.title}
                              </Typography>
                            )}
                            {protocol.description && (
                              <Typography
                                variant="body2"
                                component={"p"}
                                sx={{ pt: 1 }}
                              >
                                {protocol.description}
                              </Typography>
                            )}
                          </CardContent>
                        )}
                        {protocol.buttonText && (
                          <CardActions
                            sx={{
                              marginTop: "auto",
                              pb: 8,
                              pt: 0,
                              color: "primary.light",
                              gap: 1,
                              justifyContent: "center",
                            }}
                          >
                            <Link
                              sx={{
                                color: "primary.main",
                                textDecoration: "none",
                              }}
                              component="a"
                              href={protocol.href && protocol.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="body2"
                            >
                              {protocol.buttonText}
                            </Link>
                          </CardActions>
                        )}
                      </Card>
                    </SplideSlide>
                  ))
                )}
              </SplideTrack>
              <Box className="splide__arrows">
                <Button
                  className="splide__arrow splide__arrow--prev"
                  sx={{
                    background: "transparent !important",
                    outline: "none !important",
                    position: "absolute",
                    transform: {
                      xs: "translateX(-70%) translateY(-50%) !important",
                      md: "translateX(-130%) translateY(-50%) !important",
                    },
                    "&.splide__arrow svg": {
                      fill: "#FFD365",
                    },
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: { xs: "24px", md: "36px" },
                    }}
                  />
                </Button>
                <Button
                  className="splide__arrow splide__arrow--next"
                  sx={{
                    background: "transparent !important",
                    outline: "none !important",
                    position: "absolute",
                    transform: {
                      xs: "translateX(70%) translateY(-50%) !important",
                      md: "translateX(130%) translateY(-50%) !important",
                    },
                    "&.splide__arrow svg": {
                      fill: "#FFD365",
                    },
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: { xs: "24px", md: "36px" },
                    }}
                  />
                </Button>
              </Box>
            </Splide>
          </Box>
        )}
    </Section>
  );
}
