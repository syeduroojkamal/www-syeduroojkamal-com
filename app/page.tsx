import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siGithub } from "simple-icons/icons";
import { SimpleIcon } from "@/components/ui/SimpleIcon";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProfileImage from "@/components/ProfileImage";
import EducationCard from "@/components/EducationCard";

export default function Home() {
  return (
    <>
      <nav className="mt-4 mb-24 flex justify-end items-center gap-1">
        <Button variant={"ghost"} size={"icon"}>
          <a
            href="https://github.com/syeduroojkamal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcon icon={siGithub} />
          </a>
        </Button>
        <ThemeToggle />
      </nav>
      <main className="space-y-24">
        <section className="flex flex-col justify-center items-center gap-8 sm:justify-around sm:flex-row-reverse">
          <ProfileImage />
          <div className="flex flex-col items-center gap-6 text-center sm:text-left sm:items-start">
            <h1 className="text-4xl font-bold sm:text-6xl">Syed Urooj Kamal</h1>
            <p className="w-sm">
              Web developer building fast, responsive, and user-friendly apps
              with React and Next.js.
            </p>
            <Button variant={"default"}>
              <a
                href="https://docs.google.com/document/d/1SDQyduNQt0nIPw_k7GXqU43Hvc9MO2SPDCIV4qmD5Aw/preview?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </section>
        <section className="mx-[-1.25rem] py-8 flex flex-col justify-center items-center max-[-600]:] bg-card border">
          <h1 className="text-center mb-5 text-2xl font-semibold">Skills</h1>
          <div className="mx-5">
            <div>
              <div className="text-lg font-semibold">Core Tech Stack:</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">ShadCN</Badge>
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
              </div>
            </div>
            <div>
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
        <section>
          <h1 className="text-center mb-5 text-2xl font-semibold">Projects</h1>
          <div className="flex flex-wrap justify-center gap-5">
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
          <h1 className="text-center mb-5 text-2xl font-semibold">
            Experience
          </h1>
          <div className="flex flex-wrap justify-center items-baseline gap-5">
            <ExperienceCard
              role="Programmer Analyst"
              company="Cognizant, Pune"
              location="Pune, India"
              duration="Aug 2022 – Nov 2023"
              details={[
                "Worked with a USA-based offshore team in an Agile setup",
                "Automated server and test data setup, saving 5+ hours collectively daily for the team",
                "Handled test data and servers; built and ran performance tests using JMeter and LoadRunner",
                "Analyzed test results and generated detailed reports",
              ]}
              testimonial={`"Urooj's automation work saved us hours of manual effort. His ability to spot optimization opportunities significantly improved our systems."`}
            />
            <ExperienceCard
              role="Intern"
              company="Cognizant, Pune"
              location="Remote"
              duration="Mar 2022 - Jun 2022"
              details={["Trained in Programming, SQL, and Performance Testing"]}
            />
          </div>
        </section>
        <section>
          <h1 className="text-center mb-5 text-2xl font-semibold">Education</h1>
          <div className="flex justify-center items-center">
            <EducationCard />
          </div>
        </section>
        <section className="mx-[-1.25rem] py-10 px-5 bg-card border text-sm flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-5 font-semibold text-center">About me</h1>
          <div className="sm:w-xl text-justify flex flex-col gap-4 px-5">
            <div>
              I am a full-stack web developer focused on building modern,
              performant applications with Next.js, TypeScript, and React. I
              work confidently across both frontend and backend, and I enjoy
              crafting clean, responsive UIs using Tailwind CSS, ShadCN, and
              other tools from the modern React ecosystem.
            </div>
            <div>
              My background includes professional experience in tech, but over
              the past few years, I have dedicated myself to deepening my web
              development skills through hands-on projects and continuous
              learning. I have built applications that span from UI-rich
              frontend interfaces to fully integrated backend APIs—always with
              attention to detail, scalability, and user experience.
            </div>
            <div>
              Now, I’m actively seeking a role where I can contribute to a team
              building real-world products with Next.js, while continuing to
              grow as a developer in a modern JavaScript environment.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
