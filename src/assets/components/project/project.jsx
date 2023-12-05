import { useState } from "react";
import "../project/project.scss";

function Project({ data }) {
  return (
    <article className="project">
      <img src={data.logo} />
      <section>
        <h1>{data.name}</h1>
      </section>
    </article>
  );
}

export default Project;
