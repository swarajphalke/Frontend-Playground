 import './App.css';
import ControlForm1 from './Components/Controlled/ControlledForm1';
import UncontrolForm from './Components/UnControlled/UncontrolForm';
import UncontrolForm1 from './Components/UnControlled/UncontrolForm1';

function App() {
  return (
    <div className="App">
         <UncontrolForm/>
        <UncontrolForm1/>
        <ControlForm1/>
     </div>
  );
}

export default App;
