// COLOR CONSTANT
export const COLOR_PRIMARY = "#4f46e5";
export const COLOR_SECONDARY = "#121212";
export const COLOR_ACCENT = "#0000FF";

// ------------------------------------------
// TEXT CONSTANT
// Login.tsx
export const LOGIN_PAGE_TEXT_USP = [
  "View salary to help you negotiate your offer or pay rise",
  "Find out about benefits, interview, company culture via reviews",
  "Easy apply with only 1 click",
  "Manage your own profile & privacy",
];

// HomePage.tsx
export const HOMEPAGE_JOBS_CITIES = [
  "Ho Chi Minh",
  "Ha Noi",
  "Da Nang",
  "Can Tho",
  "Others",
];

export const HOMEPAGE_SKILLS_TRENDING = ["Java", "React", "NodeJS", "Python"];

export const HOMEPAGE_USPS = [
  {
    title: "User Profile",
    description:
      "Create an excellent profile with a well-structured format and specific guide",
    cta: "Update profile",
    icon: "../src/assets/usp-user-profile-image.svg",
  },
  {
    title: "CV Templates",
    description:
      "Generate professional IT CV with new templates - recommended by recruiters",
    cta: "View templates",
    icon: "../src/assets/usp-cv-templates-image.svg",
  },
  {
    title: "Blog",
    description:
      "Updates about salary, benefits, working policies, and careers in IT",
    cta: "Explore blog",
    icon: "../src/assets/usp-blog-image.svg",
  },
];

export const HOMEPAGE_TOP_EMPLOYERS = [
  {
    title: "LG Electronics Development Vietnam (LGEDV)",
    skills: [...HOMEPAGE_SKILLS_TRENDING],
    location: "Ha Noi - Ho Chi Minh city - Others",
    jobsCount: 6,
  },
  {
    title: "TOP IT VIET",
    skills: [...HOMEPAGE_SKILLS_TRENDING],
    location: "Others",
  },
];
