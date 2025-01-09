"use client";

import {useRouter, usePathname} from "next/navigation";
import {Button} from "./button";
import {BuildButton} from "./build-button";
import {SystemIcon} from "./icons/system";

export const Header = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <>
      <header className="flex justify-between items-center px-12 h-[83px] bg-grey-100">
        <span
          onClick={() => router.push("/")}
          className="text-2xl font-prata text-white cursor-pointer"
        >
          Clarinet
        </span>
        <div className="flex items-center gap-4">
          <Button
            theme="dark"
            renderLabel={() => (
              <p className="text-white text-sm font-semibold">KNOWLEDGE BASE</p>
            )}
            size={"l"}
            onClickHandler={() => router.push("/")}
            className={`${
              path === "/" ? "bg-blue-100 border-blue-300" : ""
            } h-[40px]`}
          />

          <Button
            renderIcon={(size) => <SystemIcon size={size} />}
            onClickHandler={() => router.push("/edit-system-prompt")}
            size="xl"
            theme="dark"
            className={`${
              path === "/edit-system-prompt"
                ? "bg-blue-100 border-blue-300"
                : ""
            } h-[40px]`}
          />
          <BuildButton />
        </div>
      </header>
    </>
  );
};
