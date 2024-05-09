import type { Metadata, Viewport } from "next";
import "./globals.scss";

import { Ephesis } from "next/font/google";

const ephesis = Ephesis({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xenia Asveta",
  description: "Xenia Asveta web-page",
  openGraph: {
    title: "Xenia Asveta",
    description: "Xenia Asveta web-page",
  },
  twitter: {
    title: "Xenia Asveta",
    description: "Xenia Asveta web-page",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
  userScalable: false,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ephesis.className}>{children}</body>
    </html>
  );
}
