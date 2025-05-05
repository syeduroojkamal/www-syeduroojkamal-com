import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import Image from "next/image";
import Link from "next/link";
import { SimpleIcon } from "./ui/SimpleIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full max-w-md">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <CardContent className="flex-1 p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t p-6 flex gap-2">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <SimpleIcon icon={siGithub} className="mr-2" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild className="flex-1">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
