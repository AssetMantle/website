import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/media/logo.svg";

export default function Footer({ indicator }) {
  return (
    <footer className="am-footer">
      <div
        className="am-footer-line"
        style={{ backgroundImage: "url(/media/border-bg.png)" }}
      ></div>
      <div className="am-footer-container">
        {indicator === 0 && (
          <div className="left">
            <Link href="#hero" className="logo position-relative">
              <Image src={Logo} alt="assetmantle Logo" />
            </Link>
          </div>
        )}
        <p className={indicator === 0 ? "hero" : ""}>
        🏣 : 20A, Tanjong Pagar Road, Singapore - 088443&nbsp;&nbsp;&nbsp;📞 : +6531071296
        </p>
        {indicator === 0 && <div style={{ marginLeft: "auto" }}></div>}
        <p className={indicator === 0 ? "hero" : ""}>
          &copy; Assetmantle 2024 - All rights reserved{" "}
        </p>
        <div className="socials">
          <Link
            href="mailto:hello@assetmantle.one"
            className="icon position-relative"
          >
            <Image
              src="/media/icons/mail.svg"
              alt="assetmantle Logo"
              className="w-100 h-100"
              width={16}
              height={16}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/assetmantle"
            className="icon position-relative"
          >
            <Image
              src="/media/icons/linkedin.svg"
              alt="assetmantle Logo"
              className="w-100 h-100"
              width={16}
              height={16}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </Link>
          <Link
            href="https://x.com/assetmantle"
            className="icon position-relative"
          >
            <Image
              src="/media/icons/x-icon.svg"
              alt="assetmantle Logo"
              className="w-100 h-100"
              width={16}
              height={16}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
