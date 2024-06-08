"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  name: string;
  path: string;
};

export default function NavLink({ name, path }: NavLinkProps) {
  const activePathname = usePathname();

  return (
    <li
      key={path}
      className={cn("hover:text-white flex items-center relative transition", {
        "text-white": activePathname === path,
        "text-white/50": activePathname !== path,
      })}
    >
      <Link href={path}>{name}</Link>

      {activePathname === path && (
        <motion.div
          layoutId="header-active-link"
          className="bg-accent h-1 w-full absolute bottom-0"
        ></motion.div>
      )}
    </li>
  );
}
