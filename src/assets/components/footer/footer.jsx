import "../footer/footer.scss";
import Icon from "../icon/icon";

function Footer() {
  return (
    <footer>
      <p className="quote">
        "For my kind, the true question is, what is worth figthing for"
      </p>
      <nav className="links">
        <Icon to={""} logo={<i className="fa-brands fa-twitter fa-lg"></i>} />
        <Icon to={""} logo={<i className="fa-brands fa-linkedin fa-lg"></i>} />
        <Icon to={""} logo={<i className="fa-brands fa-github"></i>} />
      </nav>
    </footer>
  );
}

export default Footer;
