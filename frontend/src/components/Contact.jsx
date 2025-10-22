// Import for awesome icon plugin
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import LazyDiv from "./misc/LazyDiv";

library.add(fas, far, fab);
// end of font awesome import

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/facility/sribudaya.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white flex justify-center animate-fade-up">
            <div className="max-w-2xl px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg tracking-tight">
                Contact Information
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90">
                Hubungi Kami dengan Mudah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen py-16 px-4 flex flex-col items-center">
        <div className="max-w-6xl w-full animate-fade-up">
          {/* Header */}
          <LazyDiv>
            <div className="text-center mb-16 mt-8">
              <h2 className="text-lg font-semibold text-amber-600 uppercase tracking-wider mb-4 animate-fade-right">
                Sambutan Hangat
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight animate-fade-left animate-delay-100">
                Sribudaya Resort
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-right animate-delay-200">
                Kami siap menyambut Anda dengan pelayanan terbaik di Sribudaya Resort. 
                Silakan hubungi kami melalui berbagai cara yang tersedia.
              </p>
            </div>
          </LazyDiv>

          {/* Contact Card & Map */}
          <LazyDiv>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Contact Information Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
                <div className="text-center mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-4 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Informasi Kontak
                  </h2>
                  <p className="text-gray-600">Terhubung dengan kami kapan saja</p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl  transition-all hover:bg-amber-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon="fa-solid fa-location-dot" 
                        className="text-white text-lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Jl. Soekarno Hatta, Lampeuneurut Ujong Blang, 
                        Darul Imarah, Aceh Besar.
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl   transition-all hover:bg-amber-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon="fa-solid fa-phone" 
                        className="text-white text-lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                      <p className="text-gray-700 text-lg font-medium">
                        0822-6787-8880
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl   transition-all hover:bg-amber-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon="fa-brands fa-whatsapp" 
                        className="text-white text-xl"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/6282267878880"
                        className="text-gray-700 text-lg font-medium hover:text-amber-700 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        (+62)-822-6787-8880
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl   transition-all hover:bg-amber-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon="fa-brands fa-instagram" 
                        className="text-white text-xl"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                      <a
                        href="https://instagram.com/sribudaya_resortaceh"
                        className="text-gray-700 text-lg font-medium hover:text-amber-700 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @sribudaya_resortaceh
                      </a>
                    </div>
                  </div>

                  {/* TikTok */}
                  <div className="flex items-start space-x-4 p-4 rounded-2xl   transition-all hover:bg-amber-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon="fa-brands fa-tiktok" 
                        className="text-white text-xl"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">TikTok</h3>
                      <a
                        href="https://www.tiktok.com/@sribudayaresortaceh"
                        className="text-gray-700 text-lg font-medium hover:text-amber-700 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @sribudayaresortaceh
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-3xl overflow-hidden shadow-2xl  transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
                <div className="h-full min-h-[500px]">
                  <iframe
                    title="Sribudaya Resort Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3493821911425!2d95.32108227506707!3d5.5150531944649845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040392caa277e19%3A0xd761fb6d5e2daf74!2sSribudaya%20resort%20%26%20homestay!5e0!3m2!1sen!2sid!4v1757240120401!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </LazyDiv>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Siap Memulai Pengalaman Terbaik Anda?
            </h3>
            <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk informasi lebih lanjut atau melakukan reservasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6282267878880"
                className="bg-white text-amber-700 px-8 py-4 rounded-2xl font-semibold text-lg hover: transition-all duration-300 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noreferrer"
              >
                Hubungi via WhatsApp
              </a>
              <a
                href="tel:082267878880"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-amber-700 transition-all duration-300"
              >
                Telepon Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;