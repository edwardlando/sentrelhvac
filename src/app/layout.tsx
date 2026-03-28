import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentrel Emergency Home Services | 24/7 Plumbing, HVAC & More",
  description:
    "Fast, reliable emergency home services. 24/7 plumbing, HVAC, electrical, and more. Real-time tracking, upfront pricing, and licensed professionals at your door in under 60 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
