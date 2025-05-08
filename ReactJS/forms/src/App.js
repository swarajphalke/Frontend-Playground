 import './App.css';
import ControlForm from './Components/Controlled/ControlledForm';
import ControlForm1 from './Components/Controlled/ControlledForm1';
import UncontrolForm from './Components/UnControlled/UncontrolForm';
import UncontrolForm1 from './Components/UnControlled/UncontrolForm1';
import FormikForm from './Components/FormikLib/FormikForm'

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <hr />
         <UncontrolForm/>
        <UncontrolForm1/>
        <ControlForm/>
        <ControlForm1/>
        <FormikForm/>
     </div>
  );
}

export default App;
