import { Alert, Link, Typography } from "@mui/material";
import React, { useState } from "react";

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
      style={{ fontWeight: "400" }}
      mx="auto"
    >
      {bannerIcon}&nbsp;&nbsp;Click here for limited early access to{" "}
      <strong>MantlePlace NFTs</strong>&nbsp;&nbsp;{bannerIcon}
    </Typography>
  );

  const alertJSX = showAlert ? (
    <Alert
      icon={false}
      onClose={() => {
        setShowAlert(false);
      }}
      sx={{
        backgroundColor: "primary.main",
        color: "navBg",
        borderRadius: 0,
        display: "flex",
        "& > *:first-child": {
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
        variant="text"
        color="primary"
        py={1}
        alignItems="center"
      >
        {bannerMessageJSX}
      </Link>
    </Alert>
  ) : null;

  return <>{alertJSX}</>;
}
