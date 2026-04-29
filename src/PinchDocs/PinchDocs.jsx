import { ScrollytellingStory } from '../ScrollytellingStory/ScrollytellingStory';

const stepData = [
  {
    heading: 'DOCUMENTATION (Pinch)',
    paragraph: `Technical architecture diagrams showcasing system design and state management patterns for the Pinch recipe management application.`,
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'FEATURE: Theme Selector (WIP)',
    paragraph: `Illustrates the theme selection flow for a signed-in user. The Actor opens the ThemePaletteModal and selects a color, and HeaderComponent delegates the action to UIFacade. ThemeService immediately applies the selection as a CSS variable for preview, then UserFacade persists the chosen color to the user's Firestore profile. The Actor receives confirmation once the save is complete.`,
    images: [
      {
        src: '/images/docs/theme-selector-sequence.png',
        alt: 'Theme selector sequence diagram (UI → facade → services → Firestore)',
        caption: 'Preview, apply, persist, and error handling for the theme selector.'
      }
    ],
    background: '#f1f1f1',
    darkmode: false,
    imageUrl: null,
  },
  {
    heading: 'COMPONENT ARCHITECTURE',
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
    heading: 'STATE MANAGEMENT',
    paragraph: `Walks through the reactive form lifecycle and state transitions when users create, edit, or validate recipe data through the Angular forms API.`,
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
