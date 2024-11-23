"use client";

import {useRouter} from "next/navigation";
import {Button} from "./ui/button";

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className="flex justify-between px-12 pt-6 h-44 bg-grey-100">
        <span
          onClick={() => router.push("/")}
          className="text-2xl font-prata text-white cursor-pointer"
          aria-label="Logo"
        >
          Clarinet
        </span>
        <Button type="submit" form="hook-form" className="text-white">
          SUBMIT
        </Button>
        <Button className="text-white" onClick={() => router.push("/build")}>
          KNOWLEDGE BASE
        </Button>
      </header>
    </>
  );
};
