const footerLinks = {
  Services: [
    "Emergency Plumbing",
    "HVAC Emergencies",
    "Electrical Emergencies",
    "Water Damage Restoration",
    "Appliance Repair",
    "Locksmith Services",
  ],
  Company: [
    "About Us",
    "How It Works",
    "Careers",
    "For Professionals",
    "Press",
    "Blog",
  ],
  Support: [
    "Help Center",
    "Contact Us",
    "Service Guarantee",
    "Safety Guidelines",
    "Terms of Service",
    "Privacy Policy",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold">
                Sentrel<span className="text-primary">Emergency</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-blue-200 leading-relaxed">
              Premium emergency home services powered by smart technology. 24/7
              availability with licensed, insured professionals.
            </p>
            <a
              href="tel:1-800-SENTREL"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              1-800-SENTREL
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-300">
            &copy; {new Date().getFullYear()} Sentrel Emergency Services. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>Licensed &amp; Insured</span>
            <span>&middot;</span>
            <span>BBB A+ Rated</span>
            <span>&middot;</span>
            <span>Made in the USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
