import "../tag/tag.scss";

function Tag({ tags }) {
  // "dictionnaire"
  const color = {
    React: "rgb(112, 156, 168)",
    Redux: "rgb(153, 136, 180)",
    Html: "rgb(224, 108, 79)",
    Css: "rgb(100, 125, 216)",
    Js: "rgb(184, 170, 63)",
  };
  return (
    <div style={{ backgroundColor: color[tags] }} className="tag">
      {tags}
    </div>
  );
}

export default Tag;
