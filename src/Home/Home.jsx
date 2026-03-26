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
    heading: "PINCH",
    paragraph: `A recipe management application built with Angular 20, TypeScript, and Firebase. Features secure authentication, real-time Firestore database, and advanced search functionality. Applies reactive forms, RxJS, and component architecture while maintaining a mobile-first design optimized for kitchen workflow efficiency.`,
    links: [
      { primary: true, label: "DEMO", href: 'https://pinchthis.com/demo' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'Mini UI Kit',
    paragraph: `A small component library I designed and built to experiment with 
      combining my skill sets in frontend development and graphic design. Components were designed 
      in Figma and implemented in React, with Storybook used as a dev / documentation environment.`,
    links: [
      { primary: true, label: 'DEMO', href: '/mini-ui-kit' },
      { primary: false, label: 'FIGMA', href: 'https://www.figma.com/design/iUEUiDkx3jtnYPtJyTNjjE/Mini-Component-Library?node-id=490-189' },
      { primary: false, label: 'STORYBOOK', href: 'https://www.storybook.com/example' }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
];

export const Home = () => {
  return <ScrollytellingStory storySteps={stepData} />;
};

export default Home;
