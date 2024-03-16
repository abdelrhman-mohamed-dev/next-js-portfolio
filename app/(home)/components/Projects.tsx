import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "@/components/ui/title";
import { cn } from "@/lib/utils";
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

export default function Projects() {
  const projects = [
    {
      title: "Travel app landing page",
      tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://hilink-one.vercel.app/",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "Brainwave AI",
      tech: [SiVite, SiReact, SiTailwindcss],
      link: "https://boodydev-brainwave.netlify.app/",
      cover: "/project-2.png",
      background: "bg-green-500",
    },
    {
      title: "AI Article Summarizer GPT-4",
      tech: [SiVite, SiReact, SiTailwindcss],
      link: "https://master--articlessummarizer.netlify.app/",
      cover: "/project-3.png",
      background: "bg-cyan-500",
    },
    {
      title: "Restaurant landing page",
      tech: [SiHtml5, SiSass, SiJavascript],
      link: "https://abdelrhman-mohamed-dev.github.io/Restaurant-Website/",
      cover: "/project-4.png",
      background: "bg-pink-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0 ">
      <Title
        text="Projects 🎨"
        className="flex flex-col justify-center items-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
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
