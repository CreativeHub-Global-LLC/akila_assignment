import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/index";
import Welcome from "./pages/welcome";
import Login from "./pages/login";

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={ <Homepage /> } />
        <Route exact path="/login" element={ <Login /> } />
      </Routes>
    
  ) 
  

}

export default App;
