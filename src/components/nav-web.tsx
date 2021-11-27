import { FunctionComponent, useState } from "react";
import Link from "next/link";

import { navigationOptions } from "./nav";

export const NavWeb: FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Responsive");

  const handleOptionSelection = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  return (
    <nav className="hidden lg:inline-block">
      <ul className="flex items-center">
        {navigationOptions.map((option) => {
          let selectedOptionStyles = "border-primary";

          if (selectedOption === option.title) {
            selectedOptionStyles = "border-secondary";
          }

          return (
            <li
              key={option.title}
              className={`text-center font-medium text-lg leading-6 p-1 ml-20 inline-block cursor-pointer border-b-2 first-of-type:ml-0 ${selectedOptionStyles}`}
              onClick={() => handleOptionSelection(option.title)}
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
