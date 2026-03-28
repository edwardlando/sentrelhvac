const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Burst pipes, severe leaks, clogged drains, water heater failures, and sewer backups. Fast response to prevent water damage.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "HVAC Emergencies",
    description:
      "Heating failures in winter, AC breakdowns in summer, gas leaks, and carbon monoxide concerns. Keep your family safe and comfortable.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 4.572V4.5a3 3 0 013-3h.75a.75.75 0 01.75.75v.008c0 .272.028.54.082.803A5.99 5.99 0 0115.362 5.214z" />
      </svg>
    ),
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Electrical Emergencies",
    description:
      "Power outages, sparking outlets, tripped breakers, and exposed wiring. Certified electricians to restore safety fast.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Water Damage Restoration",
    description:
      "Flooding, storm damage, and appliance overflows. Rapid extraction, drying, and restoration to minimize long-term damage.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Appliance Repair",
    description:
      "Refrigerator, washer, dryer, dishwasher, and oven breakdowns. Same-day emergency repairs for all major brands.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.25-3.03a.75.75 0 010-1.3l5.25-3.03a.75.75 0 01.84 0l5.25 3.03a.75.75 0 010 1.3l-5.25 3.03a.75.75 0 01-.84 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v7.5" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Locksmith Services",
    description:
      "Locked out of your home? Emergency lock changes, rekeying, and security upgrades. Available around the clock.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    color: "bg-green-50 text-green-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-secondary">
            Emergency Services When You Need Them Most
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From burst pipes to broken furnaces, our network of certified
            professionals handles every home emergency with speed and expertise.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}
              >
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
