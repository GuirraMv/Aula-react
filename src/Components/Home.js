import Header from "./Header";
import Banner from "./Banner";
import Postshome from "./Postshome";
import Materiashome from "./Materiashome";

function Home() {
  return (
    <>
      <div className="Home">
        <Header/>
        <Banner />
        <Postshome />
        <Materiashome/>
      </div>
    </>
  );
}

export default Home;