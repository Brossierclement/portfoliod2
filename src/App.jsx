import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header/header";
import Home from "./assets/pages/home/home";
import Projects from "./assets/pages/projects/projects";
import Description from "./assets/pages/description/description";
import Footer from "./assets/components/footer/footer";
// import video from "./assets/videos/cyberpunk.mp4";
import background from "../src/assets/images/background.png";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <video className="vod" src={video}></video> */}
      <img className="vod" src={background} />
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
