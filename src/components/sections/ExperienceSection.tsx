import { Calendar, CircleCheckBig, MapPinned } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="mt-16 px-4">
      <h1 className="text-2xl text-center">Experience</h1>
      <div className="flex flex-wrap items-start justify-center gap-8 mt-8">
        <div className="bg-card p-4 w-80 border rounded-2xl shadow-lg">
          <h2 className="text-lg">Programmer Analyst</h2>
          <h3 className="italic text-sm">Cognizant</h3>
          <span className="text-sm flex items-center gap-2 mt-4">
            <Calendar className="scale-90" />
            Aug 2022 – Nov 2023
          </span>
          <span className="text-sm flex items-center gap-2 mt-1 mb-4">
            <MapPinned className="scale-90" /> Pune, India
          </span>
          <div className="pt-4 border-t flex flex-col items-start">
            <h3>Key Achievements</h3>
            <span className="text-sm flex gap-2 mt-2">
              <CircleCheckBig className="text-primary shrink-0 scale-75" />
              Worked with a USA-based offshore team in an Agile setup
            </span>
            <span className="text-sm flex gap-2 mt-2">
              <CircleCheckBig className="text-primary shrink-0 scale-75" />
              Automated server and test data setup, saving 5+ hours collectively
              daily for the team
            </span>
            <span className="text-sm flex gap-2 mt-2">
              <CircleCheckBig className="text-primary shrink-0 scale-75" />
              Handled test data and servers; built and ran performance tests
              using JMeter and LoadRunner
            </span>
            <span className="text-sm flex gap-2 mt-2">
              <CircleCheckBig className="text-primary shrink-0 scale-75" />
              Analyzed test results and generated detailed reports
            </span>
          </div>
        </div>
        <div className="bg-card p-4 w-80 border rounded-2xl shadow-lg">
          <h2 className="text-lg">Intern</h2>
          <h3 className="italic text-sm">Cognizant</h3>
          <span className="text-sm flex items-center gap-2 mt-4">
            <Calendar className="scale-90" />
            Mar 2022 - Jun 2022
          </span>
          <span className="text-sm flex items-center gap-2 mt-1 mb-4">
            <MapPinned className="scale-90" /> Remote
          </span>
          <div className="pt-4 border-t flex flex-col items-start">
            <h3>Training</h3>
            <span className="text-sm flex gap-2 mt-2">
              <CircleCheckBig className="text-primary shrink-0 scale-75" />
              Performance Testing
            </span>
            <span className="text-sm flex gap-2 mt-2">
              <CircleCheckBig className="text-primary shrink-0 scale-75" />
              Programming with JavaScript
            </span>
            <span className="text-sm flex gap-2 mt-2">
              <CircleCheckBig className="text-primary shrink-0 scale-75" />
              SQL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
