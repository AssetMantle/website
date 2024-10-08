import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/media/logo.png";

export default function Footer() {
  return (
    <footer className="am-footer">
      <div
        className="am-footer-line"
        style={{ backgroundImage: "url(/media/border-bg.png)" }}
      ></div>
      <div className="am-footer-container">
        <div className="left">
          <Link href="#hero" className="logo position-relative">
            <Image
              src={Logo}
              alt="assetmantle Logo"
              className="w-100 h-100"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </Link>
        </div>
        <p className="m-0">&copy; Assetmantle 2024 - All rights reserved </p>
        {/* <div className="socials">
          <Link
            href="mailto:hello@mantlewroks.one"
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
        </div> */}
      </div>
    </footer>
  );
}
