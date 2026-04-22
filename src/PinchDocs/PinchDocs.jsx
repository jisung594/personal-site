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
    paragraph: `Shows how components communicate through services and observables, with clear separation of concerns between presentation and business logic layers.`,
    images: [
      {
        src: '/images/docs/component-architecture.png',
        alt: 'Component Architecture Diagram',
        caption: 'Data flow and system structure.'
      }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'State Management',
    paragraph: `Illustrates the reactive form lifecycle and state transitions when users create, edit, or validate recipe data through the Angular forms API.`,
    images: [
      {
        src: '/images/docs/recipe-editor-state-transitions.png',
        alt: 'Recipe Editor State Transitions',
        caption: 'State management flow for recipe editing functionality.'
      }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  }
];

export const PinchDocs = () => {
  return <ScrollytellingStory storySteps={stepData} />;
};

export default PinchDocs;
