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
import { Container } from "@mui/system";
import { FiLinkedin, FiGithub, FiTwitter, FiGlobe } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import Section from "../components/Section";

export default function GallerySection({
  teamsConfigData,
  linkStyles,
  optionStyles,
}) {
  return (
    <Section
      title={teamsConfigData.title}
      subTitle={teamsConfigData.description}
    >
      {Array.isArray(teamsConfigData.members) &&
        teamsConfigData.members &&
        teamsConfigData.members.length > 0 && (
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
                gap: "32px",
                perPage: 4,
                breakpoints: {
                  900: {
                    perPage: 2,
                  },
                  600: {
                    perPage: 1,
                  },
                },
              }}
            >
              <SplideTrack>
                {Array.isArray(teamsConfigData.members) &&
                  teamsConfigData.members &&
                  teamsConfigData.members.length > 0 &&
                  teamsConfigData.members.map((member, index) => (
                    <SplideSlide key={index}>
                      <Card sx={optionStyles}>
                        {member.image && (
                          <CardMedia
                            component="img"
                            // height={member.height ? member.height : 420}
                            image={member.image}
                            alt={member.title}
                            sx={{
                              border: "none",
                              width: "100%",
                              aspectRatio: "1/1",
                              borderRadius: "50%",
                              objectPosition: "top",
                            }}
                          />
                        )}
                        {(member.name || member.designation) && (
                          <CardContent sx={{ padding: "0", pt: 5, pb: 2 }}>
                            {member.name && (
                              <Typography
                                gutterBottom
                                variant={teamsConfigData.nameVariant}
                                component={teamsConfigData.nameColor}
                                color={teamsConfigData.nameColor}
                              >
                                {member.name}
                              </Typography>
                            )}
                            {member.designation && (
                              <Typography
                                variant={teamsConfigData.designationVariant}
                                color={teamsConfigData.designationColor}
                                sx={{ pt: 1 }}
                              >
                                {member.designation}
                              </Typography>
                            )}
                          </CardContent>
                        )}
                        {member.social &&
                          Array.isArray(member.social) &&
                          member.social.length > 0 && (
                            <CardActions
                              sx={{
                                marginTop: "auto",
                                pb: 8,
                                pt: 2,
                                borderTop: "0.5px solid",
                                borderColor: "grey.600",
                                color: "primary.light",
                                gap: 1,
                                justifyContent: {
                                  xs: "center",
                                  md: "flex-start",
                                },
                              }}
                            >
                              {member.social.map((button, index) => (
                                <>
                                  {button.icon === "LinkedIn" && (
                                    <Link
                                      key={index}
                                      sx={linkStyles}
                                      component="a"
                                      href={button.href && button.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <FiLinkedin />
                                    </Link>
                                  )}
                                  {button.icon === "GitHub" && (
                                    <Link
                                      key={index}
                                      sx={linkStyles}
                                      component="a"
                                      href={button.href && button.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <FiGithub />
                                    </Link>
                                  )}
                                  {button.icon === "Twitter" && (
                                    <Link
                                      key={index}
                                      sx={linkStyles}
                                      component="a"
                                      href={button.href && button.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <FiTwitter />
                                    </Link>
                                  )}
                                  {button.icon === "Behance" && (
                                    <Link
                                      key={index}
                                      sx={linkStyles}
                                      component="a"
                                      href={button.href && button.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <FaBehance />
                                    </Link>
                                  )}
                                  {button.icon === "Website" && (
                                    <Link
                                      key={index}
                                      sx={linkStyles}
                                      component="a"
                                      href={button.href && button.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <FiGlobe />
                                    </Link>
                                  )}
                                  {button.icon === "Instagram" && (
                                    <Link
                                      key={index}
                                      sx={linkStyles}
                                      component="a"
                                      href={button.href && button.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <InstagramIcon />
                                    </Link>
                                  )}
                                </>
                              ))}
                            </CardActions>
                          )}
                      </Card>
                    </SplideSlide>
                  ))}
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
                  <EastOutlinedIcon
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
                  <EastOutlinedIcon
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
