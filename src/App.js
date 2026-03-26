import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { Footer } from './Footer/Footer.jsx';

// Lazy load components for code splitting
const Home = lazy(() => import('./Home/Home.jsx').then(module => ({ default: module.Home })));
const About = lazy(() => import('./About/About.jsx').then(module => ({ default: module.About })));
const Bio = lazy(() => import('./Bio/Bio.jsx').then(module => ({ default: module.Bio })));
const MiniUiKit = lazy(() => import('./MiniUiKit/MiniUiKit.jsx').then(module => ({ default: module.MiniUiKit })));

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header currentLocation={currentLocation} />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/2025" element={<Bio />} />
          <Route path="/mini-ui-kit" element={<MiniUiKit />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
