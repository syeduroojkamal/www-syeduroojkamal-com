"use client";

import * as React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import LoadingSpinner from "@/components/LoadingSpinner";

const geistSans = "var(--font-geist-sans)";
const geistMono = "var(--font-geist-mono)";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingSpinner />;

  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      enableColorScheme={true}
    >
      <div className={`${geistSans} ${geistMono} antialiased`}>{children}</div>
    </ThemeProvider>
  );
}
