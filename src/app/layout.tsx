import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

// ✅ Local font setup
const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export const metadata = {
  title: "Drippy — The Future of Refreshment",
  description:
    "Refreshing. Bold. Unique. Discover Drippy, a new era of taste.",
  openGraph: {
    title: "Drippy — The Future of Refreshment",
    description:
      "Refreshing. Bold. Unique. Discover Drippy, a new era of taste.",
    url: "https://drippydrinks.vercel.app",
    siteName: "Drippy",
    images: [
      {
        url: "/meta/drippy-cover.png", // 👈 place this image in /public/meta/
        width: 1200,
        height: 630,
        alt: "Drippy — The Future of Refreshment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drippy — The Future of Refreshment",
    description:
      "Refreshing. Bold. Unique. Discover Drippy, a new era of taste.",
    images: ["/meta/drippy-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
      {/* Keep Prismic preview active */}
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
