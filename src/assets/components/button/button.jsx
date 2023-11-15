import "../button/button.scss";
import { Link } from "react-router-dom";

function Button({ to, logo, className, title }) {
  return (
    <Link className={`button ${className}`} to={to}>
      {logo}
      {title}
    </Link>
  );
}

export default Button;
