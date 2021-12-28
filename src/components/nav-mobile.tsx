import { useRouter } from "next/dist/client/router";
import { FunctionComponent } from "react";
import Link from "next/link";

import { navigationOptions } from "./nav";

interface NavMobileProps {
  open: boolean;
  onOpen: () => void;
}

const NavMobile: FunctionComponent<NavMobileProps> = ({
  open,
  onOpen,
}: NavMobileProps) => {
  const router = useRouter();
  const pathName = router.pathname;

  const showStyle = open ? "block" : "hidden";
  const opacity = open ? "opacity-100 ease-out" : "opacity-0 ease-in";

  return (
    <nav
      className={`z-10 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-900 transition-all duration-300 ${opacity} ${showStyle} lg:hidden`}
    >
      <ul className="flex flex-col items-center">
        {navigationOptions.map((option) => {
          let selectedOptionStyles = "border-gray-900";

          if (pathName === option.href) {
            selectedOptionStyles = "border-gray-100";
          }

          return (
            <li
              key={option.title}
              className={`text-center font-medium text-lg leading-6 mb-8 pb-1 pl-1 pr-1 inline-block border-b-2 ${selectedOptionStyles}`}
              onClick={onOpen}
            >
              <Link href={option.href}>
                <a>{option.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { NavMobile };
