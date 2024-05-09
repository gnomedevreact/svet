import type { Metadata } from "next";
import "./globals.scss";

import { Ephesis } from "next/font/google";

const ephesis = Ephesis({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xenia Asveta",
  description: "Xenia Asveta web-page",
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
