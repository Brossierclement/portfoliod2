import { Link } from "react-router-dom";
import "./icon.scss";

function Icon({ to, logo }) {
  return (
    <Link className="icon" to={to}>
      {logo}
    </Link>
  );
}

export default Icon;
