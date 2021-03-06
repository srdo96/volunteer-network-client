import "./App.css";
import Header from "./Page/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Auth/Login/Login";
import Register from "./Page/Auth/Register/Register";
import NotFound from "./Page/Shared/NotFound/NotFound";
import { Toaster } from "react-hot-toast";
import Add from "./Page/Add/Add";
import RequireAuth from "./Page/Auth/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <Add />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
