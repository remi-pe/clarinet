import {Typography} from "./typography";
import {Button} from "./button";
import {useState} from "react";
import {Divider} from "./divider";
import {usePathname} from "next/navigation";

export const BuildButton = () => {
  const path = usePathname();
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <div className="relative">
        <Button
          theme="dark"
          renderLabel={() => (
            <p className="text-white text-sm font-semibold">BUILD</p>
          )}
          size={"l"}
          onClickHandler={() => setShowPopover(!showPopover)}
          className={`${
            path === "/build" ? "bg-blue-100 border-blue-300" : ""
          } h-[40px]`}
        />
        {showPopover && (
          <div className="w-[213px] absolute top-10 right-0 z-50 bg-grey-300 border-grey-400 rounded-md p-4 grid gap-4">
            <div className="space-y-3">
              <Typography variant="tag" className="text-white">
                You have 17 changes.
              </Typography>

              <Divider />

              <button
                form="hook-form"
                className={
                  "p-1.5 rounded-md border px-4 text-white cursor-pointer bg-blue-100 border-blue-300 w-full"
                }
              >
                <p className="text-white text-sm font-semibold">PROCESS</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
