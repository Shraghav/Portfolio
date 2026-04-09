
const CONFIG = {
  github: {
    username: 'shraghav', 
  },
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, 
      header: 'Github Projects',
      automatic: {
        sortBy: 'stars', 
        limit: 8, 
        exclude: {
          forks: true, 
          projects: ['shraghav/MovieFinder-OMDB'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      }
    },
    external: {
      header: 'Projects',
      projects: [
        {
          title: 'QA Automation technical documentation for Liberty Home Guard',
          description: 
            'Designed an AI-driven QA automation framework to analyze 1,000 daily agent calls, effectively eliminating manual review bottlenecks. This project includes technical documentation on transcript analysis and sentiment extraction, alongside a standardized scoring system.',
          link:'https://www.libertyhomeguard.com/'
        },
        {
          title: 'Lead discovery with ICP for Zywave ',
          description:
            'Developed a high-performance FastAPI backend to manage Ideal Customer Profiles (ICPs). My core work was implementing efficient CRUD operations to ensure seamless data handling and low-latency API responses for lead discovery.',
          link:'https://www.zywave.com/'
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Harish Raghavan', description: '', imageURL: '' },
  social: {
    linkedin: 'harishraghavan',
    phone: '9342897214',
    email: 'harishragavan04@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1DkKl--OB0Dins-V2kbpPOVPHfzpaw2zF/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'FastAPI',
    'React Native',
    'React.js',
    'JavaScript',
    'Typescript',
    'PostgreSQL',
    'Docker',
    'Git',
    'Threading',
    'REST API',
    'SQL Alchemy',
  ],
  experiences: [
    {
      company: 'Avasoft, Chennai',
      position: 'Python Backend Developer',
      from: 'July 2025',
      to: 'December 2025',
      companyLink: 'https://www.avasoft.com/',
      description: "Engineered Gen AI solutions to automate the business processes, significantly reducing the time required for manual task completion.Architected FastAPI backend servers to manage CRUD operations and data flow tailored to various ICPs."
    },
    {
      company: 'Avasoft, Chennai',
      position: 'Mobile Application Developer',
      from: 'September 2024',
      to: 'June 2025',
      companyLink: 'https://www.avasoft.com/',
      description:"Utilized React Native and Expo to build high-performance UI components, resulting in a smooth and seamless user experience. Integrated third-party APIs including Google Auth, Firebase, Expo SDK and Native modules while documenting the entire process."
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Bannari Amman Institute of Technology, Tamil Nadu',
      degree: 'BTech, AI&DS',
      from: '2021',
      to: '2025',
    }
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'Wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'wireframe',
      'business',
    ],
  },

  enablePWA: true,
};

export default CONFIG;
