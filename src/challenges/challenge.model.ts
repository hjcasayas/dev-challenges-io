import { ChallengeStatus } from "./challenge-status.enum";

export interface ChallengeModel {
  status: ChallengeStatus;
  description: string;
  title: string;
  href: string;
  src: string;
}
