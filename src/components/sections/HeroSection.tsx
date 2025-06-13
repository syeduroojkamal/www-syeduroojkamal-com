import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-8 mt-16 sm:flex-row sm:gap-16">
      <Image
        src="/profile.jpeg"
        alt="photo of Syed Urooj Kamal"
        width={320}
        height={320}
        unoptimized
        priority
        className="rounded-full border-8 shadow-lg"
      />
      <div className="flex flex-col items-center text-center max-w-sm mt-8">
        <h1 className="text-3xl font-bold">Syed Urooj Kamal</h1>
        <p className="mt-4">
          Web developer building fast, responsive, and user-friendly apps with
          React and Next.js.
        </p>
        <Button asChild className="mt-4">
          <a
            href="https://docs.google.com/document/d/1SDQyduNQt0nIPw_k7GXqU43Hvc9MO2SPDCIV4qmD5Aw/preview?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
