import apiIcon from "/src/assets/images/icon-api.svg";
import onboardingIcon from "/src/assets/images/icon-onboarding.svg";
import budgetingIcon from "/src/assets/images/icon-budgeting.svg";
import onlineIcon from "/src/assets/images/icon-online.svg";

export const reasons = [
  {
    name: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    src: onlineIcon,
  },
  {
    name: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    src: budgetingIcon,
  },
  {
    name: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    src: onboardingIcon,
  },
  {
    name: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    src: apiIcon,
  },
];
