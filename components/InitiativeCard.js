import { Box, Typography } from "@mui/material";
import React from "react";

const ContainerStyle = {
  width: "min(248px,100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  heigh: "100%",
  textAlign: "center",
  mx: "auto",
  gap: "42px",
  textDecoration: "none",
  "&:first-of-type": {
    mx: 0,
  },
  "&:last-of-type": {
    mx: 0,
  },
  "@media (max-width:900px)": {
    mx: 0,
  },
};

const textStyle = {
  color: "warning.main",
  textTransform: "uppercase",
};

export default function InitiativeCard({ image, text, iWidth, href }) {
  return (
    <Box
      sx={ContainerStyle}
      component="a"
      href={href}
      onClick={(e) => !href && e.preventDefault()}
    >
      <Box sx={{ display: "flex", flex: "1" }}>
        <img
          src={`/static/${image}.svg`}
          alt={image}
          style={{
            width: `min(${iWidth}, 100%)`,
            height: "auto",
            margin: "auto",
          }}
        />
      </Box>
      <Typography
        component="p"
        variant="subtitle1"
        color="inherit"
        sx={textStyle}
      >
        {text}
      </Typography>
    </Box>
  );
}
