import { FunctionComponent, useState } from "react";
import { NameLogo } from "./name-logo.component";
import { NavMobile } from "./nav-mobile";
import { NavMobileTrigger } from "./nav-mobile-trigger";
import { NavWeb } from "./nav-web";
import Link from "next/link";
export interface NavigationOption {
  title: string;
  href: string;
}

export const navigationOptions: NavigationOption[] = [
  { title: "Responsive", href: "/responsive" },
  { title: "Front End", href: "/front-end" },
  { title: "Full Stack", href: "/full-stack" },
];

export const Nav: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-row items-center justify-between text-gray-100">
      <h1 className="text-sm font-extralight border border-white leading-4 p-2">
        <Link href={"/"}>
          <a className="inline-block">
            <NameLogo />
          </a>
        </Link>
      </h1>
      <span className="inline-block">
        <NavMobileTrigger open={open} onOpen={handleOpen}></NavMobileTrigger>
        <NavMobile open={open} onOpen={handleOpen}></NavMobile>
        <NavWeb />
      </span>
    </div>
  );
};
