import "./App.css";
import UseState from "./Components/UseState/UseState";
import UseEffect from "./Components/UseEffect/UseEffect";
import UseEffect1 from "./Components/UseEffect/UseEffect1";
import UseEffect2 from "./Components/UseEffect/UseEffect2";
import UseRef from "./Components/UseRef/UseRef";
import UseRef1 from "./Components/UseRef/UseRef1";
import { BioProvider } from "./Components/UseContext/UseContext";
import {Home} from "./Components/UseContext/Home";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseEffect1 />
      <UseEffect2 />
      <UseRef />
      <UseRef1 />
      <BioProvider>
        <Home />
      </BioProvider>
    </div>
  );
}

export default App;
