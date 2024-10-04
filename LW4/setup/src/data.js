const questions = [
  {
    id: 1,
    title: 'What is React?',
    info: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers. React can be used as a base in the development of single-page or mobile applications.'
  },
  {
    id: 2,
    title: 'How do I create a new React app?',
    info: 'To create a new React app, you can use the Create React App tool. Run the command `npx create-react-app my-app` in your terminal. This will set up a new project with all the necessary configurations.'
  },
  {
    id: 3,
    title: 'What is JSX?',
    info: 'JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like `createElement()` or `appendChild()`. JSX makes the code easier to read and write.'
  },
  {
    id: 4,
    title: 'What is the use of useState in React?',
    info: 'The `useState` hook allows you to add state to a functional component. It returns an array with two elements: the current state and a function to update that state. It is commonly used for managing component-level state in React.'
  },
  {
    id: 5,
    title: 'What are props in React?',
    info: 'Props are short for "properties." They are read-only attributes that allow you to pass data from one component to another. Props are used to make components reusable by giving them different values in different situations.'
  }
];

export default questions;
