import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EducationCard() {
  return (
    <section className="overflow-hidden w-sm">
      <Card className="rounded-2xl shadow-md border">
        <CardHeader className="pt-7">
          <CardTitle>B.Tech</CardTitle>
          <p className="text-sm">Computer Science & Engineering</p>
        </CardHeader>

        <CardContent>
          <div>
            <p className="text-sm text-muted-foreground">
              CGPA: <span>7.89</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Swami Keshvanand Institute of Technology, Jaipur
            </p>
            <p className="text-sm text-muted-foreground">2019 – 2022</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
