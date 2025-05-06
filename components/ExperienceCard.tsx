import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Quote } from "lucide-react";

const ExperienceCard = () => {
  return (
    <Card className="max-w-lg mx-5 p-2">
      <CardHeader>
        <CardTitle>Programmer Analyst</CardTitle>
        <p className="text-sm">Cognizant, Pune</p>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>Aug 2022 – Nov 2023</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Pune, India</span>
        </div>

        <div>
          <h4 className="font-semibold">Key Achievements</h4>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Worked with a USA-based offshore team in an Agile setup</li>
            <li>
              Automated server and test data setup, saving 5+ hours collectively
              daily for the team
            </li>
            <li>
              Handled test data and servers; built and ran performance tests
              using JMeter and LoadRunner
            </li>
            <li>Analyzed test results and generated detailed reports</li>
          </ul>
        </div>

        <div className="border p-3 rounded-md bg-muted text-muted-foreground text-sm flex flex-col gap-2">
          <div className="flex items-center gap-2 font-medium">
            <Quote className="h-4 w-4" />
            Testimonial
          </div>
          <p>
            "Urooj's automation work saved us hours of manual effort. His
            ability to spot optimization opportunities significantly improved
            our systems."
          </p>
          <p className="text-xs font-semibold mt-2">Team Lead, Cognizant</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
