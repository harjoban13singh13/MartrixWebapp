import SceneBackground from './components/ui/SceneBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="font-body text-white overflow-x-hidden" style={{ backgroundColor: '#05080c' }}>
      {/* Fixed decorative background — sits behind everything */}
      <SceneBackground />

      {/* All page content sits above the background */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
