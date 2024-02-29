import {
  ComponentSelectionWithSearchType,
  ProfileUserInformationType,
  ProfileDataCategoryType,
  ProfileDataForCV,
  ProfileJobLevelType,
  ProfileNavLinkItemsType,
} from "./type";

// COLOR CONSTANT
export const COLOR_PRIMARY = "#4f46e5";
export const COLOR_SECONDARY = "#121212";
export const TEXT_COLOR_NORMAL = "#4E4C4D";
export const TEXT_COLOR_BOLD = "#383536";
export const COLOR_DISABLED = "#e9e9e9";

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

export const HOMEPAGE_FEATURE_ARTICLES = [
  {
    title:
      'ITviec releases "IT Salary Report 2023-2024: Data-driven for better decision making"',
    description:
      "Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...",
    link: "itviec-it-salary-report-2023-2024-press-release",
    image:
      "https://itviec.com/blog/wp-content/uploads/2023/12/itviec-it-salary-report-2023-2024-mini-press-realease-en-vippro-950x500.png",
    isHighlight: true,
  },
  {
    title: "Spring là gì? Spring Framework là gì?",
    description:
      "Spring Framework giúp lập trình viên dễ dàng tạo các ứng dụng Java Enterprise (Java EE) và cung cấp mọi thứ bạn cần để sử dụng ngôn ngữ Java. Là mã nguồn mở, Spring có cộng đồng rộng lớn và năng động, phản hồi liên tục dựa trên nhiều trường hợp sử dụng thực tế. Điều này đã giúp Spring phát triển thành công và trở thành một nguồn kiến thức mà bất kỳ lập trình viên nào cũng cần hiểu rõ.",
    link: "spring-framework-la-gi",
    image:
      "https://itviec.com/blog/wp-content/uploads/2024/02/spring-framework-blog-thumbnail-vippro.jpg",

    isHighlight: false,
  },
  {
    title: "Bí quyết xây dựng quy trình tuyển dụng giúp tăng tỷ lệ thành công",
    description:
      "Việc xây dựng một quy trình tuyển dụng chỉ dựa vào nhu cầu tìm kiếm nhân tài của công ty mà không cân nhắc hành vi tìm kiếm và ứng tuyển của ứng viên IT thường sẽ xa rời thực tế và khó đạt được hiệu quả. Bài viết sau đây sẽ gợi ý cho những nhà tuyển dụng IT các bí quyết xây dựng quy trình tuyển dụng dựa trên chính hành vi tìm việc hiện nay của chuyên gia IT tại Việt Nam.",
    link: "bi-quyet-xay-dung-quy-trinh-tuyen-dung",
    image:
      "https://itviec.com/blog/wp-content/uploads/2024/01/quy-trinh-tuyen-dung-blog-vippro-1600x842.webp",
    isHighlight: false,
  },
  {
    title:
      "Những điều cần biết về jQuery – Thư viện Javascript hàng đầu thế giới",
    description:
      "jQuery là gì? Trong danh sách các công cụ và thư viện cho lập trình viên, jQuery nổi bật là một thư viện JavaScript mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong cộng đồng phát triển web. Với khả năng giảm độ phức tạp của mã nguồn, jQuery đã trở thành một công cụ hữu ích cho việc thao tác DOM, xử lý sự kiện, và tương tác Ajax một cách hiệu quả.",
    link: "jquery-la-gi",
    image:
      "https://itviec.com/blog/wp-content/uploads/2024/01/jquery-la-gi-blog-thumbnail-vippro.jpg",
    isHighlight: false,
  },
  {
    title:
      "Salesforce Developer là gì? Lộ trình sự nghiệp Salesforce Developer 2024",
    description:
      "Với nhu cầu tuyển dụng ngày càng tăng đối với vị trí Salesforce Developer, cơ hội phát triển tại vị trí Salesforce Developer là không giới hạn. Trong bài viết này, hãy cùng khám phá cơ hội nghề nghiệp hấp dẫn dành cho các nhà phát triển Salesforce, cũng như vai trò và trách nhiệm, những kỹ năng cần thiết, các chứng chỉ cần theo đuổi và roadmap để bạn có thể bắt đầu hành trình Salesforce thú vị vào năm 2024!.",
    link: "itviec-it-salary-report-2023-2024-press-release",
    image:
      "https://itviec.com/blog/wp-content/uploads/2024/01/salesforce-developer-la-gi-blog-vippro-950x500.png",
    isHighlight: false,
  },
];

