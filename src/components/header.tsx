"use client";

import Link from "next/link";
import {useStore} from "@/app/store";

export const Header = () => {
  const {isBuilding} = useStore();

  return (
    <>
      <header className="flex items-center justify-between px-12 pt-6 pb-24 bg-dark_black">
        <Link href="/">
          <span className="text-2xl font-prata" aria-label="Logo">
            Clarinet
          </span>
        </Link>
        <Link href="/build">{isBuilding ? "Building..." : "Build"}</Link>
      </header>
    </>
  );
};
