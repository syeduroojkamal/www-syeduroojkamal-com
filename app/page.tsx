import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siGithub } from "simple-icons/icons";
import { SimpleIcon } from "@/components/ui/SimpleIcon";
import { CircleUserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-end gap-1 my-2 pr-2">
        <Button variant={"ghost"} size={"icon"}>
          <SimpleIcon icon={siGithub} />
        </Button>
        <ThemeToggle />
      </nav>
      <main className="*:my-15">
        <section className="flex flex-col justify-center items-center sm:justify-around  sm:flex-row-reverse sm:mt-28">
          <CircleUserRound className="size-80" />
          <div className="text-center  flex flex-col items-center gap-6 sm:text-left  sm:items-start">
            <h1 className="text-4xl font-bold sm:text-6xl">Syed Urooj Kamal</h1>
            <p className="max-w-md mx-5 sm:mx-0">
              Web developer building fast, responsive, and user-friendly apps
              with React and Next.js.
            </p>
            <Button variant={"default"}>Download Resume</Button>
          </div>
        </section>

        <section className="py-10 px-4 flex flex-col justify-center items-center bg-card border shadow-sm">
          <h1 className="text-center text-2xl font-semibold mb-2">Skills</h1>
          <div>
            <div className="mb-2">
              <div className="text-lg font-semibold">Core Tech Stack:</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">ShadCN</Badge>
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
              </div>
            </div>
            <div className="max-w-4xl">
              <div className="text-lg font-semibold">Other Skills: </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Google Cloud Platform</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">GitHub</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Express.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Terraform</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 px-4">
          <h1 className="text-center text-2xl font-semibold mb-10">Projects</h1>
          <div className="flex gap-5 flex-wrap justify-center">
            <ProjectCard
              title="Portfolio Website"
              description="Hosted statically on Cloudflare"
              tags={["Next.js", "TypeScript", "ShadCN", "Tailwind CSS"]}
              imageUrl="/images/projects/portfolio.jpg"
              githubUrl="https://github.com/syeduroojkamal/www-syeduroojkamal-com"
              liveUrl="https://www.syeduroojkamal.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="Hosted statically on Cloudflare"
              tags={["Next.js", "TypeScript", "ShadCN", "Tailwind CSS"]}
              imageUrl="/images/projects/example.png"
              githubUrl="https://github.com/syeduroojkamal/www-syeduroojkamal-com"
              liveUrl="https://www.syeduroojkamal.com"
            />
          </div>
        </section>

        <section>
          Experience About Me (mention GCP cert here briefly) Education Contact
          Me
        </section>
      </main>
    </div>
  );
}
