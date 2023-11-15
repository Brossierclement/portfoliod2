import "../tag/tag.scss";

function Tag({ tags }) {
  // "dictionnaire"
  const color = {
    // React: "rgb(131 166 175)",
    // Redux: "rgb(145 130 169)",
    // Html: "rgb(167 135 127",
    // Css: "rgb(118 126 157)",
    // JS: "rgb(169 164 125)",
  };
  return (
    <div style={{ backgroundColor: color[tags] }} className="tag">
      <p>{tags}</p>
    </div>
  );
}

export default Tag;
