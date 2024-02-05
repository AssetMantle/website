import { useRef, useState } from "react";
import Footer from "../views/layout/Footer";
import Header from "../views/layout/Header";
// import Banner from "./Banner";
// import Christmas from "./Christmas";
import Background from "./Background";

export default function Layout({ children }) {
  const [showAlert, setShowAlert] = useState(true);
  const containerRef = useRef();

  return (
    <div ref={containerRef} style={{ height: "fit-content" }}>
      {/* <Banner /> */}
      <Background containerRef={containerRef} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
