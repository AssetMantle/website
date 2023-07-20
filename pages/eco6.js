import { Box, Link, Tooltip } from "@mui/material";
import React from "react";

export default function Eco6() {
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

  const stoneCon = (width, height, x = 0, y = 0) => {
    let ar = `${width}/${height}`;
    let wIp = (width / 1381) * 100;
    let xc = (x / 1381) * 100;
    let yc = (y / 710) * 100;
    let left = `${xc}%`;
    let top = `${yc}%`;
    let frameName = `@keyframes burst${Math.round((width + height) * x)}`;
    let name = `burst${Math.round((width + height) * x)}`;
    return {
      width: `${wIp}%`,
      aspectRatio: ar,
      // overflow: "hidden",
      position: "absolute",
      top,
      left,
      overflow: "visible",
      // zIndex: 10,
      // transform: `translate(${xc < 50 ? 300 + xc : -(300 + xc)}px,${
      //   yc < 40 ? 100 + yc : -(100 + yc)
      // }px) scale(0)`,
      [frameName]: {
        "0%": {
          top: "50%",
          left: "50%",
          // transform: `translate(${xc <= 50 ? 300 + xc : -(300 + xc)}px,${
          //   yc <= 50 ? 100 + yc : -(100 + yc)
          // }px) scale(0)`,
          transform: `scale(0)`,
        },
        "100%": {
          top: `${yc}%`,
          left: `${xc}%`,
          transform: `scale(1)`,
          // transform: `translate(0,0) scale(1)`,
        },
      },
      animation: `${name} 4s ease-in`,
    };
  };

  const stones = (ind) => {
    return {
      width: `100%`,
      height: "100%",
      overflow: "hidden",
      // transform: "translate(-50%)",
      transformOrigin: "center",
      "@keyframes bounceRotate": {
        "0%": {
          transform: `translateY(-${10 + ind}%) rotate(0deg)`,
        },
        "25%": {
          transform: `translateY(${10 + ind}%) rotate(90deg)`,
        },
        "50%": {
          transform: `translateY(-${10 + ind}%) rotate(180deg)`,
        },
        "75%": {
          transform: `translateY(${10 + ind}%) rotate(270deg)`,
        },
        "100%": {
          transform: `translateY(-${10 + ind}%) rotate(360deg)`,
        },
      },
      animation: `bounceRotate infinite ${8000 + ind * 100}ms linear both 4s`,
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
      src: "/ecosystem/stone1.png",
      title: "Lorem",
      href: "",
      style: stoneCon(144.2, 150.05, 1127, 146),
    },
    {
      src: "/ecosystem/stone2.png",
      title: "Lorem",
      href: "",
      style: stoneCon(140, 116, 47, 309),
    },
    {
      src: "/ecosystem/stone3.png",
      title: "Lorem",
      href: "",
      style: stoneCon(128.32, 107.24, 912, 508),
    },
    {
      src: "/ecosystem/stone4.png",
      title: "Lorem",
      href: "",
      style: stoneCon(85.02, 80.54, 839, 131),
    },
    {
      src: "/ecosystem/stone5.png",
      title: "Lorem",
      href: "",
      style: stoneCon(85, 81, 274, 524),
    },
    {
      src: "/ecosystem/stone6.png",
      title: "Lorem",
      href: "",
      style: stoneCon(79, 81, 1218, 463),
    },
    {
      src: "/ecosystem/stone7.png",
      title: "Lorem",
      href: "",
      style: stoneCon(74, 71, 291, 81),
    },
    {
      src: "/ecosystem/stone8.png",
      title: "Lorem",
      href: "",
      style: stoneCon(56.77, 48.4, 224, 210),
    },
    {
      src: "/ecosystem/stone9.png",
      title: "Lorem",
      href: "",
      style: stoneCon(46.55, 39.44, 19.2, 536),
    },
    {
      src: "/ecosystem/stone10.png",
      title: "Lorem",
      href: "",
      style: stoneCon(33.66, 40.74, 1304, 338),
    },
    {
      src: "/ecosystem/stone10.png",
      title: "Lorem",
      href: "",
      style: stoneCon(33.66, 40.74, 119, 65.1),
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
      {React.Children.toArray(
        stonesArr.map((item, index) => (
          <Tooltip title={item.title} placement="top">
            <Link
              href={item.href}
              sx={{ ...item.style }}
              onClick={(e) => item.href === "" && e.preventDefault()}
            >
              <Box sx={stones(index)}>
                <img src={item.src} alt="stone illustration" style={imgStyle} />
              </Box>
            </Link>
          </Tooltip>
        ))
      )}
      <div style={imgCon(734, 486, 312, 7)}>
        <img
          src="/ecosystem/mascot.png"
          alt="mascot"
          style={{ ...imgStyle, zIndex: 5 }}
        />
      </div>
    </Box>
  );
}
