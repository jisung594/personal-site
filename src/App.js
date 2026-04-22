import { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { Footer } from './Footer/Footer.jsx';
import { SplashScreen } from './SplashScreen/SplashScreen.jsx';

// Lazy load components for code splitting
const Home = lazy(() => import('./Home/Home.jsx').then(module => ({ default: module.Home })));
const About = lazy(() => import('./About/About.jsx').then(module => ({ default: module.About })));
const Bio = lazy(() => import('./Bio/Bio.jsx').then(module => ({ default: module.Bio })));
const MiniUiKit = lazy(() => import('./MiniUiKit/MiniUiKit.jsx').then(module => ({ default: module.MiniUiKit })));
const Contact = lazy(() => import('./Contact/Contact.jsx').then(module => ({ default: module.Contact })));
const PinchDocs = lazy(() => import('./PinchDocs/PinchDocs.jsx').then(module => ({ default: module.PinchDocs })));

// Simple loading component
const LoadingSpinner = () => (
  <div style={{ 
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa',
    zIndex: 9999
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #000000',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '20px'
    }}></div>
    <div style={{ fontSize: '18px', color: '#000000' }}>LOADING</div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);


const AppContent = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const [showSplash, setShowSplash] = useState(false); // Start with false for direct navigation
  const isHomepage = currentLocation === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check if user has seen splash screen before
  useEffect(() => {
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    if (isHomepage && !hasSeenSplash) {
      setShowSplash(true);
    }
  }, [isHomepage]);

  const handleSplashComplete = () => {
    // Mark that user has seen splash screen
    localStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  return (
    <>
      {isHomepage && showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className="App" style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 2s ease-in-out' }}>
        <Header currentLocation={currentLocation} />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/2025" element={<Bio />} />
            <Route path="/mini-ui-kit" element={<MiniUiKit />} />
            <Route path="/docs/pinch" element={<PinchDocs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
