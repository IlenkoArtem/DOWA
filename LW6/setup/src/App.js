import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import people from './data'; 

function App() {
  const [index, setIndex] = useState(0); 
  const { length } = people;


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearInterval(slider); 
  }, [index, length]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index === 0 ? length - 1 : index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index === length - 1 ? 0 : index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
