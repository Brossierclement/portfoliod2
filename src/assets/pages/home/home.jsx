import "../home/home.scss";
import profile from "../../images/profile.jpg";
import Button from "../../components/button/button";

function Home() {
  return (
    <main className="home">
      <div className="profile">
        <img className="me" src={profile} alt="clement" />
        <h1 className="name">Clément Brossier</h1>
        <p className="job">Intégrateur web & fan de jeux vidéo</p>
        <nav className="projects-github">
          <Button
            to={""}
            logo={<i className="fa-regular fa-folder-open fa-lg"></i>}
            className={"button-projects"}
            title={"Projets"}
          />
          <Button
            to={""}
            logo={<i className="fa-brands fa-github fa-lg"></i>}
            className={"button-github"}
            title={"Github"}
          />
        </nav>
      </div>
    </main>
  );
}

export default Home;
