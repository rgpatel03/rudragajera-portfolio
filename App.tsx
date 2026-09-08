import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Background } from './components/Background';
import { Navigation } from './components/Navigation';
import { Marquee } from './components/Marquee';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Tools } from './components/sections/Tools';
import { Work } from './components/sections/Work';
import { Journey } from './components/sections/Journey';
import { Why } from './components/sections/Why';
import { Process } from './components/sections/Process';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden';
  }, [loaded]);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <Background />

      <div
        className={`relative transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navigation />
        <main>
          <Hero />
          <About />
          <Marquee />
          <Services />
          <Tools />
          <Work />
          <Journey />
          <Why />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
