import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { LiquidMorphText } from '../LiquidMorphText/LiquidMorphText';
import styles from './ScrollytellingStory.module.css';

export const ScrollytellingStory = ({ storySteps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <div className={styles.storyContainer}>
      {/* Sidebar with dot navigation */}
      <div className={styles.storySidebar}>
        {storySteps.map((_, i) => (
          <div
            key={i}
            className={`${styles.scrollamaDot} ${currentStep === i ? styles.activeDot : ''}`}
          />
        ))}
      </div>

      {/* Holds fixed background images. */}
      <div className={styles.imageBackgroundContainer}>
        {storySteps.map((data, i) => (
          <img
            key={i}
            src={data.imageUrl || ''} // Use an empty string if no image URL is provided
            alt={data.title || ''}
            className={`${styles.scrollytellingImageFixed} ${currentStep === i && data.imageUrl ? styles.scrollytellingImageActive : ''}`}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/d7c4b0/000000?text=Error"; }}
          />
        ))}
      </div>

      {/* Main Scrollama wrapper for text content */}
      <div className={styles.storyTextSections}>
        <Scrollama
          onStepEnter={onStepEnter}
          offset={0.5} // Triggers when step is at 50% of the viewport height
        >
          {storySteps.map((data, i) => (
            <Step key={i} data={i}>
              <div
                className={styles.fullHeightStep}
                style={{ 
                  background: data.background,
                  color: data.darkmode ? '#f1f1f1' : '#000000',
                  minHeight: data.imageUrl ? '200vh' : '100vh',
                }}
              >
                <div className={`
                  ${data.links && styles.projectLinkStep}
                  ${styles.textContent}
                `}>
                  {data.heading && <h1>{data.heading}</h1>}
                  {data.caption && <span>{data.caption}</span>}
                  {data.paragraph && <p>{data.paragraph}</p>}
                  {
                    data.links && (
                      <div className={styles.buttonContainer}>
                        {data.links.map((buttonItem, index) => (
                          <LiquidMorphText 
                            key={index} 
                            text={buttonItem.label}
                            delay={400 + (index * 100)}
                            isActive={currentStep === i}
                            isButton={true}
                            primary={buttonItem.primary}
                            href={buttonItem.href}
                          />
                        ))}
                      </div>
                    )
                  }</div>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};

export default ScrollytellingStory;
