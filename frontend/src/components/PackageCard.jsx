import { useParams } from "react-router-dom";
import { useState } from "react";

const PackageDetail = () => {
  const { type } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = {
    silver: {
      name: "Silver Package (500 Pax)",
      price: "Rp 75.000.000,-",
      image: "/images/silver-package.png",
      includes: [
        "Dekorasi standar dengan bunga segar",
        "Buffet untuk 500 tamu",
        "MC dan musik akustik",
        "Rias pengantin (1x)",
        "Dokumentasi foto & video (4 jam)",
        "Gratis honeymoon suite 1 malam",
      ],
    },
    gold: {
      name: "Gold Package (700 Pax)",
      price: "Rp 105.000.000,-",
      image: "/images/gold-package.png",
      includes: [
        "Dekorasi premium dengan tema pilihan",
        "Buffet untuk 700 tamu",
        "Full band entertainment",
        "Rias pengantin & keluarga",
        "Dokumentasi profesional (8 jam)",
        "Gratis honeymoon suite 2 malam + breakfast",
      ],
    },
    royal: {
      name: "Royal Package (900 Pax)",
      price: "Rp 135.000.000,-",
      image: "/images/royal-package.png",
      includes: [
        "Dekorasi mewah full flower arch & stage lighting",
        "Buffet untuk 900 tamu",
        "Live band & MC profesional",
        "Rias pengantin & keluarga lengkap",
        "Full dokumentasi + drone",
        "Gratis honeymoon suite 3 malam + candlelight dinner",
      ],
    },
    platinum: {
      name: "Platinum Package (1000 Pax)",
      price: "Rp 155.000.000,-",
      image: "/images/21327dff-2c42-4399-8d61-1f1fbe59afe4.png",
      includes: [
        "Dekorasi super mewah full custom theme",
        "Buffet internasional untuk 1000 tamu",
        "Full entertainment (MC, live band, firework)",
        "Rias pengantin & keluarga (4 orang)",
        "Dokumentasi sinematik 10 jam + drone",
        "Gratis honeymoon suite 3 malam + spa package",
      ],
    },
  };

  const selected = packages[type];

  if (!selected) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Paket tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-amber-800 mb-3">
            {selected.name}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{selected.price}</p>

          <h2 className="text-xl font-semibold mb-2">Includes:</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            {selected.includes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Tombol Book Now */}
          <div className="mt-10 text-center md:text-left">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-96 relative">
            <h3 className="text-xl font-bold mb-4 text-center">Booking Form</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get("name");
                const date = formData.get("date");
                const pkg = formData.get("package");
                const message = formData.get("message") || "";

                const text = encodeURIComponent(
                  `Halo, saya ${name} ingin memesan ${pkg} pada tanggal ${date}. ${message}`
                );
                window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
              }}
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border rounded-lg p-2"
                required
              />
              <input
                type="text"
                name="date"
                placeholder="Preferred Date"
                className="border rounded-lg p-2"
                required
              />
              <select name="package" className="border rounded-lg p-2">
                <option>Silver Package</option>
                <option>Gold Package</option>
                <option>Royal Package</option>
                <option>Platinum Package</option>
              </select>
              <textarea
                name="message"
                placeholder="Additional Request"
                className="border rounded-lg p-2"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
              >
                Send via WhatsApp
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetail;
