import {useStore} from "@/app/store";

export const Toggle = () => {
  const {isBuilding} = useStore();

  return (
    <>
      {/* <div className="flex items-center gap-0 text-sm border border-black overflow-hidden rounded-full">
        <div
          className={`bg-regal_green h-10 rounded-full absolute transition-transform duration-300 ${
            // isToggled ? "translate-x-full" : ""
          }`}
          style={{width: "50%"}}
        ></div>{" "}
        <div className="px-6 py-3">
          <p className="font-bold text-white">KNOWLEDGE BASE</p>
        </div>
        <div className="px-6 py-3">
          <p className="font-bold text-white">
            {isBuilding ? "PROCESSING" : "BUILD"}
          </p>
        </div>
      </div> */}
    </>
  );
};
