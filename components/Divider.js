import { Box } from "@mui/material";
import React from "react";

export default function Divider({ mt, mb }) {
  return (
    <Box
      sx={{
        height: "1px",
        paddingTop: "1px",
        backgroundImage: "url(/static/line.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "min(1020px,100%)",
        mx: "auto",
        marginTop: mt,
        marginBottom: mb,
      }}
    />
  );
}
