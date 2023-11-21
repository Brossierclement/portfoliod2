import "../header/header.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Header() {
  const { ref: headerRef, inView: headerIsVisible } = useInView();

  return (
    <header
      ref={headerRef}
      className={`header ${headerIsVisible ? "animatedElementHeader" : ""}`}
    >
      <Link to={"/"}>
        <i className="fa-solid fa-ghost fa-2xl logo"></i>
      </Link>
      <nav className="navigation">
        <Link to={"/projects"}>Projets</Link>
      </nav>
    </header>
  );
}

export default Header;
