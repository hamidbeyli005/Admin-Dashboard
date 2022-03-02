import "./App.css";
import Left from "./components/Left.js";
import Main from "./components/Main";
import Right from "./components/Right.js";

function App() {
  return (
    <div className="containerMain">
      <Left />
      <Main />
      <Right />
    </div>
  );
}

export default App;
