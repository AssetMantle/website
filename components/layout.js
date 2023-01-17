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
            borderRadius: 0,
            py: 0,
            "& > *:first-child": {
              flex: "1",
              py: 0,
            },
            "&>.MuiAlert-action.css-ki1hdl-MuiAlert-action": {
              p: 0,
              alignItems: "center",
            },
          }}
        >
          {" "}
          <Button
            component={Link}
            style={{ margin: "auto", width: "100%", py: 0 }}
            to="https://marketplace.assetmantle.one/"
            variant="text"
            color="primary"
          >
            <Typography
              px={2}
              variant="caption"
              color="navBg"
              textTransform="capitalize"
              textAlign="center"
              style={{ fontWeight: "400" }}
            >
              🎉 Click here for limited early access to{" "}
              <strong>MantlePlace NFTs</strong> 🎉
            </Typography>
          </Button>
        </Alert>
      ) : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