// Profile.tsx
export const PROFILE_NAV_LINK_ITEMS: ProfileNavLinkItemsType = [
  { to: "/profile", label: "Profile" },
  { to: "/profile/manage-cv", label: "Manage CV" },
  { to: "/profile/job-preferences", label: "Job Preferences" },
];

export const PROFILE_UPDATE_PROFILE_CTA: string[] = [
  "Add About Me",
  "Add Education",
  "Add Contact Information",
  "Add Work Experience",
  "Add Skills",
  "Add Certificates",
  "Add Awards",
  "Add Personal Projects",
];

export const PROFILE_CONTACT_INFORMATION: ProfileUserInformationType = {
  profileImage: "src/assets/profile-avatar.jpg",
  name: "Le Phuoc Thanh",
  title: "Front end developer intern",
  email: "thanhlp18@gmail.com",
  phone: "0795442122",
  birthday: "18/08/2002",
  gender: "Male",
  location: "TP Hồ Chí Minh",
  website: "https://fontawesome.com/icons/globe?f=classic&s=solid",
};

export const PROFILE_DATA_CATEGORY: ProfileDataCategoryType[] = [
  {
    title: "About Me",
    id: "about-me",
    description: "Introduce your strengths and years of experience",
    icon: "../src/assets/profile_about_me.svg",
  },
  {
    title: "Education",
    id: "education",

    description: "Share your background education",
    icon: "../src/assets/profile_education.svg",
  },
  {
    title: "Work Experience",
    id: "work-experience",

    description: "Highlight detailed information about your job history",
    icon: "../src/assets/profile_work_experience.svg",
  },
  {
    title: "Skills",
    id: "skills",
    description: "Showcase your skills and proficiencies",
    icon: "../src/assets/profile_skills.svg",
  },
  {
    title: "Personal Project",
    id: "personal-project",
    description: "Showcase your skills and proficiencies",
    icon: "../src/assets/profile_personal_project.svg",
  },
  {
    title: "Certificates",
    id: "certificates",
    description: "Provides evidence of your specific expertise and skills",
    icon: "../src/assets/profile_certificates.svg",
  },
  {
    title: "Awards",
    id: "awards",
    description: "Highlight your awards or recognitions",
    icon: "../src/assets/profile_awards.svg",
  },
  {
    title: "Cover Letter",
    id: "cover-letter",
    description: "Introduce yourself and why you'd make a great hire",
    icon: "../src/assets/profile_cover_letter.svg",
  },
];

export const PROFILE_JOB_PREFERENCES_SKILLS: ComponentSelectionWithSearchType[] =
  [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "Java" },
    { id: 4, name: "C++" },
    { id: 5, name: "C#" },
    { id: 6, name: "Ruby" },
    { id: 7, name: "Go" },
    { id: 8, name: "Swift" },
    { id: 9, name: "TypeScript" },
    { id: 10, name: "Kotlin" },
    { id: 11, name: "Rust" },
    { id: 12, name: "PHP" },
    { id: 13, name: "HTML" },
    { id: 14, name: "CSS" },
  ];

export const PROFILE_JOB_LEVELS: ProfileJobLevelType[] = [
  {
    id: "job-level-fresher",
    text: "Fresher (0 - 10 months of experience)",
  },
  {
    id: "job-level-junior",
    text: "Junior (10 - 36 months of experience)",
  },
  {
    id: "job-level-senior",
    text: "Senior (37 - 60 months of experience)",
  },
  {
    id: "job-level-manager",
    text: "Manager (> 60 months of experience)",
  },
];

export const PROFILE_CURRENT_SALARY_CURRENCY: string[] = ["VND", "USD", "EUR"];

