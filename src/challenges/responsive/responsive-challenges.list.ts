import { ChallengeStatus } from "../challenge-status.enum";
import { ChallengeModel } from "../challenge.model";

export const responsiveChallenges: ChallengeModel[] = [
  {
    title: "404 Not Found",
    src: "/challenges/responsive/404-not-found.png",
    description:
      "This challenge is suitable for you if you just started with coding. The challenge will test your basic CSS and HTML skills.",
    status: ChallengeStatus.Done,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "My Team Page",
    src: "/challenges/responsive/my-team-page.png",
    description:
      "This challenge will test your basic CSS skills and get it to next level. You will work with basic HTML elements to make a single but yet elegant team page.",
    status: ChallengeStatus.ToDo,
    href: "",
  },
  {
    title: "Interior Consultant",
    src: "/challenges/responsive/interior-consultant.png",
    description:
      "This challenge will test your basic CSS skills and get it to next level. You will work with basic HTML elements to make a single but yet elegant team page.",
    status: ChallengeStatus.ToDo,
    href: "",
  },
  {
    title: "Recipe Page",
    src: "/challenges/responsive/recipe-page.png",
    description:
      "Everyone loves food, especially cheese cake. In this challenge, you will work with a recipe of your choice or given one",
    status: ChallengeStatus.ToDo,
    href: "",
  },
  {
    title: "My Gallery",
    src: "/challenges/responsive/my-gallery.png",
    description:
      "Inspired by instagram, in this challenge you will work with a similar design to instagram profile page.",
    status: ChallengeStatus.ToDo,
    href: "",
  },
  {
    title: "Checkout Page",
    src: "/challenges/responsive/checkout-page.png",
    description:
      "In this challenge, you will work with the form in a modern and minimal design. The challenge will bring your HTML and CSS to a new level",
    status: ChallengeStatus.ToDo,
    href: "",
  },
  {
    title: "Edie Homepage",
    src: "/challenges/responsive/edie-homepage.png",
    description:
      "Homepage is a popular task that a developer has to do. In this challenge, you will work with Edie - a small team providing web service.",
    status: ChallengeStatus.ToDo,
    href: "",
  },
  {
    title: "Portfolio",
    src: "/challenges/responsive/portfolio.png",
    description:
      "A portfolio is the most important certificate when applying to a job. In this challenge, you will create a beautiful portfolio page.",
    status: ChallengeStatus.ToDo,
    href: "",
  },
];
