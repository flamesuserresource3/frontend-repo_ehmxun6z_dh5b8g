import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen font-inter text-neutral-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <section id="about" className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-neutral-200 p-8 bg-white/80">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our story</h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                We started Café Aurora with a simple idea: great coffee brings people together. Our team sources exceptional beans from small farms and roasts them in-house every week for peak freshness. Every cup is prepared with care, and every pastry is baked fresh daily by our neighbors down the street. Whether you’re grabbing a quick espresso or lingering with friends, we’re here to make your day a little brighter.
              </p>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Café Aurora. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-amber-700">Menu</a>
            <a href="#about" className="hover:text-amber-700">About</a>
            <a href="#contact" className="hover:text-amber-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
