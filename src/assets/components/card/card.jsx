import { Link } from "react-router-dom";
import "../card/card.scss";
import Tag from "../tag/tag";

function Card({ data }) {
  return (
    <Link className="card" to={`/projects/description/${data.id}`}>
      <img className="logo" src={data.logo} alt="logo du projet" />
      <section className="informations">
        <h1 className="name">{data.name}</h1>
        <p className="title">{data.title}</p>
        <div className="tags">
          {data.tags.map((item, i) => (
            <Tag key={i} tags={item} />
          ))}
        </div>
      </section>
    </Link>
  );
}

export default Card;
