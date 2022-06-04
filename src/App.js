import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Postshome from "./Components/Postshome";
import Materiashome from "./Components/Materiashome";
import Sobre from "./Components/Sobre"
import { Route, Routes, NavLink } from "react-router-dom";
//import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <div className="App">
      <header className="Header">
        <Header/>
      </header>
      <Banner />
      <div className="SectionPosts">
        <Postshome />
      </div>
      <div className="SectionMaterias">
        <Materiashome/>
      </div>
        <Sobre/>
      </div>
    </>
  );
}

export default App;