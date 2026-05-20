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
