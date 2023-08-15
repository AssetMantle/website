import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function Hero() {
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  };
  const imgCon = (width, height, x = 0, y = 0) => {
    let ar = `${width}/${height}`;
    let wIp = (width / 1381) * 100;
    let left = `${(x / 1381) * 100}%`;
    let top = `${(y / 710) * 100}%`;
    return {
      width: `${wIp}%`,
      aspectRatio: ar,
      overflow: "hidden",
      position: "absolute",
      top,
      left,
      //   transform: "translate(-50%)",
    };
  };

  const stones = (ind) => {
    return {
      width: `100%`,
      height: "100%",
      overflow: "hidden",
      // transform: "translate(-50%)",
      "@keyframes bounce": {
        "0%": {
          transform: `translateY(-${10 + ind}px)`,
          transformOrigin: "center",
        },
        "50%": {
          transform: `translateY(${10 + ind}px)`,
          transformOrigin: "center",
        },
        "100%": {
          transform: `translateY(-${10 + ind}px)`,
          transformOrigin: "center",
        },
      },
      animation: `bounce infinite ${4000 + ind * 100}ms linear both ${
        ind * 100
      }ms`,
      "@keyframes ZoomInOut": {
        "0%": {
          transform: "scale(0.9)",
        },
        "50%": {
          transform: "scale(1.1)",
        },
        "100%": {
          transform: "scale(0.9)",
        },
      },
      // ":hover": {
      //   animationName: "ZoomInOut",
      //   animationDuration: "3s",
      // },
    };
  };

  const stonesArr = [
    {
      src: "/ecosystem/hero/stone1.png",
      title: "Lorem",
      href: "#assetmantle-protocol",
      style: imgCon(183, 199, 1125, 111),
    },
    {
      src: "/ecosystem/hero/stone2.png",
      title: "Lorem",
      href: "#integrations--partnerships",
      style: imgCon(190, 178, 20.5, 262),
    },
    {
      src: "/ecosystem/hero/stone3.png",
      title: "Lorem",
      href: "#mantlelabs",
      style: imgCon(178.443, 203.981, 893, 459),
    },
    {
      src: "/ecosystem/hero/stone4.png",
      title: "Lorem",
      href: "",
      style: imgCon(85.02, 80.54, 839, 131),
    },
    {
      src: "/ecosystem/hero/stone5.png",
      title: "Lorem",
      href: "#validators",
      style: imgCon(85, 109, 274, 508),
    },
    {
      src: "/ecosystem/hero/stone6.png",
      title: "Lorem",
      href: "",
      style: imgCon(79, 81, 1218, 463),
    },
    {
      src: "/ecosystem/hero/stone7.png",
      title: "Lorem",
      href: "#kol-initiatives----mantlecreatives",
      style: imgCon(107.998, 122, 291, 81),
    },
    {
      src: "/ecosystem/hero/stone8.png",
      title: "Lorem",
      href: "",
      style: imgCon(56.77, 48.4, 224, 210),
    },
    {
      src: "/ecosystem/hero/stone9.png",
      title: "Lorem",
      href: "",
      style: imgCon(46.55, 39.44, 19.2, 536),
    },
    {
      src: "/ecosystem/hero/stone10.png",
      title: "Lorem",
      href: "",
      style: imgCon(33.66, 40.74, 1304, 338),
    },
    {
      src: "/ecosystem/hero/stone10.png",
      title: "Lorem",
      href: "",
      style: imgCon(33.66, 40.74, 119, 65.1),
    },
  ];
  const customH1Styles = {
    background: "-webkit-linear-gradient(120deg, #0aabad 20%, #FF930F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "50% 50%",
    color: "transparent",
    margin: "0 !important",
    animation: "gradientAnimation 6s ease-in-out infinite",
    "@keyframes gradientAnimation": {
      "0%": {
        backgroundPosition: "0 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0 50%",
      },
    },
  };
  return (
    <Box>
      <Typography
        variant="h2"
        component={"h1"}
        color={"secondary.main"}
        sx={{
          ...customH1Styles,
          padding: "8px 24px",
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        The mantle Universe
      </Typography>
      <Typography
        variant="subtitle1"
        component={"p"}
        sx={{ padding: "8px 24px", textAlign: "center" }}
      >
        Experience the first NFT marketplace with blockchain-based identity.
      </Typography>
      <Box
        position={"relative"}
        sx={{
          width: "min(1381px,100%)",
          aspectRatio: "1381/710",
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <div style={imgCon(1362.37, 689.38, 4.46, 0)}>
          <img src="/ecosystem/hero/paths.svg" alt="paths" style={imgStyle} />
        </div>
        <div style={imgCon(586, 576, 398, 58)}>
          <img src="/ecosystem/hero/mascot.png" alt="mascot" style={imgStyle} />
        </div>
        {React.Children.toArray(
          stonesArr.map((item, index) =>
            item.href === "" ? (
              <Box sx={{ ...item.style, overflow: "visible" }}>
                <Box sx={stones(index)}>
                  <img
                    src={item.src}
                    alt="stone illustration"
                    style={imgStyle}
                  />
                </Box>
              </Box>
            ) : (
              <Link
                href={item.href}
                sx={{ ...item.style, overflow: "visible" }}
                onClick={(e) => item.href === "" && e.preventDefault()}
              >
                <Box sx={stones(index)}>
                  <img
                    src={item.src}
                    alt="stone illustration"
                    style={imgStyle}
                  />
                </Box>
              </Link>
            )
          )
        )}
      </Box>
    </Box>
  );
}
