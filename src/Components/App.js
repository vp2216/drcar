import Home from "./Home";
import Orders from "./Orders";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./Theme";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home dark={dark} />} />
          <Route path="/orders" element={<Orders dark={dark} />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
