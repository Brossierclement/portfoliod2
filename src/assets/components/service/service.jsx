import "../service/service.scss";

function Service({ data }) {
  return (
    <div className="service">
      <div className="logo">
        <img className="logo-svg" src={data.logo} />
      </div>
      <h1 className="service-title">{data.title}</h1>
      {data.description ? (
        <p className="service-description">{data.description}</p>
      ) : (
        <div className="container-language">
          {data.language &&
            data.language.map((item, i) => (
              <img className="service-language" key={i} src={item} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Service;
