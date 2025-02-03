import React, { useState } from "react";
import "./App.css";

const NavBar = () => (
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Footer</a></li>
    </ul>
  </nav>
);

const Header = () => (
  <header id="home">
    <h1>header template</h1>
  </header>
);

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("Result: ");

  const calculateSum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(`Result: ${n1 + n2}`);
    } else {
      setResult("Please enter valid numbers.");
    }
  };

  return (
    <div id="calculator">
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
      <span>+</span>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
      <button onClick={calculateSum}>=</button>
      <span>{result}</span>
    </div>
  );
};

const Main = () => (
  <main id="about">
    <p>test paragraph</p>
    <Calculator />
  </main>
);

const Footer = () => (
  <footer id="contact">
    <p>footer test</p>
  </footer>
);

const App = () => (
  <div>
    <NavBar />
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
