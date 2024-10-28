
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import LegoPage from "./components/legoPage/LegoPage";

const App = () => {
  return (
    <Router basename="/nicholas-kuun-cv">
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Nav />
              <About />
              <Experience />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Lego subpage */}
        <Route path="/lego" element={<LegoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
