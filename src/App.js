import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Posts from "./Components/LIstaPosts";
import Materias from "./Components/Materias";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="materias" element={<Materias />} />
       
       <Route path='admin/' element={<Login />} />
      </Routes>

      </div>
    </>
  );
}

export default App;