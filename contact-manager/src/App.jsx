import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./Pages/Home";
import AddContact from "./Pages/AddContact";
import EditContact from "./Pages/EditContact";

function App(){
  return(
    <BrowserRouter>
    <nav style={{padding: "10px" ,borderBottom:"1px solid #ccc"}}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/AddContact">Add Contact</Link>
      <Link to="/EditContact">EditContact </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AddContact" element={<AddContact/>}/>
      <Route path="/EditContact" element={<EditContact/>}/>

    </Routes>
    </BrowserRouter>
  );

}
export default App;