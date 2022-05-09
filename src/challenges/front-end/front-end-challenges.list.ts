import { ChallengeStatus } from "../challenge-status.enum";
import { ChallengeModel } from "../challenge.model";

export const frontEndChallenges: ChallengeModel[] = [
  {
    title: "Button Component",
    src: "/challenges/front-end/button-component.png",
    description:
      "One of the best ways to learn front-end libraries is to create a reusable component. In this challenge, your task is to create a reusable button.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Input Component",
    src: "/challenges/front-end/input-component.png",
    description:
      "One of the best ways to learn front-end libraries is to create a reusable component. In this challenge, your task is to create a reusable input.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Windbnb",
    src: "/challenges/front-end/windbnb.png",
    description:
      "I love airbnb UI, it is so mordern and clean. In this challenge, you will work with a similar UI to airbnb - windbnb.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Todo app",
    src: "/challenges/front-end/todo-app.png",
    description:
      "Todo app is one of the common projects when it comes to practicing coding. This challenge is another todo list.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Random quote generator",
    src: "/challenges/front-end/quote-generator.png",
    description:
      "Famous quotes can be great source of motivation. This challenge is all about quotes.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Country quiz",
    src: "/challenges/front-end/country-quiz.png",
    description:
      "If you want to learn more about countries, this challenge is perfect for you.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Weather app",
    src: "/challenges/front-end/weather-challenge.png",
    description:
      "Weather app is another popular project for practicing coding. In this challenge, you will work an interesting UI for a weather app.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
];
