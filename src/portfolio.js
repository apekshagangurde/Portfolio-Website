/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Apeksha Gangurde",
  title: "Hi all, I'm Apeksha",
  subTitle: emoji(
    "A Full Stack Developer who doesn't just use AI — I build with it, ship with it, and push its limits every day. I turn wild ideas into real-world web & mobile apps, powered by code and supercharged by intelligence. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Co10jIUl5W1M3IbXRdLBgGTjPUvswT4X/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/apekshagangurde",
  linkedin: "https://www.linkedin.com/in/apeksha-gangurde-924b4a230/",
  gmail: " apekshagangurde08@gmail.com",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer — Building with AI, Shipping with Intelligence 🚀",
  skills: [
    emoji(
      "⚡ Building modern web apps with Svelte, SvelteKit & JavaScript"
    ),
    emoji("⚡ Proficient in Python, C++ and AI-powered development with LangChain"),
    emoji(
      "⚡ Writing rock-solid tests with Pytest & Vitest"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Git",
      imageSrc: "/icons/git.svg",
      docLink: "https://git-scm.com/doc"
    },
    {
      skillName: "HTML5",
      imageSrc: "/icons/html5.svg",
      docLink: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      skillName: "CSS3",
      imageSrc: "/icons/css3.svg",
      docLink: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      skillName: "Python",
      imageSrc: "/icons/python.svg",
      docLink: "https://docs.python.org/3/"
    },
    {
      skillName: "JavaScript",
      imageSrc: "/icons/javascript.svg",
      docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      skillName: "Svelte",
      imageSrc: "/icons/svelte.svg",
      docLink: "https://svelte.dev/docs"
    },
    {
      skillName: "SvelteKit",
      imageSrc: "/icons/sveltekit.svg",
      docLink: "https://kit.svelte.dev/docs"
    },
    {
      skillName: "Figma",
      imageSrc: "/icons/figma.svg",
      docLink: "https://help.figma.com/"
    },
    {
      skillName: "npm",
      imageSrc: "/icons/npm.svg",
      docLink: "https://docs.npmjs.com/"
    },
    {
      skillName: "SQL",
      imageSrc: "/icons/sql.svg",
      docLink: "https://dev.mysql.com/doc/"
    },
    {
      skillName: "Bootstrap",
      imageSrc: "/icons/bootstrap.svg",
      docLink: "https://getbootstrap.com/docs/"
    },
    {
      skillName: "Firebase",
      imageSrc: "/icons/firebase.svg",
      docLink: "https://firebase.google.com/docs"
    },
    {
      skillName: "Pytest",
      imageSrc: "/icons/pytest.svg",
      docLink: "https://docs.pytest.org/"
    },
    {
      skillName: "Vitest",
      imageSrc: "/icons/vitest.svg",
      docLink: "https://vitest.dev/guide/"
    },
    {
      skillName: "LangChain",
      imageSrc: "/icons/langchain.svg",
      docLink: "https://python.langchain.com/docs/"
    },
    {
      skillName: "TypeScript",
      imageSrc: "/icons/typescript.svg",
      docLink: "https://www.typescriptlang.org/docs/"
    },
    {
      skillName: "Looker Studio",
      imageSrc: "/icons/lookerstudio.svg",
      docLink: "https://support.google.com/looker-studio/"
    },
    {
      skillName: "Docker",
      imageSrc: "/icons/docker.svg",
      docLink: "https://docs.docker.com/"
    },
    {
      skillName: "Pydantic",
      imageSrc: "/icons/pydantic.svg",
      docLink: "https://docs.pydantic.dev/"
    },
    {
      skillName: "Playwright",
      imageSrc: "/icons/playwright.svg",
      docLink: "https://playwright.dev/docs/intro"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    
    {
      schoolName: "K.K.Wagh Institute of Engineering, Education And Research, Nashik",
      logo: require("./assets/images/kkwlogo.png"),
      subHeader: "Bachelor of Technology- Artificial Intelligence And Data Science",
      duration: "September 2021 - April 2025",
      desc: "CGPA:8.05/10 ",
      descBullets: ["Took courses about Software Engineering, Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Artificial Intelligence, Data Science, Artificial Neural Networks, Statistics,Web Technology"]
    },
    {
      schoolName: "K.R.A Arts Science and Commerce College, Deola",
      logo: require("./assets/images/kralogo.png"),
      subHeader: "HSC ",
      duration: "September 2017 - April 2019",
      desc: "(Percentage: 89.83",
      descBullets: [
        
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DSA",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    }
    
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Project Tech4Dev",
      companylogo: require("./assets/images/tech4devlogo.png"),
      companyUrl: "https://www.linkedin.com/company/project-tech4dev/",
      date: "June 2025 – Present",
      desc: "",
      descBullets: [
        "Contributed to the Sashakt Assessment Platform, designing fast and reliable REST APIs with FastAPI.",
        "Boosted quality and stability by writing Pytest test suites, managing smooth database migrations with Alembic, and improving test coverage.",
        "Built frontend components using Svelte and SvelteKit, integrating them with backend APIs to deliver smooth user experiences. Added Vitest-based frontend tests to catch UI issues during development.",
        "Collaborated with the team through pull requests and code reviews, and used Docker to streamline deployment.",
        "Created and managed views in BigQuery and developed interactive dashboards in Looker Studio for data visualization, performance tracking, and insight generation.",
        "Implemented role-based access control (RBAC) to ensure safe access for different users such as super admin, state admin, admins and candidates on the platform."
      ]
    },
    {
      role: "React Inter",
      company: "SoftCorner",
      companylogo: require("./assets/images/softcornerlogo.png"),
      companyUrl: "https://www.linkedin.com/company/soft-corner/",
      date: "Dec 2023 – Jan 2024",
      desc: "",
      descBullets: [ 
        "Leveraged React components to create a seamless and intuitive user experience.",
        "Built the backend for a form generator using Django and MongoDB, ensuring smooth operation and efficient data storage.",
"Created and tested easy-to-use APIs with Postman to connect the backend with the React frontend.",
"Worked closely with the frontend team to show data on the website, ensuring everything worked seamlessly.",
"Utilized Axios for efficient data fetching and communication between the frontend and backend.",
"Integrated Django Rest Framework to streamline API development and enhance backend functionality.",




      ]
    
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Hackthons",
  subtitle: "Highlighting my Top National-Level Hackathons",
  projects: [
    {
      image: require("./assets/images/kavachlogo.png"),
      projectName: "A Website To Monitor Ground Personnel",
      projectDesc: "As a key team member in a national-level hackathon, I played the role of a full-stack developer, Created a website tomonitor ground personnel, specifically police officers.",
      descBullets: [
        "As a key team member in a national-level hackathon, I played the role of a full-stack developer, Created a website to monitor ground personnel, specifically police officers.",
              " As a key team member in a national-level hackathon, I played the role of a full-stack developer, Created a website to  monitor ground personnel, specifically police officers."
              ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shahayaksurksha.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rajstan it day logo.png"),
      projectName: "website for women empowerment.",
      projectDesc: "Participated in the Rajasthan IT Day Hackathon, a 36-hour coding event.Worked collaboratively with a team to develop a website for women empowerment",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://saksham-stree-website.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI Tool workshop",
      subtitle:
        "Completed AI tool workshop, adept at crafting innovative solutions for complex problems.",
      image: require("./assets/images/be10xlogo.png"),
      imageAlt: "Be10x logo Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://storage.googleapis.com/be10x-bucket/certs/apekshagangurde08_gmail_com_20231017062839.pdf"
        },
        
      ]
    },
    {
      title: "React.js workshop",
      subtitle:
        "Equipped with React workshop completion, skilled in developing modern, responsive web applications.",
      image: require("./assets/images/techpathashala logo.jpg"),
      imageAlt: "React.js workshop Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },

    {
      title: "Visualizing IPL Teams Performance using Power BI",
      subtitle: "Proficient in leveraging Power BI to visualize IPL team performance data, with a certificate attesting to mastery in data visualization and analytics.",
      image: require("./assets/images/great learning logo.png"),
      imageAlt: "GreatLearning Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Inside the Nation-Level Kavach Hackathon: My Experience",
      description:
        "Navigating challenges, innovating solutions – my journey at the Nation-Level Kavach Hackathon. Discover how we fortified cybersecurity in the digital landscape, one hack at a time."
    },
    {
      url: "",
      title: "Rajasthan IT Day Hackathon: A Tech Expedition",
      description:
        "Dive into the heart of innovation at the Rajasthan IT Day Hackathon, where ideas transform into digital realities. Explore the journey of collaboration, creativity, and cutting-edge solutions in the vibrant landscape of Rajasthan."

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Unlocking DSA Proficiency",
  subtitle: emoji(
    "Delve into my journey of mastering Data Structures and Algorithms. Explore the secrets of efficient coding on my website"
  ),

  talks: [
    {
      title: "Visit my website to see how I tackle Data Structures ",
      //subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://auth.geeksforgeeks.org/user/apekshagaerh1/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
      
      event_url: "https://leetcode.com/apekshagangurde/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-9322915597",
  email_address: "apekshagangurde08@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  //display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
