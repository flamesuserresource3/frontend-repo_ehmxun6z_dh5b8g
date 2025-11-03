import { Coffee, Sandwich, CupSoda } from 'lucide-react';

const items = [
  {
    icon: Coffee,
    name: 'Aurora Latte',
    desc: 'Velvety microfoam with our signature espresso blend',
    price: '$4.50',
    tag: 'Best seller'
  },
  {
    icon: CupSoda,
    name: 'Citrus Cold Brew',
    desc: 'Slow-steeped cold brew kissed with orange zest',
    price: '$4.00',
    tag: 'Seasonal'
  },
  {
    icon: Sandwich,
    name: 'Caprese Focaccia',
    desc: 'Fresh mozzarella, basil pesto, tomatoes on warm bread',
    price: '$7.50',
    tag: 'New'
  },
];

function MenuCard({ icon: Icon, name, desc, price, tag }) {
  return (
    <div className="group p-5 rounded-xl border border-neutral-200 hover:border-amber-300 hover:shadow-md transition-all bg-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">{name}</h3>
            <p className="text-sm text-neutral-600 mt-1">{desc}</p>
          </div>
        </div>
        <span className="text-sm font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-md">{tag}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold">{price}</span>
        <button className="px-3 py-1.5 rounded-md text-sm font-medium border border-neutral-300 hover:bg-neutral-50 transition-colors">Details</button>
      </div>
    </div>
  );
}

function MenuShowcase() {
  return (
    <section id="menu" className="py-16 sm:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-amber-700 font-medium">Menu highlights</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Crafted drinks & bites</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">Thoughtfully sourced ingredients, prepared with care. Explore a few favorites from our all-day selection.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-100 transition-colors">See full menu in-store</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuShowcase;
