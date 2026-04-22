import { ScrollytellingStory } from '../ScrollytellingStory/ScrollytellingStory';

const stepData = [
  {
    heading: 'JONATHAN CHOI',
    paragraph: `Design engineer with a focus on building efficient, maintainable systems. 
      I optimize performance and craft clean interfaces that deliver intuitive user experiences.`,
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    caption: `I work across different development ecosystems, adapting to each project's needs. Recent projects include:`,
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
    paragraph: `A recipe management application built with Angular 20, TypeScript, and Firebase. Features secure authentication, real-time Firestore database, and advanced search functionality. Applies reactive forms, RxJS, and component architecture while maintaining a mobile-first design optimized for kitchen workflow efficiency.`,
    links: [
      { primary: true, label: "DEMO", href: 'https://pinchthis.com/demo' },
      { primary: false, label: "DOCUMENTATION", href: 'http://localhost:3000/docs/pinch' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'Mini UI Kit',
    paragraph: `A compact design system, showcasing UI components and development patterns. Built with React and Storybook for interactive exploration and documentation.`,
    links: [
      { primary: true, label: 'VIEW', href: '/mini-ui-kit' },
      { primary: false, label: 'FIGMA', href: 'https://www.figma.com/design/iUEUiDkx3jtnYPtJyTNjjE/Mini-Component-Library?node-id=490-189' },
      { primary: false, label: 'STORYBOOK', href: 'https://jisungchoi.com/storybook' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'Thank you!',
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  }
];

export const Home = () => {
  return <ScrollytellingStory storySteps={stepData} />;
};

export default Home;
