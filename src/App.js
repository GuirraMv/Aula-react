import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import ListaPosts from "./Components/ListaPosts";
import Posts from "./Components/Posts";
import Materias from "./Components/Materias";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/listaposts" element={<ListaPosts />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/materias" element={<Materias />} />
       
       <Route path='admin/' element={<Login />} />
      </Routes>

      </div>
    </>
  );
}

export default App;