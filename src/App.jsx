import "./App.css";
import Banner from "./components/Home/Banner";
import CategoryButtonGroup from "./components/Home/CategoryButtonGroup";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <>
      <Header></Header>
      <CategoryButtonGroup></CategoryButtonGroup>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}

export default App;
