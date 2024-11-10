"use client";

import Link from "next/link";
import {useStore} from "@/app/store";
// import {Toggle} from "./toggle";

export const Header = () => {
  const {isProcessing} = useStore();

  return (
    <>
      <header className="flex justify-between px-12 pt-6 h-44 bg-dark_black">
        <Link href="/">
          <span className="text-2xl font-prata text-white" aria-label="Logo">
            Clarinet
          </span>
        </Link>
        {/* <Toggle /> */}
        <Link className="text-white" href="/build">
          {isProcessing ? "Processing" : "Build"}
        </Link>
      </header>
    </>
  );
};
