import { FunctionComponent } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { navigationOptions } from "./nav";

export const NavWeb: FunctionComponent = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav className="hidden lg:inline-block">
      <ul className="flex items-center">
        {navigationOptions.map((option) => {
          let selectedOptionStyles = "border-primary-500";

          if (pathName === option.href) {
            selectedOptionStyles = "border-secondary-500";
          }

          if (pathName === "/" && option.href === "/responsive") {
            selectedOptionStyles = "border-secondary-500";
          }

          return (
            <li
              key={option.title}
              className={`text-center font-medium text-lg leading-6 p-1 ml-20 inline-block cursor-pointer border-b-2 first-of-type:ml-0 ${selectedOptionStyles}`}
            >
              <Link href={`${option.href}`}>
                <a>{option.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
