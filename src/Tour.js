import React, { useState } from "react";

const Tour = ({ tour, deleteTour }) => {
  const { id, name, info, price, image } = tour;
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article key={id} className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? `${info}` : `${info.substring(0, 200)}`}{" "}
          <button onClick={handleReadMore}>
            {readMore ? "...Read Less" : "...Read More"}
          </button>
        </p>
        <button onClick={() => deleteTour(id)} className="delete-btn">
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
