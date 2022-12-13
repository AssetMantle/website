import Footer from "../views/Footer";
import Header from "../views/Header";
import Christmas from "./Christmas";

export default function Layout({ children }) {
  return (
    <>
      <Christmas />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
