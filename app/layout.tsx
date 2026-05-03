import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAVEN — Premium Real Estate",
  description: "Discover exceptional properties in the world's most desirable locations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f5f2ec] text-[#0f0e0c] antialiased">{children}</body>
    </html>
  );
}
