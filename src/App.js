import "./App.css";
/* import ApiRequest from "./Components/Demo/ApiRequest";*/
import Header from './Components/Header';
import Logo from './Components/Logo'
import APIIntegration from './estudo/APIIntegration'

function App() {
  return (
    <>
      <div className="App">
        <header className="Header">
          <Logo />
          <Header/>
        </header>
        <APIIntegration />
      </div>
    </>
  );
}

export default App;
