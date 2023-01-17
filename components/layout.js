import Footer from "../views/Footer";
import Header from "../views/Header";
import { Alert, Typography, Link, Box, Button } from "@mui/material";
import { useState } from "react";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function Layout({ children }) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert ? (
        <Alert
          icon={false}
          onClose={() => {
            setShowAlert(false);
          }}
          sx={{
            height: "60px",
            padding: "8px",
            margin: "0px",
            backgroundColor: "primary.main",
            color: "navBg",
            "& > *:first-child": {
              flex: "1",
            },
          }}
        >
          {" "}
          <Link
            target="_blank"
            href="https://marketplace.assetmantle.one/"
            color="primary"
          >
            <Box
              sx={{
                padding: "0",
                margin: "0",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CelebrationIcon style={{ color: "black" }} />
              <Typography px={2} variant="caption" color="black">
                Click here for limited early access to{" "}
                <strong>MantlePlace NFTs</strong>
              </Typography>
              <CelebrationIcon style={{ color: "black" }} />
            </Box>
          </Link>
        </Alert>
      ) : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
