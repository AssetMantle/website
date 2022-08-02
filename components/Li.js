import { Box, Typography } from "@mui/material";
import React from "react";

export default function Li({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "27px",
      }}
    >
      <img
        src="/static/li-indicator.svg"
        alt="li icon"
        style={{ marginTop: "6px" }}
      />
      <Typography component="p" variant="body1">
        {children}
      </Typography>
    </Box>
  );
}
