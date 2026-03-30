import React, { useState, useEffect, useRef } from 'react';
import styles from './MiniUiKit.module.css';
import { Button } from '../stories/Button';
import { MyInput } from '../stories/MyInput/MyInput.jsx';
import { MyToggle } from '../stories/MyToggle/MyToggle.jsx';
import { MyCombobox } from '../stories/MyCombobox/MyCombobox.jsx';
import { MyCard } from '../stories/MyCard/MyCard.jsx';

// The main component to showcase all UI elements with scrollytelling effects
export const MiniUiKit = ({ ...props }) => {
  // A simple mock function to demonstrate button click functionality
  const handleButtonClick = (buttonLabel) => {
    console.log(`Clicked on: ${buttonLabel}`);
  };

  // State to track the visibility of each section for transitions
  const [sectionVisibility, setSectionVisibility] = useState({
    buttons: false,
    inputs: false,
    toggles: false,
    combobox: false,
    cards: false,
  });

  // Create refs for each section we want to observe
  const sectionRefs = {
    buttons: useRef(null),
    inputs: useRef(null),
    toggles: useRef(null),
    combobox: useRef(null),
    cards: useRef(null),
  };

  // Set up the Intersection Observer to handle the fade-in effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check which section is intersecting and update its visibility state
          const sectionName = entry.target.dataset.section;
          if (entry.isIntersecting) {
            setSectionVisibility((prev) => ({
              ...prev,
              [sectionName]: true,
            }));
            // Optionally, stop observing the element once it has animated
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        // The threshold determines when the callback is fired. 0.1 means 10% of the element is visible.
        threshold: 0.1,
      }
    );

    // Start observing each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  // Utility function to get the correct CSS class based on visibility
  const getSectionClass = (sectionName) => {
    return `${styles.section} ${sectionVisibility[sectionName] ? styles.visible : ''}`;
  };

  return (
    <div className={styles.MiniUiKit}>
      {/* Container for the UI Kit. Each section now has a ref and a dynamic class for the transition. */}

      <div ref={sectionRefs.buttons} data-section="buttons" className={getSectionClass('buttons')}>
        <h2 className={styles.sectionTitle}>Buttons</h2>
        <div className={styles.buttonsContainer}>
          <Button href="#" clean onClick={() => handleButtonClick('CANCEL')}>CANCEL</Button>
          <Button primary href="#" clean onClick={() => handleButtonClick('PUBLISH')}>PUBLISH</Button>
        </div>
      </div>

      <div ref={sectionRefs.inputs} data-section="inputs" className={getSectionClass('inputs')}>
        <h2 className={styles.sectionTitle}>Input</h2>
        <div className={styles.inputsContainer}>
          <MyInput placeholder={'yourname@example.com'} label={'EMAIL'} />
          <MyInput placeholder={'********'} label={'PASSWORD'} type={'password'} />
        </div>
      </div>

      <div ref={sectionRefs.toggles} data-section="toggles" className={getSectionClass('toggles')}>
        <h2 className={styles.sectionTitle}>Toggle</h2>
        <div className={styles.togglesContainer}>
          <MyToggle initialState={false} label={'TOGGLE'} />
          {/* <MyToggle initialState={true} label={'TOGGLE'} /> */}
        </div>
      </div>

      <div ref={sectionRefs.combobox} data-section="combobox" className={getSectionClass('combobox')}>
        <h2 className={styles.sectionTitle}>Combobox</h2>
        <div className={styles.comboboxContainer}>
          <MyCombobox
            label={'T-SHIRT SIZE'}
            placeholder={'Select an option'}
            options={[
              { label: 'X-Small', value: 'value1' },
              { label: 'Small', value: 'value2' },
              { label: 'Medium', value: 'value3' },
              { label: 'Large', value: 'value4' },
              { label: 'X-Large', value: 'value5' },
            ]}
            helpText={'Not sure? See our size chart.'}
          />
        </div>
      </div>

      <div ref={sectionRefs.cards} data-section="cards" className={getSectionClass('cards')}>
        <h2 className={styles.sectionTitle}>Cards</h2>
        <div className={styles.cardsContainer}>
          {/* Card with an image */}
          <MyCard
            title={'Jonathan Choi'}
            secondaryText={'Web Developer'}
            bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida vestibulum ante vel pulvinar.'}
            imageUrl={`${process.env.PUBLIC_URL}/images/jona.jpeg`}
            imageAlt={'Guy holding double thumbs up by Lake Michigan'}
            ctaButtons={[
              { primary: false, label: 'CTA #1', onClick: () => handleButtonClick('Card CTA 1') },
              { primary: false, label: 'CTA #2', onClick: () => handleButtonClick('Card CTA 2') },
            ]}
          />
          {/* Card without an image */}
          <MyCard
            title={'Card Title w/o image'}
            secondaryText={'Secondary Text'}
            bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida vestibulum ante vel pulvinar.'}
            imageUrl={''}
            imageAlt={'No image provided'}
            ctaButtons={[
              { primary: false, label: 'CTA #1', onClick: () => handleButtonClick('Card CTA 1') },
              { primary: false, label: 'CTA #2', onClick: () => handleButtonClick('Card CTA 2') },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniUiKit;
