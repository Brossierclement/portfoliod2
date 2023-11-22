import "../header/header.scss";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import file from "../../../../public/images/file-regular.svg";

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/mon_cv.pdf";
    downloadLink.download = "mon_cv.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <header className="header">
      <Link to={"/"}>
        <i className="fa-solid fa-ghost fa-2xl logo"></i>
      </Link>
      <nav className="navigation">
        <Button
          // logo={<i class="fa-regular fa-file-pdf"></i>}
          className={"button-github"}
          title={"CV"}
          onClick={handleDownload}
        />
        <a onClick={() => scrollToSection("about")}>À propos</a>
        <a onClick={() => scrollToSection("services")}>Services</a>
        <Link className="my-projects" to={"/projects"}>
          Projets
        </Link>
      </nav>
    </header>
  );
}

export default Header;
