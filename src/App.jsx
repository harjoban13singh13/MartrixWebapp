import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="font-body bg-[#FAFAFA] text-gray-900 overflow-x-hidden">
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
  );
}
