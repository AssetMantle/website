import { Box, Link, Tooltip } from "@mui/material";
import React from "react";

export default function Eco3() {
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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

  const stones = () => {
    return {
      width: `100%`,
      height: "100%",
      overflow: "hidden",
      transform: "translate(-50%)",
      "@keyframes rotateAn": {
        "0%": {
          transform: "scale(0.9)",
          transformOrigin: "center",
        },
        "50%": {
          transform: "scale(1.1)",
          transformOrigin: "center",
        },
        "100%": {
          transform: "scale(0.9)",
          transformOrigin: "center",
        },
      },
      //   animation: "3s ease-in-out 0s infinite reverse forwards running rotateAn",
      animation: "rotateAn infinite 8s linear both",
    };
  };

  const stonesArr = [
    {
      src: "/ecosystem/stone1.png",
      title: "Lorem",
      href: "",
      style: imgCon(144.2, 150.05, 1127, 146),
    },
    {
      src: "/ecosystem/stone2.png",
      title: "Lorem",
      href: "",
      style: imgCon(140, 116, 47, 309),
    },
    {
      src: "/ecosystem/stone3.png",
      title: "Lorem",
      href: "",
      style: imgCon(128.32, 107.24, 912, 508),
    },
    {
      src: "/ecosystem/stone4.png",
      title: "Lorem",
      href: "",
      style: imgCon(85.02, 80.54, 839, 131),
    },
    {
      src: "/ecosystem/stone5.png",
      title: "Lorem",
      href: "",
      style: imgCon(85, 81, 274, 524),
    },
    {
      src: "/ecosystem/stone6.png",
      title: "Lorem",
      href: "",
      style: imgCon(79, 81, 1218, 463),
    },
    {
      src: "/ecosystem/stone7.png",
      title: "Lorem",
      href: "",
      style: imgCon(74, 71, 291, 81),
    },
    {
      src: "/ecosystem/stone8.png",
      title: "Lorem",
      href: "",
      style: imgCon(56.77, 48.4, 224, 210),
    },
    {
      src: "/ecosystem/stone9.png",
      title: "Lorem",
      href: "",
      style: imgCon(46.55, 39.44, 19.2, 536),
    },
    {
      src: "/ecosystem/stone10.png",
      title: "Lorem",
      href: "",
      style: imgCon(33.66, 40.74, 1304, 338),
    },
    {
      src: "/ecosystem/stone10.png",
      title: "Lorem",
      href: "",
      style: imgCon(33.66, 40.74, 119, 65.1),
    },
  ];

  return (
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
        <img src="/ecosystem/paths.svg" alt="paths" style={imgStyle} />
      </div>
      <div style={imgCon(734, 486, 312, 7)}>
        <img src="/ecosystem/mascot.png" alt="mascot" style={imgStyle} />
      </div>
      {React.Children.toArray(
        stonesArr.map((item) => (
          <Tooltip title={item.title} placement="top">
            <Link
              href={item.href}
              sx={{ ...item.style, overflow: "visible" }}
              onClick={(e) => item.href === "" && e.preventDefault()}
            >
              <Box sx={stones()}>
                <img src={item.src} alt="stone illustration" style={imgStyle} />
              </Box>
            </Link>
          </Tooltip>
        ))
      )}
    </Box>
  );
}
