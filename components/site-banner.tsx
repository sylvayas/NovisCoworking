"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SiteBanner() {
  return (
    <div className="group relative top-0 bg-[#173661] py-3 text-white transition-all duration-300 md:py-0 background='#173661'">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="#"
          
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          ✨{" "}
          <span className="ml-1 font-[580] dark:font-[550]">
            {" "}
            Bienvenue chez <span className="font-lora">AITECH-</span> <span className=" font-lora">CI</span>, votre espace idéal pour travailler et collaborer.
          </span>{" "}
          <ChevronRight className="ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
