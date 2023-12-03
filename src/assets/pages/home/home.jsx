import "../home/home.scss";
import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Skill from "../../components/skill/skill";
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
            <div className="skills">
              {data?.map((item) => (
                <Skill key={item.id} data={item} />
              ))}
            </div>
          </section>
          <Footer />
        </div>
        <section className="right"></section>
      </main>
    </div>
  );
}

export default Home;
