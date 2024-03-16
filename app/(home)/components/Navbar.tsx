import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/abdelrhman-mohamed-2bab9a213/",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/abdelrhman-mohamed-dev",
      label: "Github",
      icon: SiGithub,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center animate-move-down">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Abdelrhmman 🧑‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.label}
              href={social.link}
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
