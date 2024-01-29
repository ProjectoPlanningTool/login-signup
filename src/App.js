import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./LoginSignup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="*" element={<>Not Accessible Page</>} />
      </Routes>
    </>
  );
}

export default App;
