import "./icon.scss";

function Icon({ logo, link }) {
  return (
    <a className="icon" href={link}>
      {logo}
    </a>
  );
}

export default Icon;
