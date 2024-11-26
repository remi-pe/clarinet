"use client";

import {useRouter} from "next/navigation";
import {Button} from "./button";

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
        <div className="space-x-4">
          <Button
            theme="dark"
            renderLabel={() => (
              <p className="text-white text-sm font-semibold">KNOWLEDGE BASE</p>
            )}
            size={"l"}
            onClickHandler={() => router.push("/build")}
            bgFill="bg-blue-100"
            borderFill="border-blue-300"
          />

          <Button
            theme="dark"
            renderLabel={() => (
              <p className="text-white text-sm font-semibold">BUILD</p>
            )}
            size={"l"}
            onClickHandler={() => router.push("/build")}
            bgFill="bg-grey-100"
            borderFill="border-grey-300"
          />
        </div>
      </header>
    </>
  );
};
