import "./App.css";
import Greet from "./components/Greet";
import ClassEx from "./components/ClassEx";
import ClassLife from "./components/ClassLife";
import StateEx from "./components/StateEx";
import PropEx from "./components/PropEx";
import JsxEx from "./components/JsxEx";
import JsxAttribute from "./components/JsxAttribute";
import JsxFun from "./components/JsxFun";
function App() {
  const data = { name: "PROFOUND" };
  return (
    <div className="App">
      <header className="App-header">

        <JsxFun />
        <JsxAttribute />
        <Greet />
        <ClassEx />
        <ClassLife />
        <StateEx />
        <PropEx val={data} />
        <JsxEx />
         
      </header>
    </div>
  );
}

export default App;
