import { ScrollytellingStory } from '../ScrollytellingStory/ScrollytellingStory';

const stepData = [
  {
    heading: 'JONATHAN CHOI',
    paragraph: `Design-forward engineer with a focus on building efficient, maintainable systems. 
      I optimize performance and craft clean interfaces that deliver intuitive user experiences.`,
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    caption: `Following a corporate restructuring that eliminated my previous position, I dedicated this transition period to focus on 
      technical growth. Since then, I've been building and maintaining a recipe management application to further apply core 
      software engineering principles, such as component architecture and automated design token pipelines, in my personal work.`,
      paragraph: '',
      background: '#f1f1f1',
      darkmode: false,
      imageUrl: null,
  },
  {
    logo: {
      src: '/images/pinch-logo.png',
      alt: "Pinch Recipe Management App",
      variant: "above-heading"
    },
    paragraph: `A serverless recipe management application built with Angular, TypeScript, and Tailwind CSS, deployed globally 
      via Cloudflare Assets. Features a real-time Firestore database, secure user authentication, and advanced search functionality. 
      Leverages client-side routing optimized at the network edge to deliver instant page loads, while utilizing reactive forms, RxJS, 
      and a mobile-first design tailored for kitchen workflow efficiency.`,
    links: [
      { primary: true, label: "DEMO", href: 'https://pinchthis.com/login' },
      { primary: true, label: "DOCS", href: '/docs/pinch' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'DESIGN SYSTEM',
    paragraph: `A design system with a live Figma → Style Dictionary → CSS token pipeline. Documented in Storybook across states, variants, and edge cases.`,
    links: [
      { primary: false, label: 'VIEW', href: '/mini-ui-kit' },
      { primary: true, label: 'FIGMA', href: 'https://www.figma.com/design/iUEUiDkx3jtnYPtJyTNjjE/Mini-Component-Library?node-id=0-1&t=vcvNskkTNl2qZAxe-1' },
      { primary: true, label: 'STORYBOOK', href: 'https://jisungchoi.com/storybook' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    caption: 'Thank you !',
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  }
];

export const Home = () => {
  return <ScrollytellingStory storySteps={stepData} />;
};

export default Home;
