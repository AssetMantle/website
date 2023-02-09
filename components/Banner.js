import { Alert, Box, Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function Banner() {
  const [showAlert, setShowAlert] = useState(true);

  // set the mode value to one of: celebration, information, trophy
  const mode = "celebration";
  const url = "https://marketplace.assetmantle.one/";
  const bannerIcon =
    mode == "celebration" ? "🎉" : mode == "information" ? "ℹ️" : "🏆";
  const bannerMessageJSX = (
    <Typography
      variant="caption"
      color="navBg"
      textTransform="capitalize"
      textAlign="center"
      style={{ fontWeight: "400", width: "80%" }}
      mx="auto"
    >
      {bannerIcon}&nbsp;&nbsp;Click here for limited early access to{" "}
      <strong>MantlePlace NFTs</strong>&nbsp;&nbsp;{bannerIcon}
    </Typography>
  );

  const alertJSX = (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          rewind: true,
          width: "100%",
          gap: "32px",
          perPage: 1,
          pagination: false,
          autoplay: true,
          interval: 8000,
          speed: 2000,
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <Alert
              icon={false}
              severity="info"
              sx={{
                backgroundColor: "primary.main",
                color: "navBg",
                borderRadius: 0,
                display: "flex",
                "& > *:first-of-type": {
                  flex: "1",
                  py: 0,
                },
              }}
            >
              {" "}
              <Link
                component={Link}
                display="flex"
                style={{ margin: "auto", width: "100%" }}
                href={url}
                target="_blank"
                py={1}
                alignItems="center"
              >
                {bannerMessageJSX}
              </Link>
            </Alert>
          </SplideSlide>
          <SplideSlide>
            <Alert
              icon={false}
              severity="info"
              sx={{
                backgroundColor: "primary.main",
                color: "navBg",
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& > *:first-of-type": {
                  flex: "1",
                  py: 0,
                },
              }}
            >
              <Link
                component={Link}
                href="https://github.com/AssetMantle/Bug-Bounty"
                target="_blank"
                variant="text"
                color="background.default"
                underline="none"
                fontWeight="500"
                style={{ margin: "auto", width: "100%" }}
              >
                <Typography
                  component="p"
                  variant="caption"
                  textTransform="capitalize"
                  textAlign="center"
                  style={{ fontWeight: "400", width: "80%" }}
                  mx="auto"
                  py={1}
                >
                  🏆{" "}Participate in the Bug Bounty Program <strong>here</strong>{" "}
                  and win prizes!{" "}🏆
                </Typography>
              </Link>
            </Alert>
          </SplideSlide>
        </SplideTrack>
        <Box className="splide__arrows">
          <Button
            className="splide__arrow splide__arrow--prev"
            sx={{
              background: "transparent !important",
              outline: "none !important",
              position: "absolute",
              left: "10px !important",
              minWidth: "max-content",
              transform: {
                xs: "translateX(0%) translateY(-50%) !important",
                md: "translateX(0%) translateY(-50%) !important",
              },
              "&.splide__arrow svg": {
                fill: "navBg",
              },
            }}
          >
            <EastOutlinedIcon
              sx={{
                fontSize: "20px",
              }}
            />
          </Button>
          <Button
            className="splide__arrow splide__arrow--next"
            sx={{
              background: "transparent !important",
              outline: "none !important",
              position: "absolute",
              right: "10px !important",
              minWidth: "max-content",
              transform: {
                xs: "translateX(0%) translateY(-50%) !important",
                md: "translateX(0%) translateY(-50%) !important",
              },
              "&.splide__arrow svg": {
                fill: "navBg",
              },
            }}
          >
            <EastOutlinedIcon
              sx={{
                fontSize: "20px",
              }}
            />
          </Button>
        </Box>
      </Splide>
    </Box>
  );

  return <>{alertJSX}</>;
}
