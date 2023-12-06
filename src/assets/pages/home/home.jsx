import "../home/home.scss";
import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Project from "../../components/project/project";
import me from "/images/me.jpg";
import Skill from "../../components/skill/skill";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch("/data.json")).json();
      setData(data);
    };
    dataFetch();
  }, []);
  return (
    <div className="home">
      <Header />
      <main className="content">
        <section className="introducing">
          <h1>Hi, i'm Clément 👋</h1>
          <p>
            I’m a french web integrator, my supports are <span>JavaScript</span>{" "}
            and <span>React</span>. Outside of work i'm playing WoW and learning
            Figma.
          </p>
          <nav>
            <a href="#" target="blank">
              Github
            </a>
            /
            <a href="#" target="blank">
              Linkedin
            </a>
            /
            <a href="#" target="blank">
              Twitter
            </a>
          </nav>
        </section>
        <section className="projects">
          <h1>Projects</h1>
          {data ? (
            <div className="projects-cards">
              {data[1].projects.map((item) => (
                <Project key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <div className="about">
          <section className="about-me">
            <h1>About</h1>
            <p>
              Hello again! Thanks for scrolling this far!! 🤗 I graduated from
              Juno College of Technology (cohort 24 aka uno juno!) And from York
              University & Sheridan College with a bachelor of honors in design.
              Other than coding, I spend most of my free time playing Animal
              Crossing (add me!) or any other video games. 🤓 I've also been
              trying to read more so feel free to reach out to me with any book
              recommendations!
            </p>
          </section>
          <div className="me">
            <img src={me} />
          </div>
        </div>
        <div>
          <section className="toolkit">
            <h1>Toolkit</h1>
            {data ? (
              <div className="skills">
                {data[0].skills.map((item, i) => (
                  <Skill key={i} data={item} />
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </div>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
