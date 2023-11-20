import "../header/header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <i className="fa-solid fa-ghost fa-2xl logo"></i>
      </Link>
      <nav className="navigation">
        <Link to={"/projects"}>Projets</Link>
        <Link to={"/about"}>À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
