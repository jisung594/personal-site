import { ScrollytellingStory } from '../ScrollytellingStory/ScrollytellingStory';

const stepData = [
  {
    heading: 'PINCH Documentation',
    paragraph: `Technical architecture diagrams showcasing system design and state management patterns for the Pinch recipe management application.`,
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'Component Architecture',
    paragraph: `Data flow and system structure for the Angular 20 application.`,
    images: [
      {
        src: '/images/docs/component-architecture.png',
        alt: 'Component Architecture Diagram',
        caption: 'Component Architecture - Data flow and system structure'
      }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'State Management',
    paragraph: `Recipe editing functionality, demonstrating reactive forms and data binding patterns.`,
    images: [
      {
        src: '/images/docs/recipe-editor-state-transitions.png',
        alt: 'Recipe Editor State Transitions',
        caption: 'State Management - State management flow for recipe editing functionality'
      }
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

export const PinchDocs = () => {
  return <ScrollytellingStory storySteps={stepData} />;
};

export default PinchDocs;
