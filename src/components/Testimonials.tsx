const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    text: "Our pipe burst at 2 AM in the middle of winter. Sentrel had a plumber at our door in 35 minutes. The real-time tracking made a stressful situation so much more manageable. Incredible service.",
    service: "Emergency Plumbing",
  },
  {
    name: "David R.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "AC died during a 115-degree day. The app showed me exactly who was coming, their reviews, and the price before they started. Fixed in under an hour. This is what home services should be.",
    service: "HVAC Emergency",
  },
  {
    name: "Jennifer K.",
    location: "Chicago, IL",
    rating: 5,
    text: "Locked out of my house with my kids in the car. Called Sentrel and a locksmith was there in 20 minutes. The upfront pricing and professional service were exactly what I needed in a panic moment.",
    service: "Locksmith",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-secondary">
            Trusted by Thousands of Homeowners
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from real customers who trusted us in their moment of need.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <StarRating count={testimonial.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.location} &middot; {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3 border border-gray-200">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-secondary">
              4.9 out of 5
            </span>
            <span className="text-sm text-gray-500">
              based on 12,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
