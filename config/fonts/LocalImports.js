import localFont from "next/font/local";

export const BPdotsSquare = localFont({
  src: [
    {
      path: "./BPdotsSquare/BPdotsSquare.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BPdotsSquareLight/BPdotsSquareLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./BPdotsSquareBold/BPdotsSquareBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
});

export const DMSans = localFont({
  src: [
    {
      path: "./DMSans/DMSans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./DMSansItalic/DMSansItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
});
