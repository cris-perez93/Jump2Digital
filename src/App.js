import { Fragment } from "react";
import Vista from "./components/Vista";
import Formulario from "./components/Formulario";

function App() {
  return (
   <Fragment>
    <div className="container">
       <Vista/>
       <Formulario/>
     </div>
   </Fragment>
    
  );
}

export default App;
