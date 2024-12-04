import {Typography} from "./typography";
import {Divider} from "./divider";
import {usePathname} from "next/navigation";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";

export const BuildButton = () => {
  const path = usePathname();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <p
            className={`text-sm font-semibold p-1.5 h-[40px] flex items-center justify-center rounded-md border px-4 text-white cursor-pointer  ${
              path === "/build"
                ? "bg-blue-100 border-blue-300"
                : "border-grey-400"
            }`}
          >
            BUILD
          </p>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="w-[213px] z-50 bg-grey-300 border-grey-400 rounded-md p-4 grid gap-4"
        >
          <div>
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
        </PopoverContent>
      </Popover>

      {/* <div className="relative">
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
      </div> */}
    </>
  );
};
