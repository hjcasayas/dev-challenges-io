import { NextPage } from "next";
import { ChallengeStatus } from "../challenges/challenge-status.enum";

import { responsiveChallenges } from "../challenges/responsive/responsive-challenges.list";
import { ChallengeCardComponent } from "../components/challenge-card.component";
import { Title } from "../components/title.component";

const Responsive: NextPage = () => {
  return (
    <>
      <Title pageName="Responsive"></Title>
      <h2>Responsive Path</h2>
      <div className="flex items-stretch flex-wrap mx-[-12px]">
        {responsiveChallenges.map((r, index) => {
          if (r.href.trim() === "" || r.status !== ChallengeStatus.Done) {
            return (
              <div
                className="p-3 w-full flex flex-col sm:w-2/4 lg:w-1/3 xl:w-1/4"
                key={r.src}
              >
                <ChallengeCardComponent {...r} index={index} />
              </div>
            );
          }

          return (
            <a
              className="p-3 w-full flex flex-col sm:w-2/4 lg:w-1/3 xl:w-1/4"
              href={r.href}
              target="_blank"
              rel="noreferrer"
              key={r.src}
            >
              <ChallengeCardComponent {...r} index={index} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Responsive;
