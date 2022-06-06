import Header from "./Header";
import Banner from "./Banner";
import Postshome from "./Postshome";
import Materiashome from "./Materiashome";
import Sobre from "./Sobre";

function Home() {
  return (
    <>
      <div className="Home">
        <Header/>
        <Banner />
        <Postshome />
        <Materiashome/>
        <Sobre/>
      </div>
    </>
  );
}

export default Home;