import React from "react";

const Wedding = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-200 overflow-hidden">
        <video
          className="absolute w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/wedding-placeholder.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Celebrate Your Love at SriBudaya Resort
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md">
            Experience the perfect wedding destination in harmony with nature
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-amber-600">
          Wedding Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Intimate Package</h3>
            <p>Perfect for small private ceremonies up to 50 guests.</p>
            <p className="mt-3 font-semibold text-amber-600">$1,500</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Elegant Package</h3>
            <p>Includes floral decor, dining setup, and live music for 100 guests.</p>
            <p className="mt-3 font-semibold text-amber-600">$3,000</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Royal Package</h3>
            <p>Exclusive resort access, 200 guests, full decoration & photography.</p>
            <p className="mt-3 font-semibold text-amber-600">$5,000</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-amber-600">
          Wedding Gallery
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`/images/wedding/gallery-${i}.jpg`}
              alt={`Wedding ${i}`}
              className="rounded-xl shadow hover:scale-105 transition-transform object-cover h-64 w-full"
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-amber-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 text-lg">
          Contact our wedding planner for details and reservations.
        </p>
        <a
          href="mailto:info@sribudayaresort.com"
          className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Wedding;
