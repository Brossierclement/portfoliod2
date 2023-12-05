import "../home/home.scss";
import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Skill from "../../components/skill/skill";
import Project from "../../components/project/project";
import Footer from "../../components/footer/footer";

function Home() {
  const [data, setData] = useState();
  // améliorer le fetch
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
      <main className="main">
        <div className="left">
          <section className="high">
            <h1>Hi, i'm Clément 👋</h1>
            <p>
              I’m a french web integrator, my supports are{" "}
              <span className="imp">JavaScript</span> and{" "}
              <span className="imp">React</span>. Outside of work i playing WoW
              and learning Figma.
            </p>
          </section>
          <div className="medium">
            <section className="medium-left">
              <h1>Skills</h1>
              {data ? (
                <div className="skills">
                  {data[0].skills.map((item) => (
                    <Skill key={item.id} data={item} />
                  ))}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </section>
            <nav className="medium-right">
              <div className="navigation">
                <span></span>
                <a>About</a>
              </div>
              <div className="navigation">
                <span></span>
                <a>Experience</a>
              </div>
              <div className="navigation">
                <span></span>
                <a>Projects</a>
              </div>
            </nav>
          </div>
          <div className="down">
            <a href="https://github.com/Brossierclement" target="blank">
              Github
            </a>
            /
            <a href="https://twitter.com/Gulnyr_" target="blank">
              Twitter
            </a>
            /
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-brossier-a6b1292a3/"
              target="blank"
            >
              Linkedin
            </a>
          </div>
        </div>
        <section className="right">
          <section className="about">
            <h1>About</h1>
            <p>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a
              student-led design studio, and a huge corporation.
            </p>
            <p>
              My main focus these days is building products and leading projects
              for our clients at Upstatement. In my free time I've also released
              an online video course that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
            <p>
              When I’m not at the computer, I’m usually rock climbing, hanging
              out with my wife and two cats, or running around Hyrule searching
              for Korok seeds K o r o k s e e d s .
            </p>
          </section>
          <h1>Projects</h1>
          {data ? (
            <div className="projects">
              {data[1].projects.map((item) => (
                <Project key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <div className="about"></div>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default Home;
