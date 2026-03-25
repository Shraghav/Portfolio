// gitprofile.config.ts

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
          forks: false, 
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      }
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'QA Automation technical documentation for Liberty Home Guard',
          description: 
            'Designed an AI-driven QA automation framework to analyze 1,000 daily agent calls, effectively eliminating manual review bottlenecks. This project includes technical documentation on transcript analysis and sentiment extraction, alongside a standardized scoring system.'
        },
        {
          title: 'Lead discovery with ICP ',
          description:
            'Developed a high-performance FastAPI backend to manage Ideal Customer Profiles (ICPs). The core focus was implementing efficient CRUD operations to ensure seamless data handling and low-latency API responses for lead discovery.',
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
    'JavaScript',
    'Typescript',
    'React.js',
    'Node.js',
    'PostgreSQL'
    'FastAPI',
  ],
  experiences: [
    {
      company: 'Avasoft',
      position: 'Python Backend Developer',
      from: 'July 2025',
      to: 'December 2025',
      companyLink: 'https://www.avasoft.com/',
    },
    {
      company: 'Avasoft',
      position: 'Mobile Application Developer',
      from: 'September 2024',
      to: 'June 2025',
      companyLink: 'https://www.avasoft.com/',
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
      institution: 'Bannari Amman Institute of Technology',
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
    defaultTheme: 'lofi',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  enablePWA: true,
};

export default CONFIG;
