import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio Muhammad Aufa Website",
  description: "Portofolio Website of Muhammad Aufa Farabi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/weblogo.png" />
        <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
