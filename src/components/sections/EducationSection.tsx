import { GraduationCap, MapPinned, Tally5 } from "lucide-react";
import Image from "next/image";

export default function EducationSection() {
  return (
    <section className="mt-16 px-4">
      <h1 className="text-2xl text-center">Education</h1>
      <div className="flex flex-wrap items-start justify-center gap-8 mt-8">
        <div className="bg-card p-4 w-80 border rounded-2xl shadow-lg">
          <div className="flex w-full justify-start items-center gap-4">
            <div>
              <h2 className="text-lg">B.Tech</h2>
              <h3 className="italic text-sm">SKIT College</h3>
            </div>
            <Image
              src="/skit.png"
              alt="photo of Syed Urooj Kamal"
              width={70}
              height={70}
              unoptimized
              className="ml-auto"
            />
          </div>
          <span className="text-sm flex items-center gap-2 mt-4">
            <GraduationCap className="scale-90" />
            Aug 2019 – July 2022
          </span>
          <span className="text-sm flex items-center gap-2 mt-1">
            <MapPinned className="scale-90" /> Jaipur, India
          </span>
          <span className="text-sm flex items-center gap-2 mt-1">
            <Tally5 className="scale-90" /> CGPA: 7.89
          </span>
        </div>
      </div>
    </section>
  );
}
