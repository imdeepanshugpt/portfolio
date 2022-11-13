/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deepanshu's Portfolio",
  description:
    "Experienced, innovative software engineer with around 4 years of experience creating and deploying new software solutions to boost business productivity. Extensive knowledge of the software development life cycle, from requirements through development to delivery. Known as a hands-on and capable leader who thrives at organizing cross-functional teams in a fast-paced, deadline-driven atmosphere to ensure project completion on time and under budget.",
  og: {
    title: "Deepanshu Gupta Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Deepanshu Gupta",
  logo_name: "DeepanshuGupta",
  nickname: "Deepanshu",
  subTitle:
    "Experienced, innovative software engineer with around 4 years of experience creating and deploying new software solutions to boost business productivity. Extensive knowledge of the software development life cycle, from requirements through development to delivery. Known as a hands-on and capable leader who thrives at organizing cross-functional teams in a fast-paced, deadline-driven atmosphere to ensure project completion on time and under budget.",
  resumeLink:
    "https://drive.google.com/file/d/1OojeEOl04ik4qBiQI-KLnspSseO57V5l/view?usp=sharing",
  portfolio_repository: "https://github.com/imdeepanshugpt/deepanshu-portfolio",
  githubProfile: "https://github.com/imdeepanshugpt",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/imdeepanshugpt",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/imdeepanshugpt/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:imdeepanshugpt@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/imdeepanshugpt",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/imdeepanshugpt",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/imdeepanshugpt",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular, React-Redux",
        "⚡ Developing Web applications using express, loopback, nestjs, angular, react, javascript, java and springboot.",
        "⚡ Deployed application on AWS and GCP cloud and worked as cloud developer.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.",
        "⚡ Worked on cloud functions/lambda, Kubernetes, Data Migration Jobs, Big Query, Contact Center Applications.",
        "⚡ Setting up jobs from K8s to Server or vice-versa on GCP and AWS.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/deepprogm",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jaipur Engineering College and Research Center",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "jecrc_logo.png",
      alt_name: "JECRC",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I have done courses on Data Analytics, Big Data, Cloud Technologies and Full Stack Development.",
      ],
      website_link: "https://jecrcfoundation.com",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RSxxm8BSlkqhd2Ijza-qAya_SC-SY2ur/view?usp=sharing",
      alt_name: "Google Cloud",
      color_code: "#0C9D5899",
    },
    {
      title: "Architecting with Google Kubernetes Engine",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1p10l-vXu5QNHSyvtF4fzZknf_HuzICFE/view?usp=sharing",
      alt_name: "google_cloud",
      color_code: "#0C9D5899",
    },
    {
      title: "A Leadership Development Program",
      subtitle: "- MTX Group",
      logo_path: "mtx-group_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Q5dugDY0eQ9gFzZm6JVtk8YWvOP8Zw90/view?usp=sharing",
      alt_name: "MTX",
      color_code: "#0C9D5899",
    },
    {
      title: "Server Side Development with Nodejs, Express and MongoDB",
      subtitle: "- The Hong Kong University of Science and Technology",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1dYshqoRGMM5IM3i7nGJsNrN6S_k6RzUT/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "DOMO Professional Service Certification",
      subtitle: "- DOMO",
      logo_path: "domo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1JF7aim4kFOyqBSEiX_dJTQhOlxCpRCsi/view?usp=sharing",
      alt_name: "DOMO",
      color_code: "#1F70C199",
    },
    {
      title: "DOMO Technical Certification",
      subtitle: "- DOMO",
      logo_path: "domo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1nraM1zQD4BipLie9bz9zndKC8G4X7s-X/view?usp=sharing",
      alt_name: "DOMO",
      color_code: "#1F70C199",
    },
    {
      title: "Associate Cloud Engineer",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qjp0AAOzwEdSi6Crr4bQHgO7zXFt8soC/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Professional Cloud Architect",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1FPjO7UbaIjwIyn6HKFKa2-zn8XVajoFm/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many MNCs and startups as full stack developer, dev lead and tech lead. Known as a hands-on and capable leader who thrives at organizing cross-functional teams in a fast-paced, deadline-driven atmosphere to ensure project completion on time and under budget.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Software Development Engineer",
          company: "mavQ",
          company_url: "https://mavq.com/",
          logo_path: "Logo_mavq.png",
          duration: "June 2022 - PRESENT",
          location: "Jaipur, Rajasthan",
          description:
            "I am working on healthcare products. The projects involve automation for process improvements and for significantly enhancing the investigation / tracing of patients .Create a instance of customer experience cloud product and customized it as per client needs. Developed a feature to track send and receive emails. Worked on contact/case management application where we can create task and tickets based on person calls to contact center with roles of agent, supervisor and having functionality to chat with each other..",
          color: "#0879bf",
        },
        {
          title: "Senior Consultant - Full Stack",
          company: "MTX Group Inc",
          company_url: "https://www.mtxb2b.com/s/",
          logo_path: "mtx-group_logo.png",
          duration: "July 2020 - June 2022",
          location: "Jaipur, Rajasthan",
          description:
            "I have Developed public portal, case investigation and contact monitoring web application to track, monitor, follow up Covid-19 Contacts/Patients. Integrated customer system and covid test results bulk upload of data to the application backend server. Developed Web Application to validate government official documents and extract information via document AI models and used them to populate data. Leading the team of 10 developers, guiding them in the development & usage of technologies and successfully delivered 3 release of covid project.",
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "Mindtree Limited.",
          company_url: "https://www.mindtree.com/",
          logo_path: "mindtree-logo.png",
          duration: "June 2018 - July 2020",
          location: "Bengaluru, Karnataka",
          description:
            "Worked on the Complex Exchange module of Mutual Fund Investment Website.Completed multiple stories on this module and successfully delivered till production. Completed 80 percent of unit testing on Angular App. Awarded by many A Team SpotOn’s for appreciation by project manager, senior consultant, Architect and Program Director.Developed user stories and created business analytics and data visualization on domo and ReactJs.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Freelancing",
      experiences: [
        {
          title: "React Developer",
          company: "Invent Health.",
          company_url: "https://www.inventhealth.com/",
          logo_path: "invent_health_logo.png",
          duration: "3 months",
          location: "Remote",
          description:
            "I have worked on their initial step up of base product in reactjs. I have designed base repository of react and integrated their service to data visualization charts. Create their login and register functionality using amazon cognito.",
          color: "#ee3c26",
        },
        {
          title: "Mock Interviewer",
          company: "Newton School",
          company_url: "https://www.newtonschool.co/",
          logo_path: "newton-school-logo.png",
          duration: "6 months",
          location: "Remote",
          description:
            "I have been interviewing students on MERN stack and javascript and guiding them to learn and upgrading themselves.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create enterprise projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic-circle.png",
    description:
      "You can ask me out for coffee at any moment. On the majority of social media platforms, I am available. You can send me a message, and I'll respond to you there.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Sometimes I write tech blogs....",
    link: "https://medium.com/@imdeepanshugpt",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "127.0.0.1",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 XXXXXXXXXX",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
