import { Brain, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { IconType } from "react-icons";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "@/components/ui/title";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  tech: IconType[];
  link: string;
  cover: string;
  background: string;
}
interface Title {
  text: string;
  icon: IconType | LucideIcon;
}
export default function Projects({
  projects,
  title,
}: {
  projects: Project[];
  title: Title;
}) {
  return (
    <div className="py-10 p-5 sm:p-0 ">
      <Title
        text={`${title.text}`}
        className="flex flex-col justify-center items-center rotate-6"
      >
        <title.icon className="text-green-500" />
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, idx) => {
          return (
            <Link target="_blank" href={project.link} key={idx}>
              <div className={cn(project.background, "p-1 sm:p-4 rounded-md ")}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5"
                >
                  <div className="space-y-5">
                    <h2 className="sm:text-2xl font-bold">{project.title}</h2>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, idx) => {
                        return <Icon className="w-8 h-8" key={idx} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
