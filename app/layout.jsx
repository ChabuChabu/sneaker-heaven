import "./globals.css";
import Script from "next/script";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata = {
  title: "Sneaker Heaven",
  description: "A simple sneaker shop built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdn.optimizely.com/js/4951893143715840.js"
          strategy="beforeInteractive"
        />
      </head>
      <body suppressHydrationWarning>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
