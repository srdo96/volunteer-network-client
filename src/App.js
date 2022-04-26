import logo from "./logo.svg";
import "./App.css";
import Header from "./Page/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Auth/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
