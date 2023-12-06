import "../project/project.scss";
import arrow from "/images/arrow-insert.svg";

function Project({ data }) {
  return (
    <article className="project">
      <img className="logo" src={data.logo} />
      <div className="description">
        <section className="title">
          <h1>{data.name}</h1>
          <img className="arrow" src={arrow} />
        </section>
        <p>{data.about}</p>
      </div>
    </article>
  );
}

export default Project;
