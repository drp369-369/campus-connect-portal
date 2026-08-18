import React, { useRef } from 'react';
import Portals from '../portal/Portals';

export default function Landing() {
  const portalsRef = useRef(null);

  const scrollToPortals = () => {
    if (portalsRef.current) {
      portalsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white text-gray-900">
      <section className="relative bg-rvgreen-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center bg-white/10 text-white rounded-full px-3 py-1 text-xs font-semibold mb-6">CS3301 – FULL STACK DEVELOPMENT</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">CAMPUS CONNECT PORTAL</h1>
              <p className="mt-4 text-lg text-white/90 max-w-2xl">Connecting Students, Faculty, and Administrators on a Single Digital Platform.</p>

              <div className="mt-8">
                <button
                  onClick={scrollToPortals}
                  className="inline-flex items-center gap-3 bg-white text-rvgreen font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-[1.01] transition-transform"
                >
                  Explore User Portals →
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm font-semibold">RV UNIVERSITY</div>
                <div className="text-xs text-white/80">School of Computer Science &amp; Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={portalsRef} className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Choose Your Portal</h2>
        <Portals />
      </section>
    </main>
  );
}
