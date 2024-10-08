﻿import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'; // Імпорт іконок

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false); // Стан для відображення відповіді

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>} {/* Умова для показу відповіді */}
    </article>
  );
};

export default Question;
