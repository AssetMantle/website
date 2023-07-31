import { useState } from "react";
import Footer from "../views/Footer";
import Header from "../views/Header";
import Banner from "./Banner";

export default function Layout({ children }) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {/* <Banner /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
