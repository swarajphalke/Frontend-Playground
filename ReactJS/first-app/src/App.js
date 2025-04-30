import "./App.css";
import ClassDemo from "./Components/Classes/ClassDemo";
import ClassLife from "./Components/Classes/ClassLife";
import ClassLife1 from "./Components/Classes/ClassLife1";
import FunDemo from "./Components/Functions/FunDemo";
import JsxAttribute from "./Components/Functions/JsxAttribute";
import JsxDemo from "./Components/Functions/JsxEx";
import JsxFunction from "./Components/Functions/JsxFunction";
import JsxFunction1 from "./Components/Functions/JsxFunction1";
import PropEx from "./Components/Functions/PropEx";
import Hook1 from "./Components/States/useState";
function App() {
  const data = { name: "PROFOUND" };
  return (
    <div className="App ">
      <ClassDemo />
      <ClassLife />
      <ClassLife1 />
      <FunDemo />
      <PropEx val={data} />
      <JsxDemo />
      <JsxFunction/>
      <JsxFunction1/>
      <JsxAttribute />
      <Hook1/>
          </div>
  );
}

export default App;
