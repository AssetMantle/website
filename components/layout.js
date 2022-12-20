import Footer from "../views/Footer";
import Header from "../views/Header";
import Christmas from "./Christmas";

export default function Layout({ children }) {
  return (
    <>
      <Christmas /> {/* to remove christmas styles remove this component */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
