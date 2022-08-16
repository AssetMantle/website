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

const TeamsConfigData = {
  textAlign: "center", // >>> default: left
  title: "Meet our team",
  titleComponent: "h2",
  titleVariant: "h1",
  /* description:
    "The Mantle team consists of some of the best minds in their respective fields.", */
  descriptionStyle: {
    mt: 4,
    mx: "auto",
    maxWidth: "min(836px, 100%)",
    margin: "0 auto",
  }, // object of styles or false
  descriptionVariant: "subtitle2",
  members: [
    // object template
    // {
    //   image: "/images/teams/https://assetmantle.one/images/team/deepanshu.png",
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
      image: "/images/teams/deepanshu.png",
      name: "Deepanshu Tripathi",
      designation: "Founder, Core - Product Planning & Implementation​",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "http://linkedin.com/in/deepanshutr",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/deepanshutr",
        },
        {
          icon: "GitHub",
          href: "https://github.com/deepanshutr",
        },
      ],
    },
    {
      image: "/images/teams/abhinav.png",
      name: "Abhinav Kumar",
      designation: "Co-Founder, Core - Product Planning & Implementation​",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/avkr003/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/avkr003",
        },
        {
          icon: "GitHub",
          href: "https://github.com/avkr003",
        },
      ],
    },
    {
      image: "/images/teams/kamlesh.png",
      name: "Kamlesh Parikarath",
      designation: "Core - Product Development & Growth",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/kamleshparikarath/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/0xKombos",
        },
        {
          icon: "GitHub",
          href: "https://github.com/kombos",
        },
        {
          icon: "Behance",
          href: "https://www.behance.net/kombos",
        },
      ],
    },
    {
      image: "/images/teams/naman.png",
      name: "Naman Kabra",
      designation: "Core - Business Development & Growth",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/namankabra/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/307naman",
        },
        {
          icon: "GitHub",
          href: "https://github.com/nk307",
        },
      ],
    },
    {
      image: "/images/teams/sachin.png",
      name: "Sachin Matta",
      designation: "Core - Product Marketing and Communications",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/sachin-matta/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/ciberexplosion",
        },
        {
          icon: "GitHub",
          href: "https://github.com/ciberexplosion",
        },
      ],
    },
    {
      image: "/images/teams/prabhav.png",
      name: "Prabhav Varambally",
      designation: "Core - Business Operations & Strategy",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/prabhavtv/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/Prabhavv_",
        },
        {
          icon: "GitHub",
          href: "https://github.com/Prabhavv",
        },
      ],
    },
    {
      image: "/images/teams/harman.png",
      name: "Harman Sohi",
      designation: "Design Lead",
      designationType: "Design",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/harman-sohi-she-her-2590b8b4/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/NotHarmanSohi",
        },
        {
          icon: "Behance",
          href: "https://www.behance.net/sohiharman",
        },
      ],
    },
    {
      image: "/images/teams/sarin.png",
      name: "Sarin Venugopal",
      designation: "Product Marketing & Operations",
      designationType: "Developer",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/sarin-venugopal-3123638/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/the_bad_apple_",
        },
      ],
    },
    {
      image: "/images/teams/pratik.png",
      name: "Pratik Balar",
      designation: "DevOps & Infrastructure",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/pratikbalar",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/pratikbin",
        },
        {
          icon: "GitHub",
          href: "https://github.com/pratikbin",
        },
        {
          icon: "Website",
          href: "https://pratikb.in/",
        },
      ],
    },
    {
      image: "/images/teams/sarvagya.png",
      name: "Sarvagya Sagar",
      designation: "Research and DevSecOps​",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/iamsarvagyaa/",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/iamsarvagyaa",
        },
        {
          icon: "GitHub",
          href: "https://github.com/iamsarvagyaa",
        },
        {
          icon: "Website",
          href: "https://sarvagya.me",
        },
      ],
    },
    {
      image: "/images/teams/arun.png",
      name: "Arun Ramesan",
      designation: "Visual Designer​",
      designationType: "Design",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/arunramesan",
        },
        {
          icon: "Behance",
          href: "https://www.behance.net/arxwork",
        },
        {
          icon: "Instagram",
          href: "https://www.instagram.com/arxwork",
        },
      ],
    },
    {
      image: "/images/teams/mrinal.png",
      name: "Mrinal Vishwanath",
      designation: "Product Marketing and PR Strategist",
      designationType: "Developer",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/mrinal-vishwanath-813a07137",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/MrinalVishwana1",
        },
        {
          icon: "GitHub",
          href: "https://github.com/MrinalVishy",
        },
      ],
    },
    {
      image: "/images/teams/jagdish.png",
      name: "Jagdish Chudasama",
      designation: "UI/UX Developer​",
      designationType: "Developer",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/chudasama-jagdish-3759981b1/",
        },
        {
          icon: "GitHub",
          href: "https://github.com/chudasamajd",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/JagdishChudas15",
        },
        {
          icon: "Website",
          href: `https://chudasamajd.github.io/chudasamajd`,
        },
      ],
    },
    {
      image: "/images/teams/namaha.png",
      name: "Namaha Shetty",
      designation: "UI/UX Designer",
      designationType: "Design",
      social: [
        {
          icon: "Website",
          href: "https://www.namahashetty.com",
        },
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/namahashetty/",
        },
      ],
    },
    {
      image: "/images/teams/akhlak.png",
      name: "Akhlak Hossain",
      designation: "UI Developer",
      designationType: "Developer",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/akhlakhossainjim/",
        },
        {
          icon: "GitHub",
          href: "http://github.com/Akhlak-Hossain-Jim",
        },
        {
          icon: "Website",
          href: "http://ahjim.com/",
        },
      ],
    },
    {
      image: "/images/teams/ankit.png",
      name: "Ankit Kumar",
      designation: "Blockchain Developer",
      designationType: "Founding",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/0xankit",
        },
        {
          icon: "Twitter",
          href: "https://mobile.twitter.com/me_0xankit",
        },
        {
          icon: "GitHub",
          href: "https://github.com/0xankit",
        },
      ],
    },
    {
      image: "/images/teams/aditya.png",
      name: "Aditya Nalini",
      designation: "NFT Strategist",
      designationType: "Developer",
      social: [
        {
          icon: "LinkedIn",
          href: "https://www.linkedin.com/in/adinalini",
        },
        {
          icon: "Twitter",
          href: "https://twitter.com/adinalini",
        },
        {
          icon: "GitHub",
          href: "https://github.com/adinalini",
        },
      ],
    },
    {
      image: "/images/teams/rohit.png",
      name: "Rohit Sharma",
      designation: "Creators Communications and Integrations",
      designationType: "Developer",
      social: [
        {
          icon: "Twitter",
          href: "https://twitter.com/SharmaJiKaSon1",
        },
        {
          icon: "Website",
          href: "https://www.instagram.com/schoolboy_sharma",
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
  height: "100%",
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
                                  variant="subtitle2"
                                  component="h4"
                                  color="primary.main"
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
      </Container>
    </Box>
  );
}
