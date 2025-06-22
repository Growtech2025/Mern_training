# 🚀 React Class 1 – Introduction to React & useState Hook

This project is a foundational exercise from **Class 1** of the MERN Training Program. It uses [Create React App](https://create-react-app.dev/) and introduces essential React concepts including project setup, JSX, component structure, styling, and state management using the `useState` hook.

---

## 📁 Project Structure

```
Frontend/
└── React/
    └── class1/
        ├── public/
        │   └── index.html          # Main HTML file
        ├── src/
        │   ├── App.js              # Main component using useState
        │   ├── App.css             # Styles for App component
        │   ├── App.test.js         # Test placeholder
        │   ├── index.js            # App entry point
        │   ├── index.css           # Global styles
        │   ├── logo.svg            # React logo
        │   ├── reportWebVitals.js  # Optional performance monitor
        │   └── setupTests.js       # Jest test configuration
        ├── package.json            # Project metadata & dependencies
        └── .gitignore              # Ignored files (node_modules, etc.)
```

---

## 🔧 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm start
```

This will launch the app in your browser at `http://localhost:3000`.

### 3. Run Tests (Optional)

```bash
npm test
```

### 4. Build for Production

```bash
npm run build
```

---

## 🧠 Key Concepts Covered

### ✅ React Basics

* JSX Syntax
* Functional Components
* Importing CSS & Assets
* Rendering to the DOM using `ReactDOM.render`

### ✅ Introduction to useState Hook

React’s `useState` is a Hook that allows you to manage **state** in functional components.

**Syntax Example:**

```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // Initial count is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}
```

#### 🔍 Explanation:

* `useState(0)` sets the initial state value to `0`.
* `count` holds the current state.
* `setCount` updates the state.
* The component re-renders when state changes.

---

## 📘 Available Scripts

| Script          | Description                     |
| --------------- | ------------------------------- |
| `npm start`     | Launches development server     |
| `npm test`      | Runs test suite using Jest      |
| `npm run build` | Creates a production build      |
| `npm run eject` | Ejects config (not recommended) |

---

## 🧪 Testing Setup

* `App.test.js` is pre-configured with **React Testing Library** and **Jest**.
* To add tests, write test cases inside `App.test.js` or create new test files.

---

## 🎯 Learning Outcomes

By the end of this class/project, you should understand:

* How a React app is initialized and structured
* How to write basic JSX and render components
* How to manage state with the `useState` hook
* How to run, test, and build a React app

---

## 📓 Helpful Links

* [React Docs](https://reactjs.org/docs/getting-started.html)
* [Create React App](https://create-react-app.dev/)
* [React Hooks - useState](https://reactjs.org/docs/hooks-state.html)

---

## ✅ Next Steps

* Add more interactive components using `useState`
* Break UI into smaller reusable components
* Learn `useEffect` for side effects
* Explore props and conditional rendering

---

**Happy Coding! 💻**
