import {Button} from "./ui/button";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between px-12 pt-6 h-44 bg-dark_black">
        <span className="text-2xl font-prata text-white" aria-label="Logo">
          Clarinet
        </span>
        <Button type="submit" form="hook-form" color="p-12 bg-red-500">
          KNOWLEDGE BASE
        </Button>
      </header>
    </>
  );
};
