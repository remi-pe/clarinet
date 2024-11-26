"use client";

import {useRouter} from "next/navigation";
import {Button} from "./button";
import {useStore} from "@/app/store";

export const Header = () => {
  const {isProcessing} = useStore();
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
            className="bg-blue-100 border-blue-300"
          />

          <button form="hook-form" className="text-white">
            submit form
          </button>

          {/* <Button
            renderIcon={(size) => <PlusIcon size={size} />}
            onClickHandler={() => console.log("add system prompt")}
            size="m"
            theme="dark"
            className="grey-100 grey-400"
          /> */}

          <Button
            theme="dark"
            renderLabel={() => (
              <p className="text-white text-sm font-semibold">BUILD</p>
            )}
            size={"l"}
            onClickHandler={() => {
              if (isProcessing) return;
              router.push("/build");
            }}
            className={`${
              isProcessing ? "cursor-wait" : "cursor-pointer"
            } bg-grey-100 border-grey-300`}
          />
        </div>
      </header>
    </>
  );
};
