import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Facility from "./components/Facility";
import Footer from "./components/Footer";
import GalleryViewAll from "./components/GalleryViewAll";
import ScrollToTop from "./components/misc/ScrollToTop";
import Wedding from "./components/Wedding";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/Wedding" element={<Wedding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/gallery" element={<GalleryViewAll />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// export default App;
