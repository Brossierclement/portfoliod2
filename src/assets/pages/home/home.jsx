import "../home/home.scss";
import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Skill from "../../components/skill/skill";
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
              I’m a french web integrator, my supports are JavaScript and React.
              Outside of work i playing WoW and learning Figma.
            </p>
          </section>
          <section className="medium">
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
          <Footer />
        </div>
        <section className="right"></section>
      </main>
    </div>
  );
}

export default Home;
