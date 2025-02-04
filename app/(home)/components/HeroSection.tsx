import { Mails, MonitorUp, SendHorizontal } from "lucide-react";
import React from "react";
import Link from "next/link";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import Title from "@/components/ui/title";
import { FcDocument } from "react-icons/fc";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          {`Nice to meet you! 👋 `}
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {`I'm Abdelrhman.`}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {`Based in Egypt, I'm a Fullstack developer passionate about building
          modern web applications that users love.`}
        </p>
        <Link
          className="inline-block group"
          href={"mailto:mohamedsaad81973@gmail.com"}
          target="_blank"
        >
          <Title text="contact me">
            <Mails className="w-6 h-6   " />
          </Title>
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-4 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500" />
            <div className="w-32 h-32 rounded-full bg-indigo-500" />
          </div>
          <div className="flex gap-4 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500" />
            <div className="w-32 h-32 rounded-full bg-green-500" />
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn downloadUrl="/Abdelrhman Mohamed.pdf" borderRadius="0.5rem" className="p-3 font-semibold">
            <p className="flex items-center gap-2">
              {" "}
              <FcDocument /> {`Download CV`}
            </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
