import "../home/home.scss";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import profile from "../../images/profile.jpg";
import Button from "../../components/button/button";
import Service from "../../components/service/service";

function Home() {
  const { ref: profileRef, inView: profileIsVisible } = useInView();
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: aboutRef, inView: aboutIsVisible } = useInView();
  const { ref: skills, inView: skillsIsVisible } = useInView();

  // const myRef = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState();
  // console.log("myElementIsVisible", myElementIsVisible);
  // useEffect(() => {
  //   console.log("myRef", myRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setMyElementIsVisible(entry.isIntersecting);
  //     console.log("entry", entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

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
    <main className="home">
      <div
        ref={profileRef}
        className={`profile ${
          profileIsVisible ? "animatedElementDelayTwo" : ""
        }`}
      >
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

      <div className="introduction">
        <div className="about">
          <section
            ref={myRef}
            className={`title ${
              myElementIsVisible ? "animatedElementDelayOne" : ""
            }`}
          >
            <h1 className="introduction-title">À propos</h1>
            <p className="introduction-titled">Qui suis-je?</p>
          </section>
          <p
            ref={aboutRef}
            className={`introduction-description ${
              aboutIsVisible ? "animatedElementDelayThree" : ""
            }`}
          >
            Après différentes expériences dans le monde professionnel j'ai
            décidé de faire une reconversion dans le domaine du Web grâce à la
            formation d'Intégrateur Web d'
            <a href="https://openclassrooms.com/fr/" target="blank">
              OpenClassrooms
            </a>{" "}
            que je vais prochainement terminer.
            <br />
            <br />
            Désormais je recherche un emploi ou un apprentissage afin de
            parfaire et détailler mes connaissances.
          </p>
          <img
            className={`introduction-image ${
              aboutIsVisible ? "animatedElementDelayTwo" : ""
            }`}
            src={profile}
          />
        </div>
      </div>
      <div className="services">
        <section
          ref={skills}
          className={`title ${
            skillsIsVisible ? "animatedElementDelayOne" : ""
          }`}
        >
          <h1 className="services-title">Services</h1>
          <p className="services-titled">Mes compétences</p>
        </section>

        <div
          className={`competences ${
            skillsIsVisible ? "animatedElementDelayThree" : ""
          }`}
        >
          {data.map((item) => (
            <Service key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
