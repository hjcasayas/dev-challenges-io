import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChallengeStatus } from "../challenges/challenge-status.enum";

interface Props {
  status: ChallengeStatus;
  description: string;
  title: string;
  href: string;
  src: string;
}

// eslint-disable-next-line react/display-name
export const ChallengeCardComponent: FunctionComponent<Props> = ({
  description,
  status,
  title,
  href,
  src,
}) => (
  <div className="p-3 w-2/4 flex flex-col lg:w-1/3 xl:w-1/4">
    <Link href={href}>
      <a className="p-4 bg-primary-700 border-[1px] border-primary-400 hover:border-secondary-500 flex-1 flex flex-col">
        <Image
          className="rounded block"
          layout="responsive"
          height={423}
          width={750}
          alt={title}
          src={src}
        />
        <div className="pt-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-lg mb-3">{title}</h3>
            <p className="text-primary-400 mb-6">{description}</p>
          </div>
          <p>{status}</p>
        </div>
      </a>
    </Link>
  </div>
);
