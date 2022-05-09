import { ChallengeStatus } from "../challenge-status.enum";
import { ChallengeModel } from "../challenge.model";

export const fullStackChallenges: ChallengeModel[] = [
  {
    title: "Image Uploader",
    src: "/challenges/full-stack/image-uploader.png",
    description:
      "In this challenge, you will create a simple but useful application - Image Uploader. This challenge will be foundation for many other full-stack challenges.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "My Unsplash",
    src: "/challenges/full-stack/my-unsplash.png",
    description:
      "This the first challenge in the full stack path. You will create a basic API and create Unsplash-inspired design.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "CatWiki",
    src: "/challenges/full-stack/cat-wiki.png",
    description:
      "Are you a cat lover? You want to know more about cat breeds and checkout an amazing collection of cat photos, this is the challenge for you.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Authentication App",
    src: "/challenges/full-stack/authentication-app.png",
    description:
      "In this challenge, you will get yourself familiar with authentication and handling user data. This will be a foundation for the next challenges.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Shoppingify",
    src: "/challenges/full-stack/shoppingify.png",
    description:
      "The first challenge with horizontal layout. This challenge your styling skills, as well as your problem-solving skills.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Chat Group",
    src: "/challenges/full-stack/chat-group.png",
    description:
      "Everyone sends and receive texts everyday. In this challenge, you will create a chat app. It will be a challenging but fun at the same time.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Tweeter - Twitter Clone",
    src: "/challenges/full-stack/tweeter-twitter-clone.png",
    description:
      "Recreating Twitter, the task sounds intimidating. But trust me, you will learn and have a lot of fun doing this. This challenge is very simple version of Twitter, it will test your skill both front-end and back-end at a high level",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
  {
    title: "Thullo - Trello Clone",
    src: "/challenges/full-stack/thullo-trello-clone.png",
    description:
      "This the last and the most challenging challenge in the stack path. You will take what you learned from previous challenges to apply to this one.",
    status: ChallengeStatus.ToDo,
    href: process.env.NEXT_PUBLIC_NOT_FOUND_BASE_URL || "",
  },
];
