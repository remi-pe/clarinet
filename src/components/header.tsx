"use client";

import {useRouter} from "next/navigation";
import {Button} from "./button";
import {PlusIcon} from "./icons/plus";
import {BuildButton} from "./build-button";

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
            onClickHandler={() => router.push("/")}
            className="bg-blue-100 border-blue-300"
          />
          <button
            form="hook-form"
            className="text-white bg-blue-100 border-blue-300"
          >
            submit form
          </button>

          <Button
            renderIcon={(size) => <PlusIcon size={size} />}
            onClickHandler={() => console.log("add system prompt")}
            size="m"
            theme="dark"
            className="grey-100 grey-400"
          />
          <BuildButton />
        </div>
      </header>
    </>
  );
};
