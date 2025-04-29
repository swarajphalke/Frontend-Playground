import "./App.css";
import ClassDemo from "./Components/Classes/ClassDemo";
import ClassLife from "./Components/Classes/ClassLife";
import FunDemo from './Components/Functions/FunDemo'
import StateEx from './Components/Classes/StateEx'
import StateEx1 from "./Components/Classes/StateEx1";
function App() {
  return (
    <div className="App">
      <ClassDemo />
      <ClassLife/>
      <StateEx/>
      <StateEx1/>
      <FunDemo />
    </div>
  );
}

export default App;
