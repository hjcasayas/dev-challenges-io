import { NextPage } from "next";

import { responsiveChallenges } from "../challenges/responsive/responsive-challenges.list";
import { ChallengeCardComponent } from "../components/challenge-card.component";
import { Title } from "../components/title.component";

const Responsive: NextPage = () => {
  return (
    <>
      <Title pageName="Responsive"></Title>
      <h2>Responsive Path</h2>
      <div className="flex items-stretch flex-wrap mx-[-12px]">
        {responsiveChallenges.map((r) => (
          <ChallengeCardComponent
            description={r.description}
            status={r.status}
            title={r.title}
            href={r.href}
            src={r.src}
            key={r.src}
          />
        ))}
      </div>
    </>
  );
};

export default Responsive;
