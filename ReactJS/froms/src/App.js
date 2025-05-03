 import './App.css';
import ControlForm1 from './Components/Controlled/ControlledForm1';
import UncontrolForm from './Components/UnControlled/UncontrolForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UncontrolForm/>
        <ControlForm1/>
      </header>
    </div>
  );
}

export default App;