export const PROFILE_WORKING_TYPE: string[] = ["At office", "Remote", "Hybrid"];
export const PROFILE_COMPANY_TYPE: string[] = [
  "IT Product",
  "IT Outsourcing",
  "Headhunt",
  "It Service and Consulting",
  "Non-IT",
];
export const PROFILE_COMPANY_SIZE: string[] = [
  "1-50",
  "51-150",
  "151-300",
  "301-500",
  "501-1000",
  "1000+",
];

export const PROFILE_EXAMPLE_DATA_FOR_CV: ProfileDataForCV = {
  aboutMe:
    "I am seeking an opportunity to contribute my values, curiosity, and creativity while pursuing personal and professional growth",

  education: [
    {
      degree: "Computer Network and Data Communication",
      institution: "Can Tho University",
      duration: {
        start: "08/2020",
        end: "NOW",
      },
      additionalDetail: "Learn about front end with html, css, javascript.",
    },
  ],
  workExperience: [
    {
      position: "Technical staff",
      company: "Fabulous Mekong Eco Tours - FME Travel",
      duration: {
        start: "05/2022",
        end: "NOW",
      },
      responsibilities:
        '<ul class="list-disc list-inside "><li>Utilize no-code platforms (e.g., Airtable) for cost-effective data management and improved staff accessibility.</li><li>Resolve technical issues and implement new features to enhance productivity.</li><li>Manage Google Workspace, shared drive storage, and ICT policies for seamless operations.</li><li>Create comprehensive documentation for all company software.</li></ul>',
    },
  ],
  skills: {
    excellent: ["react js", "node js", "html", "css", "javascript"],
    intermediate: [
      "docker",
      "kubernetes",
      "aws",
      "gcp",
      "azure",
      "git",
      "github",
    ],
    beginner: ["python"],
  },
  personalProjects: [
    {
      title: "Social management using node js and react js",
      duration: {
        start: "09/2023",
        end: "NOW",
      },
      description:
        '<ul class="list-disc list-inside "><li>Built a simple learning project to display real-time weather information</li><li> Technologies used: React JS, Material UI, and RESTful APIs.</li></ul>',
    },
    {
      title: "VietHope Student Development Program Application Tool",
      duration: {
        start: "05/2022",
        end: "07/2022",
      },
      description:
        '<ul class="list-disc list-inside "><li><b>Description:</b> Created tool to automate merging scholar applications from Google Sheets into user-friendly HTML, streamlining review process for judges, saving time. (Github respository: https://github.com/thanhlp18/vsdp-application-tool)</li><li><b>Technologies used:</b> HTML, CSS, and Python (Pandas, Googleapiclient, and Google Auth) for data extraction from Google Sheets (csv file type).</li></ul>',
    },
  ],
  certificates: [
    {
      title: "Programming with JavaScript",
      provider: "Coursera",
      issueDate: "08/2023",
      description:
        "This course teaches the fundamentals of programming using JavaScript. It covers topics such as variables, data types, control flow, functions, and object-oriented programming. By the end of the course, students will have a solid understanding of JavaScript and be able to build interactive web applications.",
      certificateUrl: "https://fontawesome.com/search?q=delete&o=r&m=free",
    },
    {
      title: "Programming with JavaScript",
      provider: "Coursera",
      issueDate: "08/2023",
      description:
        "<b>This course teaches the fundamentals of programming using JavaScript. It covers topics such as variables, data types, control flow, functions, and object-oriented programming. By the end of the course, students will have a solid understanding of JavaScript and be able to build interactive web applications..</b>",
      certificateUrl: "https://fontawesome.com/search?q=delete&o=r&m=free",
    },
  ],
  awards: [
    {
      title: "University Scholarship Program",
      provider: "VietHope",
      issueDate: "12/2020",
      description:
        "The goal of University Scholarship program is to lift the heavy financial burden as well as build a platform to prepare first-year university students for their success in the future. The program provides scholarships of $300, sufficient to cover half of tuition and educational supplies for the first year for students. And all students received USP awards are also qualified for other community and leadership programs such as Youth Development Program, Youth Workshop Program, and Alumni Development Program that provide them soft-skill training for community service and career development.",
    },
  ],
};
