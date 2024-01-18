import { Box } from "@mui/material";
import React from "react";

export default function Background() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        // bottom: "0",
        left: "0",
        right: "0",
        width: "min(1440px, 100dvw)",
        minHeight: "min(1440px, 100dvh)",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          boxShadow: "0 0 250px 713px rgba(243, 178, 17, 0.40)",
          borderRadius: "50%",
          top: "-61%",
          left: "-25%",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          boxShadow: "0 0 250px 713px rgba(111, 180, 181, 0.40)",
          borderRadius: "50%",
          bottom: "-70%",
          right: "-15%",
        }}
      ></Box>
    </Box>
  );
}
