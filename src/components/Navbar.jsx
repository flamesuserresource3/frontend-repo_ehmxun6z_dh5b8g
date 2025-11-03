import { Coffee, Phone, MapPin, Clock } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors">
              <Coffee className="h-5 w-5 text-amber-700" />
            </div>
            <span className="font-semibold text-xl tracking-tight">Café Aurora</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm font-medium text-neutral-700 hover:text-amber-700 transition-colors">Menu</a>
            <a href="#about" className="text-sm font-medium text-neutral-700 hover:text-amber-700 transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-neutral-700 hover:text-amber-700 transition-colors">Contact</a>
          </nav>
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-neutral-600">
              <Clock className="h-4 w-4" />
              <span>Mon–Sun: 7am – 7pm</span>
            </div>
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
