import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Background({ containerRef }) {
  const [current, setCurrent] = useState();
  const [ArrInterval, setArrInterval] = useState(0);

  useEffect(() => {
    setCurrent(containerRef?.current);
    containerRef?.current?.clientHeight &&
      containerRef?.current?.clientWidth &&
      setArrInterval(
        Math.floor(
          containerRef?.current?.clientHeight /
            (containerRef?.current?.clientWidth * 1.05)
        )
      );
  }, [containerRef?.current]);

  return (
    <Box
      sx={{
        position: "absolute",
        // top: "0",
        // bottom: "0",
        left: "0",
        right: "0",
        width: "min(1440px, 100%)",
        // minHeight: "min(1440px, 100dvh)",
        height: `${current?.clientHeight}px`,
        margin: "auto",

        backgroundImage:
          ArrInterval &&
          [...new Array(ArrInterval)]
            .map(
              (el) =>
                `linear-gradient(180deg, rgba(243, 178, 17, 0.60) 12.87%, rgba(243, 178, 17, 0.25) 112.87%), linear-gradient(152deg, rgba(111, 180, 181, 0.65) 25.91%, rgba(111, 180, 181, 0.30) 82.41%)`
            )
            .join(", "),
        backgroundPosition:
          ArrInterval &&
          current &&
          [...new Array(ArrInterval)]
            .map(
              (el, index) =>
                `top ${-17 + 105 * index}dvw left -14dvw, top ${
                  42 + 105 * index
                }dvw left 64dvw`
            )
            .join(", "),
        filter: `blur(220px)`,
        backgroundSize:
          ArrInterval &&
          [...new Array(ArrInterval)]
            .map((el) => `40dvw 40dvw, 65dvw 65dvw`)
            .join(", "),
        backgroundRepeat: `no-repeat`,
      }}
    ></Box>
  );
}
