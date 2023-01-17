import Footer from "../views/Footer";
import Header from "../views/Header";
import { Alert } from "@mui/material";
import { useState } from "react";

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
          sx={{ backgroundColor: "primary.main", color: "navBg" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, vel.
        </Alert>
      ) : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
