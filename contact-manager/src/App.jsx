import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddContact from "./Pages/AddContact";
import EditContact from "./Pages/EditContact";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AddContact" element={<AddContact/>}/>
      <Route path="/EditContact" element={<EditContact/>}/>

    </Routes>
    </BrowserRouter>
  );

}
export default App;