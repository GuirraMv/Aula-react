import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import ListaPosts from "./Components/ListaPosts";
import Posts from "./Components/Posts";
import ListaMaterias from "./Components/ListaMateria";
import Materias from "./Components/Materias";
import Admin from "./Components/Admin";
import CadastraCards from "./Components/CadastraCard";
import CadastraMaterias from "./Components/CadastraMateria";
import EditCards from "./Components/EditCards";
import EditMaterias from "./Components/EditMateria";
import Sobre from "./Components/Sobre";

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
        <Route path="/sobre" element={<Sobre />} />
       {/* PARTE ADM */}
       <Route path='/admin/' element={<Admin />} />
       <Route path='/cadastracards' element={<CadastraCards />} />
       <Route path='/cadastramaterias' element={<CadastraMaterias />} />
       <Route path='/editcards/:cardsId' element={<EditCards />} />
       <Route path='/editmaterias/:materiasId' element={<EditMaterias />} />
      </Routes>
      </div>
    </>
  );
}

export default App;