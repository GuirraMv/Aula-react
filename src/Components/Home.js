// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Banner from "./Banner";
import Postshome from "./Postshome";
import Materiashome from "./Materiashome";
import Sobre from "./Sobre";
import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="Home">
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

export default Home;