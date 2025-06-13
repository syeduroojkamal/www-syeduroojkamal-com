import { Badge } from "../ui/badge";

export default function SkillsSection() {
  return (
    <section className="bg-card border-y mt-16 py-8 px-4 flex justify-center items-center">
      <div className="max-w-2xl">
        <h1 className="text-2xl">Skills</h1>

        <h2 className="mt-2">Core Tech Stack:</h2>
        <div className="flex gap-2 flex-wrap">
          <Badge variant={"secondary"}>Next.js</Badge>
          <Badge variant={"secondary"}>tailwindcss</Badge>
          <Badge variant={"secondary"}>ShadCN</Badge>
          <Badge variant={"secondary"}>React.js</Badge>
          <Badge variant={"secondary"}>TypeScript</Badge>
        </div>
        <h2 className="mt-2">Other Skills:</h2>
        <div className="flex gap-2 flex-wrap">
          <Badge variant={"secondary"}>Google Cloud Platform</Badge>
          <Badge variant={"secondary"}>Docker</Badge>
          <Badge variant={"secondary"}>Git</Badge>
          <Badge variant={"secondary"}>GitHub</Badge>
          <Badge variant={"secondary"}>Node.js</Badge>
          <Badge variant={"secondary"}>Express.js</Badge>
          <Badge variant={"secondary"}>MongoDB</Badge>
          <Badge variant={"secondary"}>AWS</Badge>
          <Badge variant={"secondary"}>Terraform</Badge>
        </div>
      </div>
    </section>
  );
}
