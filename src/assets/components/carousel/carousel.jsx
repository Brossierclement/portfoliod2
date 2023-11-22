import "../carousel/carousel.scss";
import React, { useState, useEffect } from "react";
import left from "../../../../public/images/arrow-left-solid.svg";
import right from "../../../../public/images/arrow-right-solid.svg";
import Tag from "../tag/tag";
import Button from "../button/button";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const length = images.length;

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel-container">
      {length > 0 ? (
        <React.Fragment>
          <div className="carousel">
            <div className="carousel-images">
              <img
                className="image"
                src={images[index].logo}
                alt={`Image ${index + 1}`}
              />
            </div>
            <section className="carousel-infos">
              <h1 className="carousel-title">{images[index].title}</h1>
              <p className="carousel-titled">
                {images[index].about.realization}
              </p>
              <div className="carousel-tags">
                {images[index].tags.map((item, i) => (
                  <Tag key={i} tags={item} />
                ))}
              </div>
              <Button
                to={"https://github.com/Brossierclement"}
                logo={<i className="fa-brands fa-github fa-lg"></i>}
                className={"button-github"}
                title={"Voir le code"}
              />
              <p className="index">
                {index + 1} / {length}
              </p>
            </section>
          </div>
          <div className="carousel-button">
            <button className="left" onClick={handlePrevious}>
              <img src={left} />
            </button>
            <button className="right" onClick={handleNext}>
              <img src={right} />
            </button>
          </div>
        </React.Fragment>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default Carousel;
