import React, { useState } from 'react';
import data from './data'; // Імпорт даних з файлу data.js
import Question from './Question'; // Імпорт компонента Question

function App() {
  const [questions, setQuestions] = useState(data); // Стан для зберігання питань

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
