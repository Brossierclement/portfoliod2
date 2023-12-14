import "../description/description.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button";
import Tag from "../../components/tag/tag";

function Description() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Exemple simplifié pour accéder aux données à partir du JSON
    fetch("/projects.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const item = jsonData.find((item) => item.id === parseInt(id));
        setData(item);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main className="description">
      <div className="top">
        <img className="logo" src={data.logo} alt="illustration" />
        <h1 className="name">{data.name}</h1>
        <p className="title">{data.title}</p>
        <Button
          to={data.link}
          title={"Github"}
          logo={<i className="fa-brands fa-github fa-lg"></i>}
          className={"button-github"}
        />
      </div>
      <div className="middle">
        {data.examples.map((item, i) => (
          <img className="image" key={i} src={item} />
        ))}
      </div>
      <section className="bottom">
        <h1>{data.about.titleOne}</h1>
        <p>{data.about.realization}</p>
        <h1>{data.about.titleTwo}</h1>
        <ul>
          {data.about.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h1>{data.about.titleThree}</h1>
        <div className="tags">
          {data.about.skills.map((item, i) => (
            <Tag key={i} tags={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Description;
