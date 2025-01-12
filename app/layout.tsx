import type { Metadata } from "next";

import "@/css/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "",
  description: "",
  openGraph: {
    type: "website",
  },
};
