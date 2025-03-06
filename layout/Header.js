import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/media/logo.svg";

export default function Header({ indicator }) {
  return (
    <header className={`am-header ${indicator === 0 ? " hide" : ""}`}>
      <div className="am-header-container">
        <div className="am-header-container-content">
          <Link href="#hero" className="logo position-relative">
            <Image src={Logo} alt="assetmantle Logo" className="w-100 h-100" />
          </Link>
        </div>
      </div>
      <div
        className="am-header-line"
        style={{ backgroundImage: "url(/media/border-bg.png)" }}
      ></div>
    </header>
  );
}
