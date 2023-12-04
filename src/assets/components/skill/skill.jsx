import "./skill.scss";

function Skill({ data }) {
  return (
    <section className="skill">
      <h2>{data.name}</h2>
      {data.skill.map((item, i) => (
        <div key={i} className="tool">
          <img src={item.logo} />
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Skill;
