import { useEffect, useState } from "react";
import "../projects/projects.scss";
import Card from "../../components/card/card";

function Projects() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="projects">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </main>
  );
}

export default Projects;
