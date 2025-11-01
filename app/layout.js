import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Geist, Geist_Mono } from "next/font/google";
import "nextra-theme-docs/style.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learnerspree",
  description: "Learnerspree | Thomas Sankara",
  keywords: ["Thomas Sankara", "TsbSankara"],
};

const banner = (
  <Banner storageKey="1234567890">
    Get the offical eBook 🎉 (Not yet published)
  </Banner>
);

const navbar = <Navbar logo={<b>Learnerspree</b>} />;

const footer = (
  <Footer>MIT {new Date().getFullYear()} &copy; Thomas Sankara</Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sankthomas/learnerspree"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
