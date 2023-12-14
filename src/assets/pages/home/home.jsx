import "../home/home.scss";
import { useState, useEffect } from "react";
import profile from "../../images/profile.jpg";
import Button from "../../components/button/button";
import Service from "../../components/service/service";
import Carousel from "../../components/carousel/carousel";

function Home() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("/services.json", {
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
    <main id="top" className="home">
      <div className="profile">
        <img className="me" src={profile} alt="clement" />
        <h1 className="name">Clément Brossier</h1>
        <p className="job">Intégrateur web & fan de jeux vidéo</p>
        <nav className="projects-github">
          <Button
            to={"/projects"}
            logo={<i className="fa-regular fa-folder-open fa-lg"></i>}
            className={"button-projects"}
            title={"Projets"}
          />
          <Button
            to={"https://github.com/Brossierclement"}
            logo={<i className="fa-brands fa-github fa-lg"></i>}
            className={"button-github"}
            title={"Github"}
          />
        </nav>
        <div className="scrolldown">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>

      <div id="about" className="introduction">
        <div className="about">
          <section className="title">
            <h1 className="main-title">À propos</h1>
            <p className="main-titled">Qui suis-je?</p>
          </section>
          <p className="introduction-description">
            Après différentes expériences dans le monde professionnel j'ai
            décidé de faire une reconversion dans le domaine du Web grâce à la
            formation d'Intégrateur Web d'
            <a href="https://openclassrooms.com/fr/" target="blank">
              OpenClassrooms
            </a>{" "}
            que je vais prochainement terminer.
            <br />
            <br />
            À 25 ans, passionné d'informatique et de jeux vidéo, le monde du web
            m'a toujours intrigué. C'était l'une de mes premières idées
            d'orientation. Ma curiosité insatiable et mon engagement font de moi
            quelqu'un prêt à plonger dans le monde dynamique de la technologie.
            <br />
            <br />
            La formation d'intégrateur web d'{" "}
            <a href="https://openclassrooms.com/fr/" target="blank">
              OpenClassrooms
            </a>{" "}
            , sur 9 mois à distance, propose 12 projets concrets. De
            l'apprentissage du HTML/CSS, elle évolue vers JavaScript et React.
            Les apprenants développent compétences en optimisation, débogage, et
            travaillent sur des projets thématiques. Une immersion complète dans
            le web, préparant aux défis professionnels avec un portfolio solide.
            <br />
            <br />
            Désormais je recherche un emploi ou un apprentissage afin de
            parfaire et détailler mes connaissances.
          </p>
        </div>
      </div>
      <div id="services" className="services">
        <section className="title">
          <h1 className="main-title">Services</h1>
          <p className="main-titled">Mes compétences</p>
        </section>
        <div className="competences">
          {data.map((item) => (
            <Service key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="carousel">
        <section className="title">
          <h1 className="main-title">Projets</h1>
          <p className="main-titled">Mes derniers projets</p>
        </section>
        <Carousel />
      </div>
    </main>
  );
}

export default Home;
