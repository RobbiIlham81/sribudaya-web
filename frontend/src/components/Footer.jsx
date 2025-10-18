const Footer = () => {
  return (
    <div className="relative bg-stone-900 text-white">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          {/* Kolom 1 - Deskripsi */}
          <div className="md:max-w-md lg:col-span-2">
            <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Sribudaya Resort.
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                Resort indah, dan natural untuk liburan keluarga anda
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                Sribudaya Resort Aceh berkomitmen untuk memberikan pelayanan terbaik bagi kenyamanan anda dan keluarga
              </p>
            </div>
          </div>

          {/* Kolom 2 & 3 - Category, Contact, dan Partners */}
          <div className="grid grid-cols-2 gap-4 row-gap-8 lg:col-span-4 md:grid-cols-3">
            {/* Category */}
            <div >
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Home</a></li>
                <li><a href="/about" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">About</a></li>
                <li><a href="/booking" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Booking</a></li>
                <li><a href="/facility" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Facility</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Contact Information
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="https://wa.me/6282267878880"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6282267878880"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Phone : 0822-6787-8880
                  </a>
                </li>
                <li>
                  Address: <br />
                  Jl. Soekarno Hatta, Lampeuneurut Ujong Blang, Darul Imarah,
                  Aceh Besar.
                </li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Partner Sites
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                {/* Kotak logo */}
                <a
                  href="https://www.booking.com/Share-DlyFsCQ"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 w-16 h-10 flex justify-center items-center rounded-md shadow-md transition-transform duration-200 hover:scale-110"
                >
                  <img src="bookingcom.png" className="max-w-full max-h-full" alt="Booking.com" />
                </a>

                <a
                  href="https://www.tiket.com/hotel/indonesia/sribudaya-resort-708001724122959169"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 w-16 h-10 flex justify-center items-center rounded-md shadow-md transition-transform duration-200 hover:scale-110"
                >
                  <img src="tiketcom.png" className="max-w-full max-h-full" alt="Tiket.com" />
                </a>

                <a
                  href="https://www.agoda.com/sribudaya-resort/hotel/aceh-id.html"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 w-16 h-10 flex justify-center items-center rounded-md shadow-md transition-transform duration-200 hover:scale-110"
                >
                  <img src="agoda.png" className="max-w-full max-h-full" alt="Agoda" />
                </a>

                <a
                  href="https://www.traveloka.com/en-id/hotel/detail?spec=16-10-2025.17-10-2025.1.1.HOTEL.9000005502348.Sribudaya%20Resort.2&contexts=%7B%22inventoryRateKey%22%3A%22povEwB3ZzsU2C6pd%2B6MdU13LUNuufACdbU0usK5vg0fE6WJ31Ebv8ofmBVQv4qNrfwxXnYiRzoxM4HX9sDmt9%2FAm1AYn3MeGz8Xcpq5hCtgkoYhCABuc4UBUJdDpIzcBkjYFe7E9Hsd3uMKwzSkUl5pNkVNrbZlWauR9OJSMSOgTUF8uPIIQL0rCSb9XNHrUTbkrW7tiHHxrLypqJc1IvlojraceyKrNRmvJY3C4ARNvmzpKB3IJycdCcd%2FTPv9xWiOtpx7Iqs1Ga8ljcLgBExRMjY4RH8ng%2Faj%2BIjo4bwp%2FnUKXTSeVIumnRcdMEOmB27f1NLVsX7einH14R%2BqOiyn4cSFPDilPuHQm8dPdBLdtzvflNgxDHW608XEoTQ%2FSmiw4mjKzvPuHybihY94iBnE%2FJv67fOsT8aHmUE%2Bnnty5zl4ic%2FFANfYf4OB%2B7V89KfhxIU8OKU%2B4dCbx090EtxES2VPY1P9YySByfSxKcLUiwDoyoR6C%2B6nBumT%2BE%2BHp0g%2B7x785kwvRwntERKG%2BYTiceUfGFPL5gxb%2BO%2FZjViyfnt9cwaKMubsaAsTuw8lnFwFg7Q5p0PSGRSY4ocA%2B6TrY5HJcF4cw%2BOzFZrVKzdqsG7jLOANWslyD3FHPgrI%2BUfVM94ygsXuZOKWXvDoiEsA9mMCu4Qjqms2DIS5aGq4asV9oFibrSJzQmYudRLbVZgETg3ECZxxgfsrgscSOIJzEabBeAT8sF%2BL640FTRzqont88Fij7tEhekI%2FKXacILaHt3F5jQIKFTFLuzfCkMI7QaBIS38YBFqIxywgZ6z%2FzaPIAh1J02YBkdidUwzmiAqm3uTOUuXX6V4UJsGQt1eD%2BRy1C7mqEj3UYejJ5SFKHXBPy4c5lRdN4nlS3WkpI%2FcxwNLWtY%2FK3UFFv2iLsGFUag49trCxTUh1ezzerw1%2B9E0QgS2a3LuuWDTfPw%2FfZSSAhZIQmm%2FnYq7XtghyrNi4tPJ1l2n%2B82IolgbRPW%2BHliEQRRonSCNob1SEQt6AX2IN%2B%2BkVh5bI%2BZQ6F3jGAaJ0vhas1yu0RxTTpitHMooHcOx6d1FYJYgtllFD7242XP79UAn8CNpOExMv17pHNA2P3xfnQ2QMrYhXpNz7X%2FICOKGgFBrBmG0%2B%2B5F2AdBYVqqRgXiwI7A85fAEVQACTG3nQQFnvZWNm5RckHfQaaIA4cuz3kWEopUU15EGo8x6JbVezd7d5jzV8dU5WLaGQ4rtVjOFLr4UY3Y1rbYfsAICeCScK8MaKDJAsjlf85EESr7iF%2FMhMxZymkv622%2FBY9MNhTibJBV93c3twxxjJQY9ARb1%2FPXo7PwKg%2FrheqL55PAAGu0Vn9Z76QmRv9nRFJFqHE1lmheYx3E%2BOJsQdLpPXVj7%2BB5g1nVEtAPR9kx70mS%2BBjw5YyngpacYbOy9ptHUEevAMxMmvMhidb5iSbTQjT8st%2Bbs0Fq%2BLOkcJzRJylygaVFskMRdAGF0QBrigExWuil753fkc%2FS3imdrYQrnrmFZE39C%2FNYlUY6R6K9vIIGp3Jgdv4C%2F4UOxvTcPsQfSQk6vR6ahv%2FGy0jhHD39Q4%2B7hlmsWYmsvNqGcD6cNE1DpNeTWZ3EhWDCYxcBnHxTtNXTS7wBS%2FhVq7YFPRmsfKHf4YD102Y65nBka5Ub1V47nIt50MwKUTBPbi7OdeLEFbKVryoVjeoX2HPKnLgVCbG%2BzYtunB6CUJ7CgeNb3cYJn6GmUFfrgqQn2GVFbaQf6bPALGeb94MHLF02Jcr%2FmMSVw2Q01IJFm1NBEwzig2Cw0q2VMu02cVSRYh0YrqJt7X%2B0GM0OLCwDn13xFDD5XySEfQi7jxFVwglluSw%2FLLi5bRwdPSMx95Uw%2FgB8ZgGVCJm4luxARbEITfz7ZkRQsW15351oRpLQ4X7ZEJVOAD56euNKVXfLCw1Ouz0wBXA4pgjr39J7ngTHvF%2B8WOnu6%2F45txo6e1csVRAWpMYVe8WJRsF8A7hFslntuM8lZi7v3g0%2FaABVnvzd%2FbK%2F%2Fk0KmWEVgOnt037IWLnwl0nH1AQ5NvGY%2F%2BGOCFezEiqqTK8T8VHgp1icVTPGj6mIYbOKmXY6XV9POnKruing0Y4TI0ysM1BfvG25whJQEd4%2Fw3zJpgxGYLBCnQjI%2F0f9zjHfWxq2BBVqaPUOAG6Y6LIXqRM7oDxvg5EMVjqPOeKb%2BzXejG2MDOVJQZi0ZWrKT7vYiTmxjOxl1WEvzIsPUgs6np%22%7D&loginPromo=1&prevSearchId=1846027850528880440 "
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 w-16 h-10 flex justify-center items-center rounded-md shadow-md transition-transform duration-200 hover:scale-110"
                >
                  <img src="traveloka.png" className="max-w-full max-h-full" alt="Traveloka" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright {new Date().getFullYear()} Sribudaya Resort. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
