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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
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
  subTitle: "Passionate Full Stack Software Developer 🚀",
  skills: [
    emoji(
      "⚡Skilled in building Web applications with JavaScript, React.js, and other frameworks. "
    ),
    emoji("⚡Proficient in Python and C++ programming languages"),
    emoji(
      "⚡ Keenly interested in working on Salesforce solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-git"
      
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
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
      role: "Salesforce Intern",
      company: "IT NetworkZ",
      companylogo: require("./assets/images/networkzlogo.png"),
      date: "Jan 2024 – Feb 2024",
      desc: "",
      descBullets: [
        "Created Objects, fields, and Relationships.Implemented Various Profiles and Layouts",
        "Executed various rules, workflows, triggers, and controllers to align with specific business requirements",
        "Developed comprehensive reports, dynamic dashboards, and efficient processes to ensure continuous monitoring of data quality and integrity.",
        "Managed data loads, including setting up and overseeing security measures, user permissions, password resets, and break/fix instructions.",
      "Ensured sustained security through the implementation of sharing rules and security levels"
      
      ]
    },
    {
      role: "React Inter",
      company: "SoftCorner",
      companylogo: require("./assets/images/softcornerlogo.png"),
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
    
    },
    {
      role: "Front End Developer",
      company: "Bharat Intern",
      companylogo: require("./assets/images/bhaaratinternlogo.png"),
      date: "May  2023 – Sep 2023",
      desc: "",
      descBullets: [
"Web-Based Project Management Tool: Developed a comprehensive web-based tool using HTML, CSS, and JavaScript to streamline project planning, task assignment, and progress tracking. Implemented intuitive user interfaces and interactive features to enhance team collaboration and productivity.",
      " Online Meeting and Webinar Platform (Conferencing Website): Spearheaded the development of a robust online meeting and webinar platform using HTML, CSS, and JavaScript.Designed and implemented user-friendly interfaces, real-time chat functionalities, and interactive whiteboards to facilitate engaging online interactions."
      
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
