import { Star } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-amber-700 bg-amber-100 px-3 py-1 rounded-full text-sm font-medium">
              <Star className="h-4 w-4" /> Locally roasted beans
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
              Sip, savor, and slow down
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-xl">
              Welcome to Café Aurora — your neighborhood spot for specialty coffee, artisan pastries, and cozy vibes from sunrise to sunset.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors">
                View Menu
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-50 transition-colors">
                Visit Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop"
                alt="Freshly brewed coffee and pastries"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
