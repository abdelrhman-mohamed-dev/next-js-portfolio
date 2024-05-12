import React from "react";

export default function Title({
  text,
  className,
  children,
}: {
  text: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold group-hover:text-green-400 transition-all flex items-center gap-2">
        {`${text}`}
        {children}
      </h2>
      <div className="w-40 h-2 bg-green-500 rounded-full" />
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2" />
    </div>
  );
}
