import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {useRouter} from "next/navigation";
import {Typography} from "./typography";

export const BuildButton = () => {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <p
          className={
            "w-fit p-1.5 rounded-md border px-4 text-white cursor-pointer bg-grey-300"
          }
        >
          BUILD
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-[213px] bg-grey-300 border-grey-400">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Typography variant="tag" className="text-white">
              You have new requirements that haven&apos;t processed yet
            </Typography>

            <button
              form="hook-form"
              onClick={() => router.push("/")}
              className={
                "p-1.5 rounded-md border px-4 text-white cursor-pointer bg-blue-100 border-blue-300 w-full"
              }
            >
              PROCESS
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
