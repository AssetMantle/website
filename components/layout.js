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
          }}
        >
          {" "}
          <Button
            component={Link}
            style={{ margin: 4 }}
            to="https://marketplace.assetmantle.one/"
            variant="contained"
            color="primary"
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CelebrationIcon />
              <Typography px={2} variant="body1">
                Click here for limited early access to MantlePlace NFTs
              </Typography>
              <CelebrationIcon />
            </Box>
          </Button>
        </Alert>
      ) : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
