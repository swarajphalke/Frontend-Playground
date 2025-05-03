import "./App.css";
import UseState from "./Components/UseState/UseState";
import UseEffect from "./Components/UseEffect/UseEffect";
import UseEffect1 from "./Components/UseEffect/UseEffect1";
import UseEffect2 from "./Components/UseEffect/UseEffect2";
import UseRef from "./Components/UseRef/UseRef";
import UseRef1 from "./Components/UseRef/UseRef1";
import { BioProvider } from "./Components/UseContext/UseContext";
import { Home } from "./Components/UseContext/Home";
import StudentHome from "./Components/UseContext/StudentHome";
import StudentData from "./Components/UseContext/StudentData";
import File2 from "./Components/UseContext/File2";
import { ReducerComp } from "./Components/UseReducer";
import Counter from "./Components/UseReducer/index2";
import MemoHook from "./Components/UseMemo/MemoHook";
function App() {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      {/* <UseEffect1 /> */}
      <UseEffect2 />
      <UseRef />
      <UseRef1 />
      <BioProvider>
        <Home />
      </BioProvider>
      <StudentData>
        <StudentHome />
      </StudentData>
      <File2 />
      <ReducerComp />
      <Counter/>
      <MemoHook/>
    </div>
  );
}

export default App;
