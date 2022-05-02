import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <div className="App">
      <header className="Header">
          <Header/>
        </header>


         {/* <Routes>
          <Route path="*" element={<NotFound/>} />
        </Routes> */}
      
        
      </div>
    </>
  );
}

export default App;
