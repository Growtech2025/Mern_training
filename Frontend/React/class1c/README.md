# 🌟 React Class 1c – Props and Component Interaction

This project (`class1c`) is part of the **MERN Training Program** and is focused on learning **React component communication using props**, **JSX rendering**, and **basic interaction via event handling**.

It introduces how to:

* Create reusable components
* Pass data using `props`
* Trigger state updates via callback functions

---

## 📁 Project Structure

```
Frontend/
└── React/
    └── class1c/
        ├── public/
        │   └── index.html           # HTML entry point
        ├── src/
        │   ├── App.js               # Parent component
        │   ├── App.css              # Styling file
        │   ├── Card.js              # Child component receiving props
        │   ├── index.js             # ReactDOM render logic
        │   └── setupTests.js        # Jest testing config (optional)
        ├── package.json             # Metadata and dependencies
        └── .gitignore               # Git ignored files
```

---

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`

3. **Build for production**

   ```bash
   npm run build
   ```

---

## 🧠 Concepts Covered

### 🧩 React Props & Component Composition

* The `Card` component receives `myName`, `myAge`, and `changeAge` as props from the parent component (`App.js`).
* Props are used to display dynamic content and to call back into parent components.

### 📦 Component Example

```jsx
function Card({ myName, myAge, changeAge }) {
  return (
    <div className="card">
      <p>My name is {myName}</p>
      <button>change Name</button>

      <p>My city name is Indore</p>
      <button>change city</button>

      <p>My age is {myAge}</p>
      <button onClick={() => changeAge(55)}>change age</button>

      <p>My Qualification is B.Tech</p>
      <button>change Qualification</button>

      <p>My state is M.P.</p>
      <button>change state</button>
    </div>
  );
}
```

### 🧠 Learning Outcome

* Understanding how data flows from parent to child via props
* Adding `onClick` event handlers to trigger actions
* Styling components using external CSS

---

## 🎨 Styling

* Basic CSS is provided in `App.css` for layout and styling.
* You can extend or modularize it using CSS Modules or Tailwind.

---

## 🔧 Available Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `npm start`     | Start development server       |
| `npm test`      | Run tests (if available)       |
| `npm run build` | Build optimized app            |
| `npm run eject` | Eject CRA config (use caution) |

---

## ✅ Next Steps

* Make each button functional with relevant state update logic in the parent component
* Add state management using `useState`
* Try lifting more state up to practice two-way binding
* Break the `Card` into smaller sub-components for practice

---

## 📚 Resources

* [React Docs – Components & Props](https://reactjs.org/docs/components-and-props.html)
* [React Docs – Handling Events](https://reactjs.org/docs/handling-events.html)
* [React Docs – State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

---

**Happy Coding and Keep Building! 🛠️**
