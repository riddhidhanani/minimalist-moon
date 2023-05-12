
import "./App.css";
import { UseEffectScroll } from 'react-use-smooth-scroll'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/service";
import SubPortfolio from "./pages/subPortfolio";
import ContactUs from "./pages/contactUs";
import Blog from "./pages/blog";
import Loading from "./components/loading/loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);

  return (
   <UseEffectScroll>
      {loading ? (
        <Loading />
      ) : (
        <div className="jsScroll">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/subPortfolio" element={<SubPortfolio />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </Router>
        </div>
      )}
</UseEffectScroll>
  );
}

export default App;
