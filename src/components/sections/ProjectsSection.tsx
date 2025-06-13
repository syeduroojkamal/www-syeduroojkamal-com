import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Github from "@/images/Github";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="mt-16 px-4">
      <h1 className="text-2xl text-center">Projects</h1>
      <div className="flex flex-wrap items-start justify-center gap-8 mt-8">
        <div className="bg-card p-4 w-80 border rounded-2xl shadow-lg flex flex-col gap-3">
          <div className="relative w-full h-72 overflow-hidden border rounded-xl">
            <Image
              src="/chat-system.jpg"
              alt="Screenshot of chat system project"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
          <h2 className="mt-2 text-lg">Chat System</h2>
          <p>
            Real-time messaging with robust architecture, and intuitive design.
          </p>
          <div className="mt-2 flex gap-2 flex-wrap">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">React.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">shadcn</Badge>
            <Badge variant="secondary">tailwindcss</Badge>
            <Badge variant="secondary">lucide-react</Badge>
            <Badge variant="secondary">Zustand</Badge>
            <Badge variant="secondary">Clerk</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Express</Badge>
            <Badge variant="secondary">Socket.io</Badge>
            <Badge variant="secondary">MongoDB</Badge>
            <Badge variant="secondary">Vercel</Badge>
          </div>
          <div className="flex justify-center items-center gap-2 pt-4 border-t *:flex-1">
            <Button asChild>
              <a
                href="https://chat-system.space/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <ExternalLink />
                Visit Site
              </a>
            </Button>
            <Button asChild variant={"outline"}>
              <a
                href="https://github.com/syeduroojkamal/chat-system"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <Github className="w-5 h-5 text-current" />
                View Source
              </a>
            </Button>
          </div>
        </div>
        <div className="bg-card p-4 w-80 border rounded-2xl shadow-lg flex flex-col gap-3">
          <div className="relative w-full h-72 overflow-hidden border rounded-xl">
            <Image
              src="/portfolio.jpg"
              alt="Screenshot of chat system project"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
          <h2 className="mt-2 text-lg">Portfolio Website</h2>
          <p>
            A personal portfolio showcasing my projects, skills, and experience.
          </p>
          <div className="mt-2 flex gap-2 flex-wrap">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">React.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">shadcn</Badge>
            <Badge variant="secondary">tailwindcss</Badge>
            <Badge variant="secondary">lucide-react</Badge>
            <Badge variant="secondary">Cloudflare</Badge>
          </div>
          <div className="flex justify-center items-center gap-2 pt-4 border-t *:flex-1">
            <Button asChild>
              <a
                href="https://www.syeduroojkamal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <ExternalLink />
                Visit Site
              </a>
            </Button>
            <Button asChild variant={"outline"}>
              <a
                href="https://github.com/syeduroojkamal/www-syeduroojkamal-com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <Github className="w-5 h-5 text-current" />
                View Source
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
