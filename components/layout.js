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
            backgroundColor: "primary.main",
            color: "navBg",
            borderRadius: 0,
            py: 0,
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
            href="https://marketplace.assetmantle.one/"
            target="_blank"
            variant="text"
            color="primary"
            py={1}
          >
            <Typography
              variant="caption"
              color="navBg"
              textTransform="capitalize"
              textAlign="center"
              style={{ fontWeight: "400" }}
              mx="auto"
            >
              🎉 Click here for limited early access to{" "}
              <strong>MantlePlace NFTs</strong> 🎉
            </Typography>
          </Link>
        </Alert>
      ) : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
