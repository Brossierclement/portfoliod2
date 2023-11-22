import "../button/button.scss";
import { Link } from "react-router-dom";

function Button({ to, logo, className, title, onClick }) {
  return (
    <Link className={`button ${className}`} to={to} onClick={onClick}>
      {logo}
      {title}
    </Link>
  );
}

export default Button;
