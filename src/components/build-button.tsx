import {Typography} from "./typography";
import {Divider} from "./divider";
import {usePathname} from "next/navigation";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";
import {useStore} from "@/app/store";
import {LoadingIcon} from "./icons/loading";
import {useEffect, useState} from "react";

// build a tab component. I want to be able to click the tab and for the selected tab to change. Please fill both the tabs with lorem ipsum I want the background of the first tab to be blue and the back ground of the second tab to be green.

// Create a responsive calendar app using React and Tailwind CSS. The app should have the following features:

// Monthly View: Display the days of the month in a 5-column grid format, with the current day highlighted.
// Navigation: Include buttons to navigate to the previous and next months.
// Add Events: Allow users to click on a specific day to add an event. Use a modal or popup for entering event details like title, description, and time.
// Event Display: Show events as small badges or markers on the corresponding day in the calendar grid. When a user hovers or clicks on a day, display event details.
// Responsive Design: Ensure the calendar layout adjusts for different screen sizes, from mobile to desktop.
// Customizable Appearance: Use Tailwind CSS classes to allow users to easily modify the color scheme and font styles.
// Current Date Highlighting: Automatically highlight the current date with a distinct style.
// Weekday Headers: Include headers (Sun, Mon, etc.) for each column in the grid.

export const BuildButton = () => {
  const {isProcessing} = useStore();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isProcessing && path !== "/build");
  }, [isProcessing, path]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
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
          className="w-[254px] z-50 bg-grey-300 border-grey-400 rounded-md p-4 grid gap-4"
        >
          <div>
            <div className="space-y-3">
              <Typography variant="tag" className="text-white">
                Please process first to reflect changes made in the knowledge
                base.
              </Typography>

              <Divider />

              <button
                form="hook-form"
                className={
                  "p-1.5 flex items-center justify-center gap-2 rounded-md border px-4 text-white cursor-pointer bg-blue-100 border-blue-300 w-full"
                }
              >
                {isProcessing && <LoadingIcon />}
                <p className="text-white text-sm font-semibold">
                  {isProcessing ? "PROCESSING" : "PROCESS"}
                </p>
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
