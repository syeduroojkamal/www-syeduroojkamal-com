import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siGithub } from "simple-icons/icons";
import { SimpleIcon } from "@/components/ui/SimpleIcon";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-end gap-1 my-2 pr-2">
        <Button variant={"ghost"} size={"icon"}>
          <SimpleIcon icon={siGithub} />
        </Button>
        <ThemeToggle />
      </nav>
      <main>
        <section className="flex flex-col justify-center items-center sm:justify-around sm:flex-row-reverse sm:mt-28 my-15 gap-8">
          <ProfileImage />
          <div className="text-center  flex flex-col items-center gap-6 sm:text-left  sm:items-start">
            <h1 className="text-4xl font-bold sm:text-6xl">Syed Urooj Kamal</h1>
            <p className="max-w-md mx-5 sm:mx-0">
              Web developer building fast, responsive, and user-friendly apps
              with React and Next.js.
            </p>
            <Button variant={"default"}>Download Resume</Button>
          </div>
        </section>
        <section className="py-10 px-4 flex flex-col justify-center items-center bg-card border my-15">
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
        <section className="py-4 px-4 my-15">
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
        <section className="py-4 px-4 my-15">
          <h1 className="text-center text-2xl font-semibold mb-10">
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
          <h1 className="text-center text-2xl font-semibold mb-5">Education</h1>
          B.Tech in Computer Science & Engineering Swami Keshvanand Institute of
          Technology, Jaipur 2016 – 2020 (or your actual years)
        </section>
        <section className="py-10 px-4 flex flex-col justify-center items-center bg-card border mt-15">
          About Me (mention GCP cert here briefly) Contact Me
        </section>
      </main>
    </div>
  );
}
