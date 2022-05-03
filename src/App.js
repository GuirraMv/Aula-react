import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
//import { Route, Routes } from "react-router-dom";
//import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <div className="App">
      <header className="Header">
          <Header/>
        </header>

      <Banner />

      </div>
    </>
  );
}

export default App;