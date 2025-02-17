import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Vahid's Next App",
  description: "Developed by Vahid Moeini",
};

export const headingFont = localFont({
  src: [
    {
      path: "../public/fonts/Morabba/woff2/Morabba-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Morabba/woff2/Morabba-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-headingFont",
});

export const textFont = localFont({
  src: [
    {
      path: "../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-textFont",
});

export default function RootLayout({ children }) {
  console.log(headingFont, textFont);

  return (
    <html lang="fa" dir="rtl">
      <body className={textFont.className}>{children}</body>
    </html>
  );
}
