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

const TeamsConfigData = {
  textAlign: "center", // >>> default: left
  title: "MEET OUR TEAM",
  titleComponent: "h2",
  titleVariant: "h1",
  description:
    "The Mantle team consists of some of the best minds in their respective fields.",
  descriptionStyle: {
    mt: 4,
    mx: "auto",
  }, // object of styles or false
  descriptionVariant: "body1",
  members: [
    // object template
    // {
    //   image: "https://assetmantle.one/images/team/deepanshu.webp",
    //   name: "Deepanshu Kumar",
    //   designation: "Founder, Core - Product Planning & Implementation​",
    //   designationType: "",
    //   social: [
    //     {
    //       icon: "LinkedIn",
    //       href: "",
    //     },
    //     {
    //       icon: "Twitter",
    //       href: "",
    //     },
    //     {
    //       icon: "GitHub",
    //       href: "",
    //     },
    //     {
    //       icon: "Behance",
    //       href: "",
    //     },
    //     {
    //       icon: "Website",
    //       href: "",
    //     },
    //   ],
    // },
    {
      image: "https://assetmantle.one/images/team/deepanshu.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
    {
      image: "https://assetmantle.one/images/team/abhinav.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
    {
      image: "https://assetmantle.one/images/team/naman.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
    {
      image: "https://assetmantle.one/images/team/prabhav.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
    {
      image: "https://assetmantle.one/images/team/deepanshu.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
    {
      image: "https://assetmantle.one/images/team/abhinav.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
    {
      image: "https://assetmantle.one/images/team/naman.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
    {
      image: "https://assetmantle.one/images/team/prabhav.webp",
      name: "Deepanshu Kumar",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "",
      social: [
        {
          icon: "LinkedIn",
          href: "",
        },
        {
          icon: "Twitter",
          href: "",
        },
        {
          icon: "GitHub",
          href: "",
        },
      ],
    },
  ],
};

const sectionStyle = {
  my: 10,
  py: 4,
  paddingTop: "7px",
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};
const optionStyles = {
  background: "transparent",
  borderRadius: "12px",
  maxWidth: 227,
  boxShadow: "none",
  padding: "0",
  textAlign: { xs: "center", md: "left" },
  display: "flex",
  flexDirection: "column",
  margin: { xs: "auto", md: "0" },
};
const linkStyles = {
  color: "primary.light",
  "&:hover": {
    color: "primary.main",
  },
};

export default function GallerySection() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: TeamsConfigData.textAlign
            ? TeamsConfigData.textAlign
            : "left",
        }}
      >
        {TeamsConfigData.title && (
          <Typography
            component={
              TeamsConfigData.titleComponent
                ? TeamsConfigData.titleComponent
                : "h2"
            }
            variant={
              TeamsConfigData.titleVariant ? TeamsConfigData.titleVariant : "h2"
            }
            color="inherit"
          >
            {TeamsConfigData.title}
          </Typography>
        )}
        {TeamsConfigData.description && (
          <Typography
            component="p"
            variant={
              TeamsConfigData.descriptionVariant
                ? TeamsConfigData.descriptionVariant
                : "body1"
            }
            color="inherit"
            sx={
              TeamsConfigData.descriptionStyle
                ? TeamsConfigData.descriptionStyle
                : {
                    pb: 2,
                  }
            }
          >
            {TeamsConfigData.description}
          </Typography>
        )}
        {Array.isArray(TeamsConfigData.members) &&
          TeamsConfigData.members &&
          TeamsConfigData.members.length > 0 && (
            <Box
              sx={{
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
                  {Array.isArray(TeamsConfigData.members) &&
                    TeamsConfigData.members &&
                    TeamsConfigData.members.length > 0 &&
                    TeamsConfigData.members.map((member, index) => (
                      <SplideSlide>
                        <Card sx={optionStyles} key={index}>
                          {member.image && (
                            <CardMedia
                              component="img"
                              alt={member.title}
                              // height={member.height ? member.height : 420}
                              image={member.image}
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
                                  variant="subtitle1"
                                  component="h4"
                                  color="primary.light"
                                >
                                  {member.name}
                                </Typography>
                              )}
                              {member.designation && (
                                <Typography
                                  variant="body2"
                                  color="primary.light"
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
                                  borderTop: "1px solid",
                                  borderColor: "primary.light",
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
      </Container>
    </Box>
  );
}
