import type { Metadata } from "next";
import "./globals.css";
import ClientRoot from "@/components/ClientRoot";

export const metadata: Metadata = {
  title: "Syed Urooj Kamal",
  description:
    "Syed Urooj Kamal is a software engineer and developer. Explore projects, experience, skills, and contact information on this professional portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Syed Urooj Kamal</title>
      </head>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
