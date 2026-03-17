import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import './index.css';
import App from './App.jsx';

// Smooth scroll engine
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

// Expose globally so components can call lenis.scrollTo()
window.__lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
