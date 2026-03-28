"use client";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "Austin",
  "Jacksonville",
  "San Jose",
  "Indianapolis",
  "San Francisco",
  "Columbus",
  "Charlotte",
  "Denver",
  "Seattle",
  "Nashville",
  "Portland",
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 sm:py-24 bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">
              Coverage Area
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              Serving Major Metro Areas Nationwide
            </h2>
            <p className="mt-4 text-lg text-blue-200 leading-relaxed">
              Our network of 2,400+ certified professionals covers the top 50
              metro areas in the United States, with more cities added every
              month.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-block rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-blue-100"
                >
                  {city}
                </span>
              ))}
              <span className="inline-block rounded-full bg-accent/20 border border-accent/30 px-3 py-1 text-sm text-accent font-medium">
                + 30 more cities
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
            <h3 className="text-xl font-bold mb-6">
              Check Availability in Your Area
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Enter Your ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="e.g. 90210"
                  maxLength={5}
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-secondary-dark hover:bg-yellow-400 transition-colors"
              >
                Check Coverage
              </button>
            </form>
            <div className="mt-6 flex items-center gap-3 text-sm text-blue-200">
              <svg
                className="w-5 h-5 text-green-400 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Expanding to new areas every month. Don&apos;t see your city? We&apos;ll notify you when we arrive.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
