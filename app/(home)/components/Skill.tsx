"use client";
import { HoverEffect } from '@/components/ui/card-hover-effect'
import Title from '@/components/ui/title'
import React from 'react'
import { SiExpress, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skill() {
  const Skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text:"JavaScript",
      Icon : SiJavascript,
    }
  ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills 🔪" className='flex flex-col justify-center items-center -rotate-6' />
      <HoverEffect items={Skills} />
    </div>
  )
}
