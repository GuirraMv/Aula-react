import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import Materias from "./Components/Materias";

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="materias" element={<Materias />} />
      </Routes>
      </div>
    </>
  );
}

export default App;