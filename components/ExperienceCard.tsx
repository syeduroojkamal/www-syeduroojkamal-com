import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, CheckCircle, MapPin, Quote } from "lucide-react";

type ExperienceCardProps = {
  role?: string;
  company?: string;
  location?: string;
  duration?: string;
  details?: string[];
  testimonial?: string;
};

const ExperienceCard = ({
  role,
  company,
  location,
  duration,
  details = [""],
  testimonial,
}: ExperienceCardProps) => {
  return (
    <Card className="overflow-hidden w-sm">
      <CardHeader className="pt-7">
        <CardTitle>{role}</CardTitle>
        <p className="text-sm">{company}</p>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-5 flex gap-2">
        <div>
          <div className="mb-5">
            <h4 className="font-semibold">Key Achievements</h4>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-justify">
              {details.map((detail, index) => (
                <li
                  key={index}
                  className="flex justify-start items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span className="grow-0">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          {testimonial ? (
            <div className="p-3 rounded-md bg-muted text-muted-foreground text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 font-medium">
                <Quote className="h-4 w-4" />
                Testimonial
              </div>
              <p className="text-justify mx-4">{testimonial}</p>
              <p className="text-xs font-semibold mt-2">Team Lead, Cognizant</p>
            </div>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
