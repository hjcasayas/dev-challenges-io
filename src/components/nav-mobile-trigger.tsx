import { FunctionComponent, useState } from "react";

interface NavMobileTriggerProps {
  open: boolean;
  onOpen: () => void;
}

const NavMobileTrigger: FunctionComponent<NavMobileTriggerProps> = ({
  open,
  onOpen,
}: NavMobileTriggerProps) => {
  const handleClick = (): void => {
    onOpen();
  };

  let beforeStyles =
    "before:h-[3px] before:w-full before:absolute before:top-0 before:left-0 before:bg-gray-100 before:origin-bottom-left before:transition-transform before:duration-300 before:ease-out";
  let afterStyles =
    "after:h-[3px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gray-100 after:origin-top-left after:transition-transform after:duration-300 after:ease-out";
  let middleStyles =
    "h-[3px] w-full bg-gray-100 absolute top-[8px] left-0 origin-left scale-x-1 opacity-1 transition-all duration-300 ease-out";

  if (open) {
    beforeStyles =
      "before:h-[3px] before:w-full before:absolute before:top-0 before:left-0 before:bg-gray-100 before:origin-bottom-left before:rotate-45 before:scale-x-[1.08] before:transition-transform before:duration-300 before:ease-in";
    afterStyles =
      "after:h-[3px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gray-100 after:origin-top-left after:-rotate-45 after:scale-x-[1.08] after:transition-transform after:duration-300 after:ease-in";
    middleStyles =
      "h-[3px] w-full bg-gray-100 absolute top-[8px] left-0 origin-left scale-x-0 opacity-0 transition-all duration-300 ease-in";
  }

  return (
    <div
      className={`relative w-5 h-[19px] cursor-pointer z-20 inline-block ${beforeStyles} ${afterStyles} lg:hidden`}
      onClick={handleClick}
    >
      <div className={middleStyles}></div>
    </div>
  );
};

export { NavMobileTrigger };
