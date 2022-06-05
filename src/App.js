import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Postshome from "./Components/Postshome";
import Materiashome from "./Components/Materiashome";
import Sobre from "./Components/Sobre";
import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom";
import Posts from "./Components/Posts";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div className="App">
      {/* <header className="Header">
        <Header/>
      </header>
      <Banner />
      <div className="SectionPosts">
        <Postshome />
      </div>
      <div className="SectionMaterias">
        <Materiashome/>
      </div>
        <Sobre/> */}
      
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      </div>
    </>
  );
}

export default App;