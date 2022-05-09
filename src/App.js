import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Posts from "./Components/Posts"
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
        <div className="SectionPosts">
          <Posts/>
        </div>
      </div>
    </>
  );
}

export default App;