export default function CTA() {
  return (
    <section id="book" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-10 sm:p-16 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Don&apos;t Wait Until It Gets Worse
          </h2>
          <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
            Home emergencies escalate fast. A small leak becomes water damage. A
            tripped breaker becomes an electrical fire. Get help now — we&apos;re
            available 24/7, 365 days a year.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:1-800-SENTREL"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary hover:bg-gray-50 transition-colors shadow-lg"
            >
              <svg
                className="w-5 h-5"
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
              Call 1-800-SENTREL
            </a>
            <span className="text-red-200 font-medium">or</span>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Book Online Now
            </a>
          </div>

          <p className="mt-6 text-sm text-red-200">
            No dispatch fees &middot; Upfront pricing &middot; Satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
