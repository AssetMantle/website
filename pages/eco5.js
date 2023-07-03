import { Box, Link, Tooltip } from "@mui/material";
import React from "react";

export default function Eco5() {
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

  const stones = (ind) => {
    return {
      width: `100%`,
      height: "100%",
      overflow: "hidden",
      // transform: "translate(-50%)",
      "@keyframes rotateAn": {
        "0%": {
          transform: "translateY(-10px) rotate(0deg)",
          transformOrigin: "center",
        },
        "25%": {
          transform: "translateY(10px) rotate(72deg)",
          transformOrigin: "center",
        },
        "50%": {
          transform: "translateY(-10px) rotate(144deg)",
          transformOrigin: "center",
        },
        "75%": {
          transform: "translateY(10px) rotate(216deg)",
          transformOrigin: "center",
        },
        "100%": {
          transform: "translateY(-10px) rotate(360deg)",
          transformOrigin: "center",
        },
      },
      //   animation: "3s ease-in-out 0s infinite reverse forwards running rotateAn",
      animation: `rotateAn infinite 8s linear both ${ind}s`,
    };
  };

  const stonesArr = [
    {
      src: "/ecosystem/stone1.png",
      title: "Lorem",
      href: "",
      style: imgCon(144.2, 150.05, 1129, 136),
    },
    {
      src: "/ecosystem/stone2.png",
      title: "Lorem",
      href: "",
      style: imgCon(79, 81, 1144, 409),
    },
    {
      src: "/ecosystem/stone3.png",
      title: "Lorem",
      href: "",
      style: imgCon(174.182, 138.065, 1160.03, 506.02),
    },
    {
      src: "/ecosystem/stone4.png",
      title: "Lorem",
      href: "",
      style: imgCon(68.238, 76.069, 1286, 310),
    },
    {
      src: "/ecosystem/stone5.png",
      title: "Lorem",
      href: "",
      style: imgCon(85.018, 80.543, 841.02, 121.3),
    },
    {
      src: "/ecosystem/stone6.png",
      title: "Lorem",
      href: "",
      style: imgCon(85, 81, 276, 514),
    },
    {
      src: "/ecosystem/stone7.png",
      title: "Lorem",
      href: "",
      style: imgCon(74.85, 59.33, 319, 187),
    },
    {
      src: "/ecosystem/stone8.png",
      title: "Lorem",
      href: "",
      style: imgCon(68.238, 76.069, 101, 37),
    },
    {
      src: "/ecosystem/stone9.png",
      title: "Lorem",
      href: "",
      style: imgCon(190, 151, 0, 268),
    },
    {
      src: "/ecosystem/stone10.png",
      title: "Lorem",
      href: "",
      style: imgCon(62.566, 49.593, 16, 517),
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
        stonesArr.map((item, index) => (
          <Tooltip title={item.title} placement="top">
            <Link
              href={item.href}
              sx={{ ...item.style, overflow: "visible" }}
              onClick={(e) => item.href === "" && e.preventDefault()}
            >
              <Box sx={stones(index)}>
                <img src={item.src} alt="stone illustration" style={imgStyle} />
              </Box>
            </Link>
          </Tooltip>
        ))
      )}
    </Box>
  );
}
