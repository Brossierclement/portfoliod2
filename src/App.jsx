import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header/header";
import Home from "./assets/pages/home/home";
import Projects from "./assets/pages/projects/projects";
import Description from "./assets/pages/description/description";
import About from "./assets/pages/about/about";
import Footer from "./assets/components/footer/footer";
import video from "./assets/videos/cyberpunk.mp4";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <video className="vod" src={video} autoPlay loop muted></video>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/description/:id" element={<Description />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
