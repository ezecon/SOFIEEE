import "./App.css"
import {Toaster} from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/home";
import Success from "./pages/Success/Success";
import Notfound from "./pages/Not Found/notfound";

const App =()=>{
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Success/>}/>
      <Route path="/" element={<Notfound/>}/>
    </Routes>
    <Toaster/>
  </Router>
  );
      
};

export default App;