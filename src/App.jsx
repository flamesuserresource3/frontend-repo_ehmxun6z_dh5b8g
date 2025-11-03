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
                Welcome to nasi liwet mbak marni — a cozy spot celebrating hearty Indonesian flavors and warm hospitality. We prepare our dishes fresh daily with carefully selected ingredients. Whether you’re stopping by for a comforting plate of nasi liwet or gathering with friends and family, we’re here to make every visit memorable.
              </p>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} nasi liwet mbak marni. All rights reserved.</p>
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
