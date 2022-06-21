import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import ListaPosts from "./Components/ListaPosts";
import Posts from "./Components/Posts";
import ListaMaterias from "./Components/ListaMateria";
import Materias from "./Components/Materias";
import Admin from "./Components/Admin";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/listaposts" element={<ListaPosts />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/listamaterias" element={<ListaMaterias />} />
        <Route path="/materias/:id" element={<Materias />} />
       {/* PARTE ADM */}
       <Route path='/admin/' element={<Admin />} />
      </Routes>

      </div>
    </>
  );
}

export default App;