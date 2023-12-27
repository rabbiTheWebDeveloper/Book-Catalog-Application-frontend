
import "./App.css";
import Banner from "./component/Banner";
import BestBook from "./component/BestBook";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import Header from "./component/header";

function App() {
 

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      {/* <Brand></Brand> */}

      
      <BestBook></BestBook>

      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}

export default App;
