import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from './pages/NotFound';
import APIIntegration from "./Estudo/APIIntegration";


function App() {
  return (
    <>
      <div className="App">
      <APIIntegration />
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
