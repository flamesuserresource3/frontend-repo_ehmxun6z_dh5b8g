import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Visit the café</h2>
            <p className="mt-3 text-neutral-600">Find us in the heart of the neighborhood. Swing by for your daily ritual or settle in for a cozy afternoon.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-amber-700" />
                <div>
                  <p className="font-medium">123 Aurora St, Suite 5</p>
                  <p className="text-neutral-600 text-sm">Sunset City, CA 90000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-700" />
                <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-700" />
                <a href="mailto:hello@cafeaurora.com" className="hover:underline">hello@cafeaurora.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-amber-700" />
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">@cafe.aurora</a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1400&auto=format&fit=crop"
                alt="Interior of Café Aurora with warm lighting and plants"
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
            </div>
            <form className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <input type="email" placeholder="Email" className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <textarea placeholder="Message" rows="4" className="sm:col-span-2 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
