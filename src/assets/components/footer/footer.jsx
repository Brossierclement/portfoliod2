import "../footer/footer.scss";
import Icon from "../icon/icon";

function Footer() {
  return (
    <footer>
      <p className="quote">
        "For my kind, the true question is, what is worth figthing for"
      </p>
      <a></a>
      <nav className="links">
        <Icon
          link={"https://twitter.com/Gulnyr_"}
          logo={<i className="fa-brands fa-twitter fa-lg"></i>}
        />
        <Icon to={""} logo={<i className="fa-brands fa-linkedin fa-lg"></i>} />
        <Icon
          link={"https://github.com/Brossierclement"}
          logo={<i className="fa-brands fa-github"></i>}
        />
      </nav>
    </footer>
  );
}

export default Footer;
