import { useState } from "react";
import Footer from "../views/Footer";
import Header from "../views/Header";
// import Banner from "./Banner";
// import Christmas from "./Christmas";
import Background from "./Background";

export default function Layout({ children }) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {/* <Banner /> */}
      <Background />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
