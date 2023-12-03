import "./App.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
