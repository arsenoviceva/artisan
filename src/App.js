import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./header/Header";
import { Work } from "./app/work/Work";
import { About } from "./app/about/About";
import { Home } from "./app/home/Home";
import { Contact } from "./app/contact/Contact";
import { Footer } from "./footer/Footer";
import { WebSite } from "./app/work/WebSite";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WebSite />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
