import { ScrollytellingStory } from '../ScrollytellingStory/ScrollytellingStory';

const stepData = [
  {
    heading: 'JONATHAN CHOI',
    paragraph: `Software engineer who bridges design and engineering to build efficient, maintainable systems. 
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
      { primary: true, label: "DEMO", href: 'https://pinchthis.com/demo' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'Design System',
    paragraph: `A scalable design system with reusable components built for consistency across projects. Features buttons, inputs, toggles, and cards with documented usage patterns. Components are implemented in React with Storybook documentation and Figma design specifications.`,
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
