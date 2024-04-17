import logo from "./logo.svg";
import "./App.css";
// import Parent from "./passData/Parent";
import FormValidation from "./Form/FormValidation";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Edit from "./Form/Edit";
// import Featch from "./featch/Featch";
// import Create from "./featch/Create";
function App() {
  return (
    <div className="App">
      
      {/* <Parent/> */}
       <FormValidation/>
      
      {/* <BrowserRouter>
        <Routes>
        <Route path="/featch" element={<Featch />}/>
        <Route path="create" element={<Create />}/>
          
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
